<template>
    <div class="mainContainer">
        <div class="contain">
            
        </div>
        <div class="center">
            <h1>Offer confirmed!</h1>
            <Button />
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.mainContainer {
    display: flex;
    margin: auto;
    width: 1300px;
    left: 50%;
    margin-top: 50px;

    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.contain {
    background:url(~/assets/images/backgrounds/leaves.jpg) no-repeat center;
    background-size:100%;
    position:relative;
    width:40%;
    min-height:500px;
    background-color: #9bda5d;
    display:flex;
    align-items: center;
    justify-content: center;
    color:black;
    clip-path: polygon(0% 0%, 100% 0, 100% 0, 66% 100%, 0% 100%);
}

h1 {
    font-family: Rockwell, "Courier Bold", Courier, Georgia, Times, "Times New Roman", serif; 
    width:75%;
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 94px;
    color: #525252;
    padding: 15%;
}

.center {
    align-items: center;
}
</style>