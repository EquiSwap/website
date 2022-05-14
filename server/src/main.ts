import Cinnamon from '@apollosoftwarexyz/cinnamon';
import {ApolloProtocol} from "@apollosoftwarexyz/cinnamon-plugin-asl-protocol";

(async () => {
    await Cinnamon.initialize({
        async load(framework) {
            framework.use(new ApolloProtocol(framework));
        }
    });
})();
