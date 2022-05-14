<template>
    <div>
        <Navbar />
        <SignInCard>
            <Icon class="icon-left" />
            <h1 class="center">Welcome back!</h1>
            <h2 class="center">Please log in to continue...</h2>
            <p>Email address</p>
            <TextField />
            <p>Password</p>
            <TextField />
          <Button class="center">Log In</Button>
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

h2 {
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
