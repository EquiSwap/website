import { Controller, Context, Route, Method } from "@apollosoftwarexyz/cinnamon";

@Controller("/")
export default class IndexController {

    @Route(Method.GET, "/")
    public async index(ctx: Context) : Promise<void> {
        ctx.body = {hello: true};
    }

}