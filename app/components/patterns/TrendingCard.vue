<template>
    <div class="trendingCardContainer">
        <h1 class="heading1">Trending Categories</h1>

        <nuxt-link :to="`/browse/${category.slug}`" :key="category.id" v-for="category in categories">
            <div class="imgContainer">
                <img :src="getCategoryImageUrl(category.image)" :alt="category.name" role="presentation" class="ProductImage">
                <h2 class="productTitle">{{ category.name }}</h2>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            numbers: [1, 2, 3]
        }
    },

    props: {
        categories: {
            type: Array,
            required: true
        }
    },

    methods: {
        getCategoryImageUrl(path) {
            return `${this.$axios.defaults.baseURL}${path}`;
        }
    }
}
</script>

<style lang="scss" scoped>
.trendingCardContainer {
    padding: 20px 15% 20px;
    text-align: center;

    .imgContainer {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        width: 230px;
        height: 230px;
        margin: 30px;
        border-radius: 5px;
        box-shadow: 0 0 55px 10px rgba(0, 0, 0, 0.05);

        .ProductImage {
            height: 150px;
            width: 150px;
        }
    }
}

h1 {
    font-weight: 700;
    line-height: 1;
    font-size: 50px;
    padding: 50px 0 20px;
    margin-bottom: 15px;
    text-align: center;
}

.productTitle {
    font-weight: bold;
    text-align: center;
    font-size: 25px;
}
</style>
