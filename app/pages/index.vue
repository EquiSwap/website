<template>
    <div>
        <div>
            <HeroSection />
            <TrendingCard v-if="trendingCategories" :categories="trendingCategories" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndexPage',

    data: () => ({
        trendingCategories: undefined
    }),

    async beforeCreate() {
        this.trendingCategories = (await this.$axios.$get('/v1/product/categories/trending')).payload;
    }
};
</script>



