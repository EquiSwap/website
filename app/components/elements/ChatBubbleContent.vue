<template>
    <p class="chat-bubble" :class="{ self: isCurrentUser }" v-if="type === 'chat'">{{ message.trim() }}</p>
    <nuxt-link class="chat-bubble" :class="{ self: isCurrentUser }" :to="content ? `/product/${content.product.id}` : '/chat'" v-else-if="type === 'product'">
        <Loader v-if="!content" :white="isCurrentUser" />
        <div class="chat-bubble-product" v-else>
            <ProductPicture large :target="content.product.image" />
            <h2>{{ content.product.title }}</h2>
            <p>{{ content.product.description }}</p>
            <p><small>Posted by {{ content.product.owner.smartName }} on {{ content.product.createdAt | date }} &#x2022; {{ content.distance | shortDecimal }} {{ 'mile' | pluralize(content.distance) }} away</small></p>
        </div>
    </nuxt-link>
</template>

<style lang="scss" scoped>
.chat-bubble {
    display: block;
    max-width: 40%;
    padding: 10px 15px;
    border-radius: 9px;
    background-color: #F4F4F4;

    &.self {
        background-color: var(--color);
        color: white;
    }

    .chat-bubble-product {
        h2 {
            font-weight: bold;
            font-size: 16pt;
        }
    }
}
</style>

<script>
import {user} from "@/utils/store-accessor";

export default {

    props: {
        type: {
            type: String,
            default: 'chat'
        },
        message: {
            type: String,
            required: true
        },
        isCurrentUser: {
            type: Boolean,
            required: true
        }
    },

    data: () => ({
        content: undefined,
    }),

    async mounted() {
        if (this.type === 'product') {
            this.content = (await this.$axios.$get(`/v1/product/${this.message}`, user.requestConfig)).payload;
        }
    }

}
</script>
