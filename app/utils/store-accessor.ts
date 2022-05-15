import { Store } from 'vuex';
import { getModule } from "vuex-module-decorators";

import UserStore from "~/store/user";
let user: UserStore;

function initializeStores(store: Store<any>): void {
    user = getModule(UserStore, store);
}

export { initializeStores, user };
