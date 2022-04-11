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
        padding: 20px;
    }

    .text-field {
        background: #EBEBEB;
        height: 50px;
        width: 300px;
        border-radius: 7px;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .text-field-icon {
        position: absolute;
        right: 115px;
        top: 0;
        bottom: 0;
    }
</style>