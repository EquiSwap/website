<template>
    <div class="mainContainer">
        <div class="left">
            <p class="heading">
                Trading with an <i>emphasis</i> on
                <span class="emphasis">Environmental Change</span>.
            </p>
        </div>
        <img class="background" src="~/assets/images/backgrounds/login.png" alt="the environment" role="presentation">
    </div>
</template>

<style lang="scss" scoped>
.mainContainer {
    width: 100%;
    height: 600px;
    position: relative;

    .background {
        display: none;
    }
}

.mainContainer .left {
    position: relative;
    height: 100%;
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    color: black;
    z-index: 10;
    text-align: center;

    .heading {
        margin: 0 20px;
        padding: 20px 0;
        width: 70%;
        font-style: normal;
        font-weight: 700;
        font-size: 50px;
        line-height: 1.5;
        color: #525252;
    }
}

// Responsive design for large screens.
@media (min-width: 1200px) {
    .mainContainer .background {
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 70%;
        object-fit: cover;
        object-position: top right;
    }

    .mainContainer .left {
        width: 50%;
        justify-content: flex-start;
        clip-path: polygon(0% 0%, 100% 0, 100% 0, 66% 100%, 0% 100%);
        text-align: left;

        .heading {
            width: 60%;
            margin: 0 20% 0 5%;
            padding: 0;
        }
    }
}

.emphasis {
    color: var(--color);
}

</style>
