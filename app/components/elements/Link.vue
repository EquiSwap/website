<template>
    <nuxt-link class="app-link" :to="to"><slot /></nuxt-link>
</template>

<script>
export default {
    name: 'Link',
    props: {
        to: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.app-link {
    color: var(--color);
    font-weight: bold;

    transition: color .3s ease-out;
    &:hover {
        color: var(--color-dark);
    }
}
</style>
