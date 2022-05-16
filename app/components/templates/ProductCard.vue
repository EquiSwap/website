<template>
    <div class="product-card">
        <ProductPicture class="image" :target="product.image" />
        <h2 class="product-name">{{ product.title }}</h2>
        <p v-if="distance !== undefined"><b>{{ distance | shortDecimal }} {{ 'mile' | pluralize(distance) }} away</b></p>
        <p><small>Posted by {{ product.owner.smartName }}</small></p>
        <p><small>{{ product.createdAt | date }}</small></p>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        },
        distance: {
            type: Number,
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>
.product-card {
    display: flex;
    flex-direction: column;
    margin: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 150px;

    .image {
        height: 125px;
        width: 125px;
        margin: 20px;
    }
}

h2 {
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
}
</style>
