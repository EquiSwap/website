<template>
    <div class="mainContainer">
        <div class="imgContainer">
            <img src="~assets/images/books.jpg" alt="" class="ProductImage">
        </div>
        <div>
            <h2 class="productTitle">
                books
            </h2>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

$background:#E5E5E5;
.mainContainer{
    width: 200px;
    border: 2px solid $background;
    margin: 20px;

    &:hover{
        transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    }
}

.productTitle{
    font-family: Arial, Helvetica, sans-serif;
    font-weight:bold;
    text-align: center;
    font-size:25px
    }
</style>