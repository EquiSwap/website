<template>
    <div class="chat-notification-wrapper">
        <Icon of="chat" />
        <div class="chat-notification">
            <h2>{{ author }}</h2>
            <p>{{ message }}</p>
            <p class="gap-top"><small>Click to view.</small></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.chat-notification-wrapper {
    color: #484848;
    display: flex;
    align-items: center;
    gap: 20px;

    h2 {
        font-weight: bold;
        line-height: 1;
        margin: 0;
        padding: 0;
    }

    p {
        line-height: 1;
    }

    .gap-top {
        margin-top: 4px;
    }
}
</style>

<script>
export default {
    props: {
        author: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    }
}
</script>
