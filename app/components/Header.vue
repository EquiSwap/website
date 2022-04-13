<template>
<div class = "header">
<img src="~/assets/images/equiswap_logo.png">
<a class="text" href="#">Categories</a>
<a class="text" href="#">Leaderboard</a>
<div class = "spacer"/>
<div class = "searchbar"><SearchField /></div>
<a class="text" href="#">Login</a>
<a class="text" href="#">Register</a>
<div class = "button"><Button /></div>
</div>
</template>

<script lang="ts">
export default({
  name: 'Header'
})
</script>

<style>
img{
    max-height: 7%;
    max-width: 10%;
    padding-left: 20px;
}

.header{
display:flex;
flex-direction:row;
background: #ffffff;
text-align: center;
}

.spacer{
flex-grow: 1;
}

.text{
font-style:normal;
font-weight: 500;
font-size: 21px;
line-height: 20px;
display: flex;
align-items: center;
color: #6D6D6D;
padding: 20px;
}

.searchbar{
align-self: center;
}

.button{
align-self: center;
}

</style>