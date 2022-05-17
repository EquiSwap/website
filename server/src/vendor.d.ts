import WebSocket from 'ws';

import { User } from './models/User';
import { Session } from './models/Session';

declare module '@apollosoftwarexyz/cinnamon' {
    interface Context {
        session?: Session;
        user?: User;
    }
}

interface EquiSocket extends WebSocket {
    user?: User;
    typing?: {
        until: number;
        to: string;
    }
}
