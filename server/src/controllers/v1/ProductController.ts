import {Body, Context, Controller, Method, Middleware, Route} from '@apollosoftwarexyz/cinnamon';
import {ProductCategory} from '../../models/ProductCategory';
import {OnlyAuthorized} from '../../middlewares/Authorization';
import {createValidator} from '@apollosoftwarexyz/cinnamon-validator';
import {Product} from '../../models/Product';
import {writeFile} from '../../utils';

@Controller('v1', 'product')
export default class ProductController {

    @Route(Method.GET, '/categories')
    public async categories(ctx: Context) : Promise<void> {
        const categoryRepo = ctx.getEntityManager()!.getRepository(ProductCategory);
        const categories = await categoryRepo.findAll({
            populate: ['products', 'products.owner']
        });

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
    @Route(Method.GET, '/:id')
    public async product(ctx: Context) : Promise<void> {
        const productRepo = ctx.getEntityManager()!.getRepository(Product);
        const product = await productRepo.findOne({ id: ctx.params.id }, {
            populate: ['owner']
        });

        if (!product) {
            return ctx.error(404, 'ERR_NOT_FOUND', 'The requested product could not be found.');
        }

        ctx.success(product);
    }

}
