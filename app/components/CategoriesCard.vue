<template>
    <div>
        <div class="left">
            <p>Categories</p>
            <p>Shirts</p>
        </div>
        <div class="right">
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.left {
    display: inline-block;
    flex-grow: 1;
}

.right {
    position: relative;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}
</style>