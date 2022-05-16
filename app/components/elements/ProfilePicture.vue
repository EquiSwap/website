<template>
    <div class="profilePicture" :class="{ large, small }">
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
        },
        small: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        src () {
            if (this.currentUser && user.cache.profilePicture) {
                return `${this.$axios.defaults.baseURL}${user.cache.profilePicture}`;
            } else if (this.target) {
                return `${this.$axios.defaults.baseURL}${this.target}`;
            }
            else return undefined;
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

    &.small {
        height: 32px;
        width: 32px;
    }
}
</style>
