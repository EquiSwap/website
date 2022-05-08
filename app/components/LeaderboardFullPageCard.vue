<template>
    <div class="contain">
        <div class="head">
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
    display: grid;
    margin: auto;
    width: 90%;
    left: 50%;
    margin-top: 50px;

    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.head {
    width: 100%;
    object-fit: cover;
}

</style>