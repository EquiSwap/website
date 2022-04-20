<template>
    <div class="mainContainer">
        <h1 class="heading1">Trending Categories</h1>
        <div v-for="n in numbers" class="imgContainer">
            <img src="~assets/images/books.jpg" alt="" class="ProductImage">
            <h2 class="productTitle"> Books  </h2>
        </div>
    </div>
</template>

<script>
    export default {
data() {
  return {
    numbers: [1, 2, 3]
  }
}
        
    }
</script>

<style lang="scss" scoped>

$background:#E5E5E5;


.mainContainer{
    width:auto;
    position: static;
    padding:10px;
    padding-left:15%;
    padding-right:15%;
    border: 2px solid $background;
    text-align: center;


    &:hover{
        transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    }
}
    h1{
        font-family: Rockwell, "Courier Bold", Courier, Georgia, Times, "Times New Roman", serif; 
        font-weight: bold;
        line-height: 1;
        font-size: 50px;
        margin-bottom:15px;
        text-align: center;
    }

    .mainContainer .imgContainer{
        display: inline-block;
        background-color: white;
        width: 230px;
        height: 230px;
        margin: 30px;
        border-radius: 5px;
    }

    .mainContainer .imgContainer .ProductImage{
        height: 200px;
        width: 200px;
        padding:10px;
    }

        .productTitle{
            font-family: sans-serif, Arial;
            font-weight:bold;
            text-align: center;
            font-size:25px
            }
</style>