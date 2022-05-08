<template>
    <div class="container-box">
        <UserDisplay />
        <p>Location:London</p>
        <p>Language:English</p>
        <p>Eco Score:600</p>
        <p>Rating:5 stars</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
h2 {
    font-size: 20px;
    font-weight: bold;
}

p {
    font-size: 15px;
}

.container-box {
    background: white;
    border: 5px;
    padding: 30px 100px 30px 30px;
    text-align: left;
    box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.1);;
}
</style>