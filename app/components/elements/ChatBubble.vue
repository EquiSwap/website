<template>
    <div class="chat-bubble-wrapper" :class="{ self: isCurrentUser }">
        <template v-if="isCurrentUser">
            <p class="chat-bubble">{{ message.trim() }}</p>
            <ProfilePicture small />
        </template>
        <template v-else>
            <ProfilePicture small />
            <p class="chat-bubble">{{ message.trim() }}</p>
        </template>
    </div>
</template>

<script>
import { user } from "@/utils/store-accessor";

export default {
    props: {
        message: {
            type: String,
            required: true
        },
        author: {
            type: Object,
            required: true
        }
    },

    computed: {
        isCurrentUser () {
            return user.cache.id === this.author.id;
        }
    }
}
</script>

<style lang="scss">
.chat-bubble-wrapper {
    display: flex;
    gap: 5px;

    justify-content: flex-start;
    align-items: flex-end;

    &.self {
        justify-content: flex-end;
    }

    .chat-bubble {
        display: block;
        max-width: 40%;
        padding: 10px 15px;
        border-radius: 9px;
        background-color: #F4F4F4;
    }

    &.self .chat-bubble {
        background-color: var(--color);
        color: white;
    }
}
</style>
