<template>
    <div>
        <FullPageCard :loading="!categories">
            <div class="categories-card">
                <CategorySideBar :activeCategory="activeCategory" :categories="categories" />
                <template v-if="activeCategory">
                    <ProductGrid class="product-grid" :products="products" />
                </template>
                <template v-else>
                    <div class="mt-20">
                        <p>Please choose a category on the left to view.</p>
                    </div>
                </template>
            </div>
        </FullPageCard>
    </div>
</template>

<script>
export default {

    data: () => ({
        activeCategory: undefined,
        categories: undefined
    }),

    async mounted() {
        this.categories = (await this.$axios.$get('/v1/product/categories')).payload;
        this.activeCategory = this.$route.params.category;
    },

    computed: {
        products () {
            if (!this.activeCategory) return undefined;
            return this.categories.find(category => category.slug === this.activeCategory)?.products ?? [];
        }
    }

}
</script>

<style lang="scss" scoped>
.categories-card {
    display: flex;
    flex-direction: row;
    gap: 40px;
}

.product-grid {
    flex-grow: 1;
}
</style>
