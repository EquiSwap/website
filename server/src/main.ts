import Cinnamon, { ServeStatic } from '@apollosoftwarexyz/cinnamon';
import { ApolloProtocol } from '@apollosoftwarexyz/cinnamon-plugin-asl-protocol';
import { CinnamonCors } from '@apollosoftwarexyz/cinnamon-plugin-cors';
import WebSocketPlugin from './plugins/WebSocketPlugin';
import {WebSocketHandler} from './realtime/chat';

(async () => {
    await Cinnamon.initialize({
        async load(framework) {
            framework.use(new CinnamonCors(framework));
            framework.use(new ApolloProtocol(framework));
            framework.use(new WebSocketPlugin({
                framework: framework,
                handler: new WebSocketHandler(framework)
            }));
            framework.use(new ServeStatic(framework, {
                root: 'static/',
            }));
        }
    });
})();
