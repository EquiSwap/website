<template>
    <div class="chat-input-bar">
        <form @submit.prevent="submit">
            <input ref="inputBox" v-model="message" type="text" placeholder="Enter a message..." class="message-input">
            <button @click.prevent="submit" class="message-button" type="submit">
                <Icon of="send" />
            </button>
        </form>
    </div>
</template>

<script>
export default {

    data: () => ({
        message: undefined
    }),

    methods: {
        submit () {
            this.$emit('message', this.message);
            this.message = undefined;
        }
    },

    mounted() {
        this.$refs.inputBox.addEventListener('keydown', (event) => {
            this.$emit('typing');
        });
    }

}
</script>

<style lang="scss">
.chat-input-bar {
    width: calc(100% - 40px);
    margin: 20px;
    position: relative;

    .message-input {
        width: 100%;
        font-weight: normal;
        background-color: #EAEAEA;
        padding: 8px 40px 8px 15px;
        border-radius: 999px;
        font-size: 10pt;
    }

    .message-button {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 4px;
        margin: auto 0;
        background: var(--color);
        height: 28px;
        width: 28px;
        border-radius: 100%;
        color: white;
        transform: rotate(45deg);

        svg {
            height: 16px;
            width: 16px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
</style>
