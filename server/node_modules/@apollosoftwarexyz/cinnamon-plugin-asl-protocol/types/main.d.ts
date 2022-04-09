import Cinnamon, { CinnamonPlugin, CinnamonWebServerModulePlugin } from '@apollosoftwarexyz/cinnamon';
export declare class ApolloProtocol extends CinnamonPlugin implements CinnamonWebServerModulePlugin {
    constructor(framework: Cinnamon);
    onInitialize(): Promise<boolean>;
    beforeRegisterControllers(): Promise<void>;
}
