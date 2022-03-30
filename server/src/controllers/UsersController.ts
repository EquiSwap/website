import { Controller, Context, Route, Method } from "@apollosoftwarexyz/cinnamon";

@Controller("/users")
export default class UsersController {

    @Route(Method.GET, "/")
    public async index(ctx: Context) : Promise<void> {
        ctx.body = {
            id: 69,
            username: "bob",
            email: "bob@example.com"
        };
    }

}