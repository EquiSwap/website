<template>
    <div class="mainContainer">
        <ProfilePicture :target="user.profilePicture" />
        <div class="sideContainer">
            <h1><b>{{ user.displayName }}</b></h1>
            <p>@{{ user.username }}</p>
        </div>
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
.mainContainer{
    display: flex;
    position: relative;
    width: 100%;
    gap: 10px;

    .sideContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}

h1 {
    font-size: 20px;
    margin: 0;
    line-height: 1;
}

p {
    margin: 0;
    line-height: 1;
}
</style>
