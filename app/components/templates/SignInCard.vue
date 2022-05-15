<template>

    <div class="container">
        <div class="left">
            <slot/>
        </div>
        <div class="right">
            <div class="icon-right">
                <nuxt-link to="/"><BrandIcon/></nuxt-link>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
$loginBorderRadius: 18px;

.right {
    position: relative;
    width: 55%;
    border-radius: $loginBorderRadius;
    background: url(~/assets/images/backgrounds/login.png);

    .icon-right {
        position: absolute;
        top: 47.5%;
        left: 47.5%;
        transform: translate(-50%, -50%);
    }
}

.container {
    display: flex;
    width: 1300px;
    height: 700px;
    left: 50%;
    margin: 50px auto auto;

    background: #ffffff;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: $loginBorderRadius;
}

.left {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    position: relative;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 20px;

    h1 {
        font-size: 40px;
        font-weight: bold;
        color: #585858;
        margin: 0;
        line-height: 1;
    }

    h2 {
        color: #A3A3A3;
        margin: 0;
        font-size: 18px;
    }

    .error {
        color: #FF2D3F;
        width: 90%;
    }

    .content {
        padding: 0 40px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .promo {
        color: #A3A3A3;
        text-align: center;
    }
}

.text-field {
    position: relative;
    top: auto;
    left: auto;
    margin: auto;
}
</style>
