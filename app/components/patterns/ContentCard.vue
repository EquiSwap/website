<template>
    <div class="content-card">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>

.content-card {
    display: inline-flex;
    flex-direction: column;
    padding: 30px;

    background: #ffffff;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;

    .center {
        flex-grow: 1;
        align-self: center;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>
