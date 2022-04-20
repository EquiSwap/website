<template>
    <div>
        <SignInCard>
            <Icon class="icon-left" />
            <h1 class="header-box center">Welcome back!</h1>
            <p class="center">Please log in to continue...</p>
            <TextField />
            <TextField />
            <Button class="center" />
        </SignInCard>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.header-box {
    padding: 50px;
    font-size: 30px;
    font-weight: bold;
}

.icon-left {
    width: 30%;
}

.center {
    display: grid;
    place-items: center;
}
</style>