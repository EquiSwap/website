<template>
    <div class="container-box">
        <UserDisplay v-if="user" :user="user" />
        <br>
        <p class="info-row"><b>Location:</b> London</p>
        <p class="info-row"><b>Language:</b> English</p>
        <p class="info-row"><b>EcoScore:</b> 0</p>
        <p class="info-row"><b>Rating:</b> 5 stars</p>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
h2 {
    font-size: 20px;
    font-weight: bold;
}

p {
    font-size: 15px;

    &.info-row {
        display: flex;
        justify-content: space-between;
    }
}

.container-box {
    background: white;
    width: 260px;
    padding: 30px;
    text-align: left;
}
</style>
