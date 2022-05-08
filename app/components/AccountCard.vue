<template>

    <div class="container">
        <div>
        <slot></slot>
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
    display: flex;
    margin: auto;
    padding: 30px;
    width: 700px;
    height: 1000px;

    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: $loginBorderRadius;
}

.text-field {
    position: relative;
    top: auto;
    left: auto;
    margin: auto;
    margin-top: -44%;
}
</style>