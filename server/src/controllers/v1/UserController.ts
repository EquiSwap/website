import { Controller, Context, Route, Method, Middleware, Body } from '@apollosoftwarexyz/cinnamon';
import { createValidator } from '@apollosoftwarexyz/cinnamon-validator';
import { EMAIL_REGEX, writeFile } from '../../utils';
import { User } from '../../models/User';
import { OnlyAuthorized } from '../../middlewares/Authorization';

@Controller('v1', 'user')
export default class UserController {

    @Middleware(Body({
        options: {
            limit: '16mb'
        }
    }))
    @Middleware(OnlyAuthorized)
    @Route(Method.POST, '/setProfilePicture')
    public async setProfilePicture(ctx: Context) : Promise<void> {
        const [validationStatus, { profilePicture }] = createValidator({
            profilePicture: {
                type: 'string',
                required: true
            }
        }).validate(ctx.request.body);

        // If the validation fails, exit early with an error.
        if (!validationStatus.success) {
            return ctx.error(400, 'ERR_INVALID_DATA', validationStatus.message);
        }

        let encodedImageData, extension;
        try {
            encodedImageData = profilePicture.split(',')[1];
            extension = profilePicture.split('image/')[1].split(';')[0];

            if (!/^[a-zA-Z]+$/.test(extension) || extension.length > 5) throw new Error('Illegal file name.');
        } catch(ex) {
            return ctx.error(400, 'ERR_INVALID_PAYLOAD', 'The specified image is invalid.');
        }

        const imageData = Buffer.from(encodedImageData, 'base64');
        await writeFile('static/v0/images/users', ctx.user.id, extension, imageData);

        const userRepo = ctx.getEntityManager()!.getRepository(User);
        ctx.user.profilePicture = `/v0/images/users/${ctx.user.id}.${extension}`;
        await userRepo.persistAndFlush(ctx.user);

        return ctx.success({
            profilePicture,
            message: 'Your profile picture has been updated!'
        });
    }

    /**
     * Update the current user's profile.
     * @param ctx
     */
    @Middleware(Body())
    @Middleware(OnlyAuthorized)
    @Route(Method.POST, '/update')
    public async update(ctx: Context) : Promise<void> {
        const [validationStatus, requestPayload] = createValidator({
            displayName: {
                type: 'string',
                maxLength: 255
            },
            email: {
                type: 'string',
                required: true,
                maxLength: 255,
                matches: EMAIL_REGEX
            },

            street: {
                type: 'string'
            },
            county: {
                type: 'string'
            },
            postcode: {
                type: 'string'
            },
            country: {
                type: 'string'
            }
        }).validate(ctx.request.body);

        // If the validation fails, exit early with an error.
        if (!validationStatus.success) {
            return ctx.error(400, 'ERR_INVALID_DATA', validationStatus.message);
        }

        // Otherwise, extract the useful data from the request.
        const {
            displayName,
            email,

            street,
            county,
            postcode,
            country
        } = requestPayload;

        const userRepo = ctx.getEntityManager()!.getRepository(User);
        ctx.user.displayName = displayName;
        ctx.user.email = email;

        ctx.user.street = street;
        ctx.user.county = county;
        ctx.user.postcode = postcode;
        ctx.user.country = country;
        await userRepo.persistAndFlush(ctx.user);

        ctx.success({
            user: ctx.user,
            message: 'Changes saved!'
        });
    }

    @Middleware(OnlyAuthorized)
    @Route(Method.DELETE, '/delete')
    public async deleteAccount(ctx: Context) : Promise<void> {
        const userRepo = ctx.getEntityManager()!.getRepository(User);
        await userRepo.removeAndFlush(ctx.user);

        ctx.success({
            message: 'You have been signed out and your account has been deleted.'
        });
    }

}
