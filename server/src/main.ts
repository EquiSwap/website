import Cinnamon, { ServeStatic } from '@apollosoftwarexyz/cinnamon';
import { ApolloProtocol } from '@apollosoftwarexyz/cinnamon-plugin-asl-protocol';
import { CinnamonCors } from '@apollosoftwarexyz/cinnamon-plugin-cors';

(async () => {
    await Cinnamon.initialize({
        async load(framework) {
            framework.use(new CinnamonCors(framework));
            framework.use(new ApolloProtocol(framework));

            framework.use(new ServeStatic(framework, {
                root: 'static/',
            }));
        }
    });
})();
