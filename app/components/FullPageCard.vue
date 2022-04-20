<template>
    <div class="contain">
        <div class="header">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.contain {
    position: absolute;
    display: flex;
    margin: auto;
    width: 90%;
    height: 80%;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.header {
    width: 100%;
    object-fit: cover;
}

</style>