<template>
    <div class="card">
        <slot />
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-grow: 1;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.121);
    border-top: none;
    border-bottom: none;
    justify-content: center;
    align-items: center;
}
</style>
