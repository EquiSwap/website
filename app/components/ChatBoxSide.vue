<template>
    <div class="container">
        <div class="firstContainer">
            <UserDisplay />
            <p> Location    London </p>
        </div>
        <div class="secondContainer">
            <ProductCard class = "product"/>
            <ProductCard class = "product"/>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.container {
    position:relative;
    width: auto;
    text-align: left;
}

.secondContainer .product {
    display: block;
    background-color: transparent;
    margin: 0px;

}

</style>