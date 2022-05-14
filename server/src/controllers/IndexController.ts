import Cinnamon, { Controller, Context, Route, Method } from '@apollosoftwarexyz/cinnamon';

@Controller('/')
export default class IndexController {

    @Route(Method.GET, '/')
    public async index(ctx: Context) : Promise<void> {
        if (Cinnamon.defaultInstance.inDevMode) {
            return ctx.success({
                development: true
            });
        } else ctx.redirect('https://equiswap.org/');
    }

}
