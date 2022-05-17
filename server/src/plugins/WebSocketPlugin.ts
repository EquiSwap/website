import Cinnamon, {
    CinnamonPlugin,
    CinnamonWebServerModulePlugin,
    WebServer
} from '@apollosoftwarexyz/cinnamon';

import {WebSocketHandler} from '../realtime/chat';
import websockify from 'koa-websocket';

interface WebSocketPluginParams {
    framework: Cinnamon;
    handler: WebSocketHandler;
}

export default class WebSocketPlugin extends CinnamonPlugin implements CinnamonWebServerModulePlugin {
    private static readonly __organisation: string = 'JoshEverett';
    private static readonly __name: string = 'WebSocketPlugin';

    private readonly handler: WebSocketHandler;

    /**
     * Instance of the Koa webserver wrapped with koa-websocket.
     * This is initialized on the onInitialize function
     */
    public websocketServer?: websockify.App;

    constructor(params: WebSocketPluginParams) {
        super(params.framework, WebSocketPlugin.__organisation, WebSocketPlugin.__name);
        this.handler = params.handler;
    }

    async onInitialize(): Promise<boolean | void> {
        return;
    }

    async beforeRegisterControllers(): Promise<void> {
        const koa = this.framework.getModule<WebServer>(WebServer.prototype).server;
        this.websocketServer = websockify(koa);

        this.websocketServer.ws.onConnection = async (socket, message) => {
            await this.handler.routeHandler(socket, message);
        };
    }

    async afterRegisterControllers(): Promise<void>{
        return;
    }

}
