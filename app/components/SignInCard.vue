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

<style lang="scss">
  @import "~/assets/css/signup.scss";
</style>