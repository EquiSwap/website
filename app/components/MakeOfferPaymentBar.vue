<template>
    <div class="contain">
        <h1>Add additional payment</h1>
        <TextField />
        <Button />
        <TextField />
        <h1>Request additional payment</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.contain {
    background-color: white;
    width: 90%;
    margin-left: 5%;
    display: flex;
    place-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

h1 {
    font-weight: bold;
}
// .center {
//     display: grid;
//     place-items: center;
// }
</style>