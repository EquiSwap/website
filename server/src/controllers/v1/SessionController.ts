import { Body, Context, Controller, Method, Middleware, Route } from '@apollosoftwarexyz/cinnamon';
import { createValidator } from '@apollosoftwarexyz/cinnamon-validator';
import { User } from '../../models/User';
import * as argon2 from 'argon2';

import { EMAIL_REGEX, equiSwapHashingOptions } from '../../utils';
import { wrap } from '@mikro-orm/core';
import { Session } from '../../models/Session';

@Controller('v1', 'session')
export default class SessionController {

    @Middleware(Body())
    @Route(Method.POST, '/login')
    public async login(ctx: Context): Promise<void> {
        // Get and validate the username and the password from the request body.
        const [validationStatus, { username, password }] = createValidator({
            username: {
                type: 'string',
                required: true,
                minLength: 1,
                maxLength: 20,
                matches: /^([A-Za-z\d_.]+)$/,
            },
            password: {
                type: 'string',
                required: true,
            },
        }).validate(ctx.request.body);

        // If the validation fails, exit early with an error.
        if (!validationStatus.success) {
            return ctx.error(400, 'ERR_INVALID_DATA', validationStatus.message);
        }

        // Load the user repository.
        const userRepo = ctx.getEntityManager()!.getRepository(User);

        // Fetch the user from the user repository.
        const user = await userRepo.findOne({ username });
        if (user == null) {
            return ctx.error(
                401,
                'ERR_UNAUTHORIZED',
                'You entered an invalid username or password combination.'
            );
        }

        // Verify the entered password against the password in the database.
        try {
            if (
                !(await argon2.verify(
                    user.password,
                    password,
                    equiSwapHashingOptions
                ))
            ) {
                return ctx.error(
                    401,
                    'ERR_UNAUTHORIZED',
                    'You entered an invalid username or password combination.'
                );
            }
        } catch (ex) {
            return ctx.error(
                401,
                'ERR_UNAUTHORIZED',
                'There was a problem checking your password. If the issue persists, please get in touch.'
            );
        }

        // If we're here, all the above checks were valid, so let's start a
        // session for the current user and return the details.
        const session = await SessionController._startSession(
            ctx,
            user
        );

        return ctx.success({
            user: wrap(user).toJSON(),
            authToken: session.token
        });
    }

    @Middleware(Body())
    @Route(Method.POST, '/register')
    public async register(ctx: Context) : Promise<void> {
        // Get and validate the user details from the request body.
        const [validationStatus, requestPayload] = createValidator({
            username: {
                type: 'string',
                required: true,
                minLength: 1,
                maxLength: 20,
                matches: /^([A-Za-z0-9_.]+)$/,
            },
            email: {
                type: 'string',
                required: true,
                maxLength: 255,
                matches: EMAIL_REGEX
            },
            dateOfBirth: {
                type: 'string',
                required: true,
                // YYYY-MM-DD
                matches: /^\d{4}-\d{2}-\d{2}$/
            },
            displayName: {
                type: 'string',
                required: false,
                maxLength: 30,
            },
            password: {
                type: 'string',
                required: true,
                minLength: 8,
                maxLength: 60,
            },
        }).validate(ctx.request.body);

        // If the validation fails, exit early with an error.
        if (!validationStatus.success) {
            return ctx.error(400, 'ERR_INVALID_DATA', validationStatus.message);
        }

        // Otherwise, extract the useful data from the request.
        const {
            username,
            email,
            displayName,
            dateOfBirth,
            password,
        } = requestPayload;

        const userRepo = ctx.getEntityManager()!.getRepository(User);

        if ((await userRepo.count({ username })) > 0) {
            return ctx.error(
                403, 'ERR_NOT_PERMITTED',
                'A user already exists with that username.'
            );
        }

        const user = new User({
            username,
            email,
            displayName,
            dateOfBirth,
            passwordHash: await argon2.hash(password, equiSwapHashingOptions),
        });

        await userRepo.persist(user).flush();

        const session = await SessionController._startSession(
            ctx,
            user
        );

        return ctx.success({
            user: wrap(user).toJSON(),
            authToken: session.token,
            message: 'Your account was created successfully. Welcome to EquiSwap!',
        });
    }

    private static async _startSession(ctx: Context, user: User) : Promise<Session> {
        const ipAddress = (ctx.headers['cf-connecting-ip'] as string) ?? ctx.ip;

        const sessionRepo = ctx.getEntityManager()!.getRepository(Session);
        const session = new Session({ user, ipAddress });

        // Delete any existing sessions for the user, and persist the new session to the database.
        await sessionRepo.nativeDelete({ user });
        await sessionRepo.persist(session).flush();

        return session;
    }

}
