<template>
    <div class="chat-sidebar">
        <div class="center">
            <TextField icon="user" label="Search for a user..." />
            <Button style="margin: 0">New Conversation</Button>
            <p class="divider">&mdash;</p>
            <div class="users">
                <ChatSideBarUser active />
                <ChatSideBarUser />
                <ChatSideBarUser />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.chat-sidebar {
    width: 350px;
    background: #f8f8f8;
    border-bottom-left-radius: 18px;

    .center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
    }

    .divider {
        margin: 20px 0;
        font-weight: bold;
        text-align: center;
    }

    .users {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}
</style>
