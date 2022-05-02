<template>
    <div class="text-field-wrapper">
        <input class="text-field">
        <span class="text-field-icon">icon</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .text-field-wrapper {
        position: relative;
        padding-top: 50px;
        padding-left: 25px;
        padding-right: 25px;
    }

    .text-field {
        background: #EBEBEB;
        height: 50px;
        width: 350px;
        border-radius: 7px;
        left: 50%;
        transform: translate(0%, -50%);
    }

    .text-field-icon {
        position: absolute;
        right: 50px;
        top: 27px;
        bottom: 0;
    }
</style>