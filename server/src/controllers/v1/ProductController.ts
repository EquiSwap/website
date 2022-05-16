import {Body, Context, Controller, Method, Middleware, Route} from '@apollosoftwarexyz/cinnamon';
import {ProductCategory} from '../../models/ProductCategory';
import {MaybeAuthorized, OnlyAuthorized} from '../../middlewares/Authorization';
import {createValidator} from '@apollosoftwarexyz/cinnamon-validator';
import {Product} from '../../models/Product';
import {distance, unique, writeFile} from '../../utils';
import axios from 'axios';
import {User} from '../../models/User';

@Controller('v1', 'product')
export default class ProductController {

    @Middleware(MaybeAuthorized)
    @Route(Method.GET, '/categories')
    public async categories(ctx: Context) : Promise<void> {
        const categoryRepo = ctx.getEntityManager()!.getRepository(ProductCategory);
        const categories = await categoryRepo.findAll({
            populate: ['products', 'products.owner']
        });

        const distances = await this.augmentProductDistances(
            ctx.user,
            categories.map(category => category.products.getItems().map(product => ({
                id: product.id,
                postcode: product.owner.postcode,
            }))).flat()
        );

        ctx.success({ categories, distances });
    }

    @Route(Method.GET, '/categories/list')
    public async listCategories(ctx: Context) : Promise<void> {
        const categoryRepo = ctx.getEntityManager()!.getRepository(ProductCategory);
        const categories = await categoryRepo.findAll();

        ctx.success(categories);
    }

    @Route(Method.GET, '/categories/trending')
    public async trendingCategories(ctx: Context) : Promise<void> {
        const categoryRepo = ctx.getEntityManager()!.getRepository(ProductCategory);
        const categories = await categoryRepo.findAll({
            limit: 3
        });

        ctx.success(categories);
    }

    @Middleware(Body({
        options: {
            limit: '32mb'
        }
    }))
    @Middleware(OnlyAuthorized)
    @Route(Method.POST, '/create')
    public async createProduct(ctx: Context) : Promise<void> {
        const [validationStatus, requestPayload] = createValidator({
            title: {
                type: 'string',
                required: true,
                minLength: 5,
                maxLength: 100
            },
            description: {
                type: 'string',
                required: true,
                minLength: 30,
                maxLength: 300
            },
            image: {
                type: 'string',
                required: true,
            },
            category: {
                type: 'string',
                required: true
            }
        }).validate(ctx.request.body);

        // If the validation fails, exit early with an error.
        if (!validationStatus.success) {
            return ctx.error(400, 'ERR_INVALID_DATA', validationStatus.message);
        }

        // Otherwise, extract the useful data from the request.
        const {
            title,
            description,
            image,
        } = requestPayload;

        // Process image.
        let encodedImageData, extension;
        try {
            encodedImageData = image.split(',')[1];
            extension = image.split('image/')[1].split(';')[0];

            if (!/^[a-zA-Z]+$/.test(extension) || extension.length > 5) throw new Error('Illegal file name.');
        } catch(ex) {
            return ctx.error(400, 'ERR_INVALID_PAYLOAD', 'The specified image is invalid.');
        }

        const imageData = Buffer.from(encodedImageData, 'base64');

        // Process category.
        const rawCategory = requestPayload.category;
        const productCategoryRepo = ctx.getEntityManager()!.getRepository(ProductCategory);
        const category = await productCategoryRepo.findOne({ id: rawCategory });
        if (!category) {
            return ctx.error(400, 'ERR_INVALID_DATA', 'Invalid category.');
        }

        // Create product.
        const productRepo = ctx.getEntityManager()!.getRepository(Product);
        const product = new Product({
            title,
            description,
            image: '/v0/images/pending.png',
            category,
            owner: ctx.user
        });
        await productRepo.persistAndFlush(product);

        await writeFile('static/v0/images/products', product.id, extension, imageData);
        product.image = `/v0/images/products/${product.id}.${extension}`;
        await productRepo.persistAndFlush(product);

        ctx.success({
            product
        });
    }

    /**
     * List a product.
     * @param ctx
     */
    @Middleware(MaybeAuthorized)
    @Route(Method.GET, '/:id')
    public async product(ctx: Context) : Promise<void> {
        // If the ID is not a UUID, return a 404 immediately.
        if (ctx.params.id.length != 36) {
            return ctx.error(404, 'ERR_NOT_FOUND', 'The requested product could not be found.');
        }

        const productRepo = ctx.getEntityManager()!.getRepository(Product);
        const product = await productRepo.findOne({ id: ctx.params.id }, {
            populate: ['owner']
        });

        if (!product) {
            return ctx.error(404, 'ERR_NOT_FOUND', 'The requested product could not be found.');
        }

        const distance = Math.round((await this.augmentProductDistances(ctx.user, [{
            id: product.id,
            postcode: product.owner.postcode
        }]))[product.id]);

        ctx.success({ product, distance });
    }

    private async augmentProductDistances(relativeTo: User, products: {
        id: string;
        postcode: string;
    }[]) : Promise<PostcodeMap> {
        if (!relativeTo) return {};

        const relativeToPostcode = relativeTo.postcode;
        if (!relativeToPostcode) return {};

        const locations = {};
        const locationData = (await axios.post('https://api.postcodes.io/postcodes', {
            postcodes: unique([
                relativeToPostcode,
                ...products.map(product => product.postcode).filter(entry => entry)
            ])
        })).data.result;

        locationData.forEach((location) => {
            locations[location.query] = ({
                longitude: location.result.longitude,
                latitude: location.result.latitude
            });
        });

        if (!locations[relativeToPostcode]) return {};

        const distances = {};
        for (const query in locations) {
            distances[query] = distance(locations[relativeToPostcode], locations[query]);
        }

        const postcodeMap = {};
        products.forEach(product => {
            postcodeMap[product.id] = Math.round(distances[product.postcode]);
        });
        return postcodeMap;
    }

}

interface PostcodeMap {
    [key: string]: number;
}
