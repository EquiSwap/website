import { Store } from 'vuex';
import { initializeStores } from '~/utils/store-accessor';
import createPersistedState from "vuex-persistedstate";

import * as Cookies from 'js-cookie';

export const initializer = (store: Store<any>) => initializeStores(store);

export const plugins = [initializer, createPersistedState({
    key: '__appState',
    storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => { Cookies.set(key, value, {
            expires: 3, // days
            secure: process.env.NODE_ENV !== 'development'
        }); },
        removeItem: key => Cookies.remove(key)
    }
})];
export * from '~/utils/store-accessor';
