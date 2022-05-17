import {Module, Mutation, MutationAction, VuexModule} from "vuex-module-decorators";
import { User, GuestUser, IUser } from "~/types/User";
import { $axios } from "~/utils/axios";
import {closeSocket, setSocket} from "~/realtime/chat";

@Module({
    name: 'user',
    stateFactory: true,
    namespaced: true
})
export default class UserStore extends VuexModule {
    sessionToken: string | undefined = undefined;
    cache: IUser = GuestUser;

    get requestConfig() {
        if (!this.isAuthenticated) {
            return {};
        }

        return {
            headers: {
                Authorization: `Bearer ${this.sessionToken}`
            }
        }
    }

    get isAuthenticated() {
        return this.cache.id !== GuestUser.id;
    }

    @Mutation
    replaceUserCache(user: IUser) {
        this.cache = user;
    }

    @MutationAction
    async startSession(token?: string) {
        if (this.sessionToken && !token) token = this.sessionToken;
        let user: User | undefined;
        let socket: WebSocket | undefined = undefined;

        if (token) {
            try {
                const sessionData: any = (await $axios.$get(
                    "/v1/session", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })).payload;

                user = new User(sessionData.user);
                socket = new WebSocket($axios.defaults.baseURL!.replace(/^http/, 'ws'));
                socket!.addEventListener('open', () => {
                    socket?.send(JSON.stringify({ command: 'auth', token }))
                });
            } catch (ex: any) {
                token = undefined;
                socket = undefined;
            }
        }

        setSocket(socket);

        return {
            sessionToken: token,
            cache: token ? user : GuestUser,
        }
    }

    @MutationAction
    async login(form: {username: string, password: string}) {
        let sessionToken: string | undefined = undefined;
        let cache = GuestUser;
        let socket: WebSocket | undefined = undefined;

        try {
            const loginResponse: any = (await $axios.$post('/v1/session/login', form)).payload;

            sessionToken = loginResponse.authToken;
            cache = new User(loginResponse.user);

            socket = new WebSocket($axios.defaults.baseURL!.replace(/^http/, 'ws'));
            socket!.addEventListener('open', () => {
                socket?.send(JSON.stringify({ command: 'auth', token: sessionToken }))
            });

            setSocket(socket);
        } catch(ex: any) {
            const errorData = ex.response?.data;
            throw new Error(errorData?.message ?? "There was a problem logging you in.");
        }

        return { sessionToken, cache };
    }

    @MutationAction
    async register(form: {username: string, email: string, password: string}) {
        let sessionToken = undefined;
        let cache = GuestUser;

        try {
            const registerResponse: any = (await $axios.$post('/v1/session/register', form)).payload;

            sessionToken = registerResponse.authToken;
            cache = new User(registerResponse.user);
        } catch(ex: any) {
            const errorData = ex.response?.data;
            throw new Error(errorData?.message ?? "There was a problem registering your account.");
        }

        return { sessionToken, cache };
    }

    @MutationAction
    async logout(options?: { force: boolean }) {
        closeSocket();

        if (!options?.force) {
            try {
                await $axios.$delete('/v1/session/logout', {
                    headers: {
                        Authorization: `Bearer ${this.sessionToken}`
                    }
                });
            } catch (ex: any) {
                alert("There was a problem logging you out.");
            }
        }

        return {
            sessionToken: undefined,
            cache: GuestUser,
        } as {
            sessionToken: string | undefined,
            cache: IUser,
        };
    }
}
