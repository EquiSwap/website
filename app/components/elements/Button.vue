<template>
    <button class="button" :class="{ block, loading }" role="button">
        <Loader slim white v-if="loading" />
        <slot v-else />
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        block: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.button {
    box-sizing: border-box;
    appearance: none;
    background-color: var(--color);
    border-radius: 9px;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1rem;
    line-height: 1;
    margin: 20px;
    padding: 15px 30px;
    color: #fff;
    text-decoration: none;
    text-align: center;
    font-weight: 700;

    &.block {
        display: block;
        width: calc(100% - 60px);
        font-weight: 500;
    }

    &:hover,
    &:focus {
        outline: 0;
    }

    transition: background-color 300ms ease-in-out;

    &:hover {
        background-color: var(--color-dark);
    }
}
</style>
