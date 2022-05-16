<template>
    <div class="box">
        <h1>{{ product.title }}</h1>
        <h2 class="meta">
            Posted by {{ product.owner.smartName }}<template v-if="distance !== undefined">,
            {{ distance | shortDecimal }} {{ 'mile' | pluralize(distance) }} away
            </template>
            <br>
            <small>Posted on {{ product.createdAt | date }} at {{ product.createdAt | time }}</small>
        </h2>
        <p>
            {{ product.description }}
        </p>
        <br>
        <slot></slot>
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
h1 {
    font-size: 48px;
    font-weight: bold;
}

h2 {
    font-size: 20px;
    font-weight: bold;

    &.meta {
        padding: 20px 0;
    }
}

p {
    font-size: 15px;
    text-align: left;
}

.box {
    background-color: white;
    // padding: 150px;
}

// .contents {
//     padding: 150px;
// }

</style>
