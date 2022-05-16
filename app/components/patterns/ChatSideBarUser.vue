<template>
    <div class="chat-sidebar-user" :class="{ active }">
        <ProfilePicture class="user-image" />
        <div class="user">
            <h2>User Name</h2>
            <p>Most recent message.</p>
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

    &.active {
        background-color: var(--color);
        color: white;
    }

    .user-image {
        width: 48px;
        height: 48px;
    }

    .user {
        margin-left: 20px;

        h2 { font-weight: bold; }
        p { font-size: 10pt; }

        h2, p { margin: 0; line-height: 1; }
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
        active: {
            type: Boolean,
            default: false
        }
    }
}
</script>
