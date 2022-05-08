<template>
    <div class="back-button">
        <div class="border">
            <BackButton />
        </div>
        <div class="contain">
            <div class="header">
            <slot />
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.contain {
    display: flex;
    width: 100%;
    // left: 50%;

    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.121);
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.back-button {
    // display: flex;
    margin: auto;
    width: 90%;
    left: 50%;
    margin-top: 50px;

    background: #ffffff;
    // border: 1px solid rgba(0, 0, 0, 0.121);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.header {
    width: 100%;
    // object-fit: cover;
}

.border {
    border: 1px solid rgba(0, 0, 0, 0.121);

    // Inset shadow
    // box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25) inset;
}
</style>