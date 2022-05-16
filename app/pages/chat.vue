<template>
    <div>
        <FullPageCard>
            <div class="chat-card">
                <ChatSideBar />
                <div class="chat-content-wrapper">
                    <div class="chat-content">
                        <ChatMessages />
                    </div>
                    <ChatInputBar />
                </div>
            </div>
        </FullPageCard>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.chat-card {
    max-height: 75vh;
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
</style>
