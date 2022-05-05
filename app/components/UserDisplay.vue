<template>
    <div class="mainContainer">
        <div class="imageBox">  </div>
        <h1> User </h1>
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
    width: 100%;
    height: 85px;
    background-color: transparent;
    // display:inline-block;
    margin: 1px 0px 1px 0px;
    text-align: left;

}
.mainContainer .imageBox {
    height:70px;
    width: 70px; 
    background-color: rgb(19, 7, 7);
    margin: 8px 0px 0px 5px;
    display: inline-block;
    border-radius: 50%;
}

h1 {
    position: absolute;
    top: 10px;
    display: inline-block;
    font-size: 20px;  
    margin-left: 10px;
}
p {
    display: inline-block;
    margin-left:11px;
    position: absolute;
    margin-top: 37px;

}



</style>