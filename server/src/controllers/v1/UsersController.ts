import { Controller, Context, Route, Method } from '@apollosoftwarexyz/cinnamon';

@Controller('v1', 'user')
export default class UsersController {

    @Route(Method.GET, '/')
    public async index(ctx: Context) : Promise<void> {
        ctx.success({
            id: 69,
            username: 'bob',
            email: 'bob@example.com'
        });
    }

}
