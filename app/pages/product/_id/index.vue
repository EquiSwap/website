<template>
    <div>
        <FullPageCard :loading="!product">
            <div class="product-wrapper" v-if="product">
                <ProductInfoBox :product="product" :distance="distance">
                    <div class="inline">
                        <nuxt-link :to="`/offer/${product.id}`"><Button>Make an Offer</Button></nuxt-link>
                        <p>&mdash; OR &mdash;</p>
                        <nuxt-link to="/chat"><Button>Start a Chat</Button></nuxt-link>
                    </div>
                </ProductInfoBox>
                <ProductPicture large class="image" :target="product.image" />
                <ProductSideBar :user="product.owner" />
            </div>
        </FullPageCard>
    </div>
</template>

<script>
import {user} from "@/utils/store-accessor";

export default {

    data: () => ({
        product: undefined,
        distance: undefined
    }),

    async mounted () {
        try {
            const { product, distance } = (await this.$axios.$get(`/v1/product/${this.$route.params.id}`, user.requestConfig)).payload;
            this.product = product;
            this.distance = distance;
        } catch(ex) {
            await this.$router.replace('/');
            this.$toast.error('That product could not be found!');
        }
    }

}
</script>

<style lang="scss" scoped>
.image {
    height: 196px;
    width: 196px;
}

.inline {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    p {
        font-size: 16pt;
    }
}

.product-wrapper {
    display: grid;
    grid-template: auto / 2.5fr auto auto;
    column-gap: 25px;
    padding: 40px;
}
</style>
