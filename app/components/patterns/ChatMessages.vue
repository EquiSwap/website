<template>
    <div class="chat-messages-wrapper">
        <ChatBubble
            :key="message.id"
            v-for="message in messages"
            :type="message.type"
            :message="message.message"
            :author="getAuthor(message.author)" />
        <div class="status">
            <Icon of="chat" />
            <p>This is the start of your message history.</p>
        </div>
    </div>
</template>

<script>
import {user} from "@/utils/store-accessor";

export default {
    props: {
        messages: {
            type: Array,
            required: true
        },
        authors: {
            type: Array,
            required: true
        }
    },

    computed: {
        sortedMessages () {
            return this.messages.sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt)
            });
        }
    },

    methods: {
        getAuthor (id) {
            if (user.cache.id === id) return user.cache;
            return this.authors.find(author => author.id === id);
        }
    }
}
</script>

<style lang="scss">
.chat-messages-wrapper {
    display: flex;
    flex-direction: column-reverse;
    gap: 15px;
    padding: 10px 15px;
    overflow-y: auto;
    height: 100%;

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    & > .chat-bubble-wrapper:first-of-type {
        padding-bottom: 20px;
    }
}

.status {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0 20px;
    text-align: center;
    color: #b9b9b9;

    user-select: none !important;
    -webkit-user-select: none !important;
    cursor: default !important;
}
</style>
