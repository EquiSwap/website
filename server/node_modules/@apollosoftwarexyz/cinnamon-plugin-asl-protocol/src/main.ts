import Cinnamon, { CinnamonPlugin, CinnamonWebServerModulePlugin, WebServer } from '@apollosoftwarexyz/cinnamon';

export class ApolloProtocol
    extends CinnamonPlugin
    implements CinnamonWebServerModulePlugin
{
    constructor(framework: Cinnamon) {
        super(framework, "xyz.apollosoftware", "cinnamon.protocol");
    }

    async onInitialize() {
        return true;
    }

    async beforeRegisterControllers() {
        this.framework
            .getModule<WebServer>(WebServer.prototype)
            .server.use(async (ctx, next) => {
                ctx.success = function (payload?: any) {
                    ctx.response.status = 200;
                    ctx.response.type = "application/json";
                    ctx.response.body = JSON.stringify({
                        success: true,
                        payload,
                    });
                };

                ctx.successRaw = function (
                    rawPayload: any,
                    mimeType: string = "text/plain"
                ) {
                    if (typeof rawPayload === "object")
                        rawPayload["raw"] = true;

                    ctx.response.status = 200;
                    ctx.response.type = mimeType;
                    ctx.response.body =
                        mimeType !== "application/json" ? rawPayload : "null";
                };

                ctx.error = function (
                    code: number = 400,
                    error: string = "ERR_UNEXPECTED",
                    message: string = "An unexpected error occurred."
                ) {
                    ctx.response.status = code;
                    ctx.response.type = "application/json";
                    ctx.response.body = JSON.stringify({
                        success: false,
                        error,
                        message,
                    });
                };

                return await next();
            });
    }
}
