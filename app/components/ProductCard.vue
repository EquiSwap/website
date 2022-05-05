<template>
    <div class="mainContainer">
        <a href="/product">
            <img src="~assets/images/t-shirt.jpg" class="image"> 
        </a>
        <h2 class="ProductName">Product 1</h2>
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
    display: inline-block;
    background-color:white;
    width: auto;
    padding: 10px;
    margin: 20px;
    text-align: center;
    &:hover{
        transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    }
}

    .mainContainer .image{
        width: 50%;
        height: 50%;
        padding: 10px;
    }

h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    // text-align: left;
    font-size: 20px
    }

p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
}
</style>