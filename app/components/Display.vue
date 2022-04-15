<template>
    <div class="mainContainer">
        <div class="right"> 
            <p class="heading1">
                Trading with an emphasis on 
                <h1 class="subheading1">Environment Change</h1> 
            </p>
            
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;

}
section{
    min-height:100vh;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
}


.mainContainer{
    width: 100%;
    max-width:1053px;
    height: 450px;
    background:url(~/assets/images/backgrounds/login.png) no-repeat center / cover;
    background-position-y: 35%;
    position:relative;
    left:15%;
    margin: 0 auto;
    display: flex;
    align-items: left;
    justify-content:left;
   
}

.mainContainer .right{
    position:relative;
    left:-45%;
    width:70%;
    min-height:500px;
    background-color: #fffbfb;
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    color:black;
    margin-right: 100px;
    clip-path: polygon(0% 0%, 100% 0, 100% 0, 66% 100%, 0% 100%);

}

.right .heading1 {
    display: block;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 94px;
    color: #525252;
    overflow: clip;

 }
.subheading1 {
    display:inline-block;
    font-family: 'DM Sans';
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