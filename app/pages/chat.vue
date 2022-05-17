<template>
    <div>
        <FullPageCard :loading="!conversations">
            <div class="chat-card">
                <ChatSideBar @startConversation="addConversation" @selectConversation="selectConversation" :activeConversation="activeConversation" :conversations="conversations" :authors="authors" />
                <div class="chat-content-wrapper">
                    <div class="chat-content">
                        <ChatMessages v-if="activeConversation" :messages="messages" :authors="authors" />
                        <div class="prompt" v-else>
                            <Icon of="chat" />
                            <p>No conversation selected...</p>
                        </div>
                    </div>
                    <ChatInputBar v-if="activeConversation" @message="sendMessage" />
                </div>
            </div>
        </FullPageCard>
    </div>
</template>

<script>
import { user } from "@/utils/store-accessor";
import {addSocketListener, removeSocketListener, sendChatMessage} from "@/realtime/chat";

export default {

    data: () => ({
        listener: undefined,

        activeConversation: undefined,

        conversations: undefined,
        authors: undefined
    }),

    async mounted() {
        const chatResponse = (await this.$axios.$get('/v1/chat', user.requestConfig)).payload;
        this.conversations = chatResponse.conversations;
        this.authors = chatResponse.authors;

        if (this.authors.length > 0)
            this.activeConversation = this.authors[0].id;

        addSocketListener(this.listener = (payload) => {
            try {
                const data = JSON.parse(payload.data);

                if (data.command === 'message') {
                    const otherEntity = data.payload.author !== user.cache.id
                        ? data.payload.author
                        : data.payload.target;

                    this.conversations[otherEntity].messages.unshift(data.payload);
                }
            } catch(ex) {
                console.error(ex);
            }
        });
    },

    beforeDestroy() {
        if (this.listener) removeSocketListener(this.listener);
    },

    computed: {
        messages () {
            if (!this.activeConversation) return [];
            else return this.conversations[this.activeConversation].messages;
        }
    },

    methods: {
        addConversation (author) {
            if (this.authors.find($author => $author.id === author.id)) {
                this.activeConversation = author.id;
                return;
            }

            this.authors.push(author);
            this.conversations[author.id] = { messages: [] };
            this.activeConversation = author.id;
        },

        selectConversation(id) {
            this.activeConversation = id;
        },

        sendMessage (message) {
            if (this.activeConversation) {
                sendChatMessage(this.activeConversation, message);
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.chat-card {
    height: 75vh;
    display: flex;
    flex-direction: row;
    overflow: hidden;

    .chat-content-wrapper {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: hidden;

        .chat-content {
            flex-grow: 1;
            overflow: hidden;
        }
    }
}

.prompt {
    display: flex;
    flex-grow: 1;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    text-align: center;
    color: #b9b9b9;

    user-select: none !important;
    -webkit-user-select: none !important;
    cursor: default !important;
}
</style>
