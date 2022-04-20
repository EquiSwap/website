<template>
    <div class="mainContainer">
        <img src="~assets/images/books.jpg" alt="" class="image">
        <p class="ProductName">Product 1</p>
        <p class="ProductPrice">$12</p>
    </div>
</template>

<script>
    export default {
        
        
    }
</script>

<style lang="scss" scoped>
$background:#E5E5E5;
$darkGreen: #8bc254;
.mainContainer{

    width: 200px;
    position: relative;
    background: white;
    border: 2px solid $darkGreen;
    margin: 20px;

    &:hover{
        transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    }
}

.left {
    display: inline-block;
    flex-grow: 1;
}

.productName{
    font-family: Arial, Helvetica, sans-serif;
    font-weight:bold;
    text-align: center;
    font-size:25px
    }
</style>