<template>
    <div class="mainContainer">
        <div class="right"> 
            <p class="heading1">
                Trading with an emphasis on 
                <span class="subheading1">Environmental Change</span> 
            </p>
            
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>


.mainContainer{
    width: 100%;
    height: 450px;
    background:url(~/assets/images/backgrounds/login.png) no-repeat center;
    background-size:100%;
    background-position: bottom 75% right 700%;
    margin-bottom: 2%;

   
}

.mainContainer .right{
    position:relative;
    width:40%;
    min-height:500px;
    background-color: #fffbfb;
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    color:black;
    clip-path: polygon(0% 0%, 100% 0, 100% 0, 66% 100%, 0% 100%);

}

.right .heading1 {
    font-family: Rockwell, "Courier Bold", Courier, Georgia, Times, "Times New Roman", serif; 
    width:75%;
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 94px;
    color: #525252;

 }
.subheading1 {
    display:inline-block;
    width:75%;
    font-family: Rockwell, "Courier Bold", Courier, Georgia, Times, "Times New Roman", serif; 
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 94px;
    color: rgb(20, 169, 20);

}



// $loginBorderRadius: 25px;

// .mainContainer{
//   position: relative;
//     display: flex;

//     width: 1182px;
//     height: 450px;

//     // transform: translate(-50%, -50%);

//     background: #ffffff;
//     border-radius: $loginBorderRadius;
// }
//     .mainContainer .left {
//         display: inline-block;
//         flex-grow: 1;
//     }

//     .mainContainer .image{
//         width: 160px;
//         height:450px;
//         position: relative;
//         // left:0%;
//         object-fit: cover;
//         object-position:10% 20%;


    
// }
    
//         .mainContainer .textField {
//             background:#fff;
//             position: absolute;
//             width:600px;
//             border: 3px solid green;
//             padding: 50px;
//             margin: 0px;
            
//         }

</style>