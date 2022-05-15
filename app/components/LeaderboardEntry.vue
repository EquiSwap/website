<template>
    <div class="box">
        <ProfilePicture />
        <p>User 1</p>
        <p>8</p>
        <p>600</p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
.box {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

p {
    font-weight: bold;
    // padding: 0px 30px 0px 30px;
}
</style>
