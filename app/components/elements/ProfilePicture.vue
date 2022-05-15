<template>
    <div class="profilePicture" :class="{ large }">
        <img draggable="false" v-if="src" :src="src" alt="Profile Image" />
        <Icon draggable="false" v-else of="user" />
    </div>
</template>

<script>
import { user } from "~/utils/store-accessor";

export default {
    props: {
        currentUser: {
            type: Boolean,
            default: false
        },
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
            if (this.currentUser) {
                return `${this.$axios.defaults.baseURL}${user.cache.profilePicture}`;
            } else return `${this.$axios.defaults.baseURL}${this.target}`;
        }
    }
}
</script>

<style lang="scss" scoped>
.profilePicture {
    position: relative;
    height: 64px;
    width: 64px;
    background-color: rgb(200, 200, 200);
    border-radius: 100%;
    clip-path: content-box;

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
        border-radius: 100%;
    }

    &.large {
        height: 196px;
        width: 196px;
    }
}
</style>
