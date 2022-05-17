<template>
    <div>
        <!-- stuff for every page such as nav bars -->
        <Navbar />

        <!-- page content -->
        <Nuxt />
    </div>
</template>

<script>
import { user } from "~/utils/store-accessor";
import {addSocketListener, hasSocketListener, removeSocketListener} from "@/realtime/chat";
import ChatNotification from "@/components/patterns/ChatNotification";

export default {

    data: () => ({
        isAuthenticated: false,

        socketListener: undefined,
    }),

    async beforeCreate() {
        let wasLoggedIn = user.isAuthenticated;

        await user.startSession();
        this.isAuthenticated = user.isAuthenticated;
        if (wasLoggedIn && !this.isAuthenticated) {
            this.$toast.error('You have been logged out.');
        }

        addSocketListener(this.socketListener = (payload) => {
            // If another listener is not taking care of socket messages (i.e., chat page is not
            // open), handle it here to display a notification.
            if (!hasSocketListener()) {
                try {

                    console.log(payload);
                    const data = JSON.parse(payload.data);

                    if (data.command === 'message') {
                        // somehow?
                        if (data.payload.author === user.cache.id) return;

                        this.$toast({
                            component: ChatNotification,
                            props: {
                                author: data.notification.author,
                                message: data.payload.message
                            }
                        }, {
                            toastClassName: ['chat-message-toast', 'equiSwap-toast'],
                            icon: false,
                            onClick: () => {
                                this.$router.push('/chat');
                            }
                        });
                    }

                } catch (ex) {
                    console.error(ex);
                }
            }
        }, true);
    },

    beforeDestroy() {
        if (this.socketListener) removeSocketListener(this.socketListener, true);
    }

}
</script>
