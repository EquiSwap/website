<template>
    <div class="chat-bubble-wrapper" :class="{ self: isCurrentUser }">
        <template v-if="isCurrentUser">
            <ChatBubbleContent :message="message" :type="type" :isCurrentUser="isCurrentUser" />
            <ProfilePicture small :target="author.profilePicture" />
        </template>
        <template v-else>
            <ProfilePicture small :target="author.profilePicture" />
            <ChatBubbleContent :message="message" :type="type" :isCurrentUser="isCurrentUser" />
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
        type: {
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
}
</style>
