<template>
    <div class="chat-messages-wrapper">
        <ChatBubble v-for="i in 20" message="Howdy" :author="{}" />
        <ChatBubble message="Hello, world!" :author="author" />
        <div class="status">
            <Icon of="chat" />
            <p>This is the start of your message history.</p>
        </div>
    </div>
</template>

<script>
import {user} from "@/utils/store-accessor";

export default {
    computed: {
        author () {
            return user.cache;
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
}
</style>
