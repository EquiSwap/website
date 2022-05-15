import {User} from './models/User';
import {Session} from './models/Session';

declare module '@apollosoftwarexyz/cinnamon' {
    interface Context {
        session?: Session;
        user?: User;
    }
}
