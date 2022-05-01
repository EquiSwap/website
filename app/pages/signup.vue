<template>
    <div>
        <Navbar />
        <SignInCard>
            <Icon class="icon-left" />
            <h1 class="header-box center">Hey there!</h1>
            <p class="center">Please create an account to continue...</p>
            <TextField />
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
    padding: 10px;
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