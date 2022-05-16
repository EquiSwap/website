<template>
    <div>
        <FullPageCard :loading="!categories">
            <div class="categories-card">
                <CategorySideBar :activeCategory="activeCategory" :categories="categories" />
                <template v-if="activeCategory">
                    <ProductGrid class="product-grid" :products="products" :distances="distances" />
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
import {user} from "@/utils/store-accessor";

export default {

    data: () => ({
        activeCategory: undefined,
        categories: undefined,
        distances: undefined,
    }),

    async mounted() {
        const { categories, distances } = (await this.$axios.$get('/v1/product/categories', user.requestConfig)).payload;
        this.categories = categories;
        this.distances = distances;
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
