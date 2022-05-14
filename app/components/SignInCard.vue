<template>

    <div class="container">
        <div class="left">
            <slot />
        </div>
        <div class="right">
            <img src="~/assets/images/backgrounds/login.png" alt="login image" class="image" draggable="false">
            <div class="icon-right">
                <Icon />
            </div>
        </div>
    </div>

</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

$loginBorderRadius: 25px;

.container {
    // position: absolute;
    display: flex;
    margin: auto;
    width: 1300px;
    height: 700px;
    left: 50%;
    margin-top: 50px;

    // transform: translate(-50%, -50%);

    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: $loginBorderRadius;
}

.left {
    display: inline-block;
    flex-grow: 1;
}

.left {
    position: relative;
    right: 0;
    top: 0;
    bottom: 0;

    .image {
        height: 100%;
        object-fit: cover;
        border-radius: $loginBorderRadius;
    }

    .icon-right {
        position: absolute;
        display: grid;
        place-items: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 600px;
        max-width: 60%;
    }
}

// .icon-left {
//     top: -9%;
//     left: -25%;
//     width: 100%;
//     position: absolute;
// }

.text-field {
    position: relative;
    top: auto;
    left: auto;
    margin: auto;
    margin-top: -44%;
}
</style>
