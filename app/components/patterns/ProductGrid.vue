<template>
    <div>
        <div class="product-grid" v-if="products.length > 0">
            <nuxt-link :to="`/product/${product.id}`"
                       :key="product.id"
                       v-for="product in products">
                <ProductCard
                    class="product-grid-card"
                    :product="product"
                    :distance="distances[product.id]" />
            </nuxt-link>
        </div>
        <p v-else>There are no products in this category.</p>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            required: true
        },
        distances: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style lang="scss" scoped>
.product-grid {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    align-items: start;
    padding: 40px;
    grid-gap: 50px;
    width: 100%;

    .product-grid-card {
        transition: transform .2s ease-out;

        &:hover {
            transform: scale(1.1);
        }
    }
}
</style>
