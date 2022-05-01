<template>
    <div class="mainContainer">
        <div class="imageBox">  </div>
        <h1> user </h1>
        <p>hello</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.mainContainer{
    position: relative;
    width: 350px;
    height: 87px;
    background-color: rgb(232, 207, 207);
    display:inline-block;
    border-radius: 0px 8px;
    margin: 10px 5px 10px 5px;
    text-align: left;

}
.mainContainer .imageBox {
    height:75px;
    width: 75px; 
    background: rgb(19, 7, 7);
    margin: 5px;
    display: inline-block;
    border-radius: 50%;
    background-image: url("~assets/user/user.png")
}

h1 {
    position: absolute;
    top: 0px;
    display: inline-block;
    font-size: 30px;  
    margin-left: 10px;
}
p {
    display: inline-block;
    margin-left:10px;
    position: absolute;
    margin-top: 40px;

}



</style>