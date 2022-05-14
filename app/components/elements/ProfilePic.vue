<template>
    <div class="circular--landscape">
        <!-- <img src="~assets/images/pfp.jpg" alt="Profile Icon"> -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
// .circle {
//   display: inline-block;
//   position: relative;
//   width: 200px;
//   height: 200px;
//   overflow: hidden;
//   border-radius: 50%;
//   img {
//     object-fit: cover;
//   }
.circular--square {
  border-radius: 50%;
}

.circular--landscape {
  // width: 200px;
  // height: 200px;
  // border-radius: 50%;
  // overflow: hidden;
  // background-color: rgb(255, 255, 255);
  
  // /*for demo*/
  // display:inline-block;
  // vertical-align:middle;

    height: 70px;
    width: 70px; 
    background-color: rgb(19, 7, 7);
    margin: 8px 0px 0px 5px;
    display: inline-block;
    border-radius: 50%;
}

.circular--landscape img {
  width: auto;
  height: 100%;
//   margin-left: -50px;
}

.circular--portrait {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
}

.circular--portrait img {
  width: 100%;
  height: auto;
}


</style>