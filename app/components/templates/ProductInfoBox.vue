<template>
    <div class="box">
        <h1>{{ product.title }}</h1>
        <h2 class="meta">
            {{ product.owner.displayName }}, Guildford<br>
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
