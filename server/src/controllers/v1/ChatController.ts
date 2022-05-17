import {Context, Controller, Method, Middleware, Route} from '@apollosoftwarexyz/cinnamon';
import {OnlyAuthorized} from '../../middlewares/Authorization';
import {ChatMessage} from '../../models/ChatMessage';
import {User} from '../../models/User';
import {expr, wrap} from '@mikro-orm/core';

@Controller('v1', 'chat')
export default class ChatController {

    /**
     * Returns the list of conversations for a user.
     * @param ctx
     */
    @Middleware(OnlyAuthorized)
    @Route(Method.GET, '/')
    public async index(ctx: Context) : Promise<void> {
        const messageRepo = ctx.getEntityManager()!.getRepository(ChatMessage);
        const messages = await messageRepo.find({
            $or: [
                { author: ctx.user!.id },
                { target: ctx.user!.id }
            ]
        }, {
            populate: ['author', 'target'],
            orderBy: {
                createdAt: 'DESC'
            }
        });

        const authors: User[] = [];
        const conversations: {
            [key: string]: {
                messages: any[],
                summary?: string
            }
        } = {};

        messages.forEach((message: ChatMessage) => {
            // The user in the message that is not the current user.
            const otherUser: User = message.author.id !== ctx.user!.id ? message.author : message.target;
            // Add the author to authors if not already there.
            if (!authors.find($author => $author.id === otherUser.id)) authors.push(otherUser);

            // Add the message to the conversation.
            const dehydratedMessage = {
                ...message,
                author: message.author.id,
                target: message.target.id
            };
            if (!conversations[otherUser.id]) conversations[otherUser.id] = { messages: [ dehydratedMessage ] };
            else {
                conversations[otherUser.id].messages.push(dehydratedMessage);
            }
        });

        Object.keys(conversations).forEach(conversation => {
            conversations[conversation].summary = conversations[conversation].messages[0].message;
        });

        return ctx.success({ conversations, authors });
    }

    @Middleware(OnlyAuthorized)
    @Route(Method.GET, '/lookup/:username')
    public async lookupUser(ctx: Context) : Promise<void> {
        const userRepo = ctx.getEntityManager()!.getRepository(User);
        const user = await userRepo.findOne({ [expr('lower(username)')]: ctx.params.username });

        if (!user) {
            return ctx.error(400, 'ERR_NOT_FOUND', 'The requested user could not be found.');
        }

        if (user.id === ctx.user!.id) {
            return ctx.error(400, 'ERR_INVALID', 'You cannot start a conversation with yourself!');
        }

        ctx.success({ user: wrap(user).toJSON() });
    }

}
