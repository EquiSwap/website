<template>
    <div>
        <Navbar />
        <SignInCard>
            <Icon class="icon-left" />
            <h1 class="center">Hey there!</h1>
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
h1 {
    padding: 50px;
    font-size: 40px;
    font-weight: bold;
}

p {
    font-size: 20px;
}

.icon-left {
    width: 30%;
}
.center {
    display: grid;
    place-items: center;
}
</style>