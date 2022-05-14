<template>
    <div>
        <Inbox class="inbox"/>
        <div class="side">
            <ChatBoxSide class ="background"/>
        </div>

    </div>
</template>

<script>
    export default {


    }
</script>

<style lang="scss" scoped>

.background {
    background: transparent;
}
.inbox {
    position: relative;
}

.side {
    position: absolute;
    display:inline-block;
    text-align: right;
}

</style>
