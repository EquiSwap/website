<template>
    <div class="container-box">
        <h2>Categories</h2>
        <br>
        <p :key="category.id" v-for="category in categories">
            <nuxt-link :to="`/browse/${category.slug}`">
                <b v-if="activeCategory === category.slug">{{ getCategoryName(category) }}</b>
                <template v-else>{{ getCategoryName(category) }}</template>
            </nuxt-link>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        categories: {
            type: Array,
            required: true
        },
        activeCategory: {
            type: String,
            required: true
        }
    },

    methods: {
        getCategoryName(category) {
            return `${category.name} (${category.products.length})`;
        }
    }
}
</script>

<style lang="scss" scoped>
h2 {
    font-size: 20px;
    font-weight: bold;
}

p {
    font-size: 15px;
}

.container-box {
    padding: 30px 50px;
    text-align: left;
}
</style>
