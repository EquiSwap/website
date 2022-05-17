<template>
    <div class="chat-sidebar-user" :class="{ active }">
        <ProfilePicture class="user-image" :target="user.profilePicture" />
        <div class="user">
            <h2>{{ user.smartName }}</h2>
            <p v-if="summary">{{ summary }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.chat-sidebar-user {
    display: flex;
    align-items: center;

    border-radius: 18px;
    padding: 10px 25px;

    user-select: none !important;
    -webkit-user-select: none !important;
    cursor: pointer !important;

    transition: background-color .1s ease-out, color .1s ease-out;

    &.active {
        background-color: var(--color);
        color: white;
    }

    .user-image {
        width: 48px;
        height: 48px;
        flex-shrink: 0;
    }

    .user {
        overflow: hidden;
        margin-left: 20px;

        h2 { font-weight: bold; }
        p { font-size: 10pt; }

        h2, p {
            margin: 0;
            line-height: 1;
            white-space: nowrap;
            overflow: hidden;
            width: 100%;
            text-overflow: ellipsis;
        }
    }
}
</style>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        },
        summary: {
            type: String,
        },
        active: {
            type: Boolean,
            default: false
        }
    }
}
</script>
