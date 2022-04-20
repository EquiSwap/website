<template>
<div class = "header">
<img src="~/assets/images/equiswap_logo.png">
<a class="text" href="/categories">Categories</a>
<a class="text" href="/leaderboard">Leaderboard</a>
<div class = "spacer"/>
<div class = "searchbar"><SearchField /></div>
<a class="text" href="/login">Login</a>
<a class="text" href="/signup">Register</a>
<div class = "button"><Button /></div>
</div>
</template>

<script lang="ts">
export default({
  name: 'Navbar'
})
</script>

<style>
img{
    background-size: 300px;
    background-repeat: no-repeat;
    display: inline-block;
    height: 70px;
    padding-left: 10px;
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
font-size: 18px;
line-height: 20px;
display: flex;
align-items: center;
color: #6D6D6D;
padding: 15px;
}

.searchbar{
align-self: center;

}

.button{
align-self: center;
}

</style>