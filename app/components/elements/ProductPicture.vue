<template>
    <div class="productPicture" :class="{ large }">
        <img draggable="false" v-if="src" :src="src" alt="Product Image" />
        <Icon draggable="false" v-else of="missing" />
    </div>
</template>

<script>
export default {
    props: {
        target: {
            type: String,
            required: false
        },
        large: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        src () {
            if (this.target && this.target.startsWith('/')) {
                return `${this.$axios.defaults.baseURL}${this.target}`;
            } else if (this.target) {
                return this.target;
            } else return undefined;
        }
    }
}
</script>

<style lang="scss" scoped>
.productPicture {
    position: relative;
    height: 64px;
    width: 64px;
    background-color: rgb(200, 200, 200);
    border-radius: 20px;
    clip-path: content-box;
    object-fit: contain;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    svg {
        height: 50%;
        width: 50%;
    }

    img {
        height: 100%;
        width: 100%;
        border-radius: 20px;
    }

    &.large {
        height: 196px;
        width: 196px;
    }
}
</style>
