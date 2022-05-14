<template>
    <div>
        <SignInCard>
            <nuxt-link to="/"><BrandIcon class="icon-left"/></nuxt-link>
            <br>
            <div class="content">
                <h1>Hey there!</h1>
                <h2>Please create an account to continue...</h2>
                <br>
                <TextField label="Username" icon="user" />
                <TextField label="Email Address" icon="email" />
                <TextField label="Password" type="password" icon="lock" />
                <Button block class="center">Sign Up</Button>
                <br>
                <div class="promo">
                    <p>Already have an account?</p>
                    <p><Link to="/login">Log in to your account</Link></p>
                </div>
            </div>
        </SignInCard>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.icon-left {
    height: 86px;
    width: 86px;
}
</style>
