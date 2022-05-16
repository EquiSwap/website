<template>
    <div v-if="ready">
        <SignInCard>
            <nuxt-link to="/">
                <BrandIcon class="icon-left"/>
            </nuxt-link>
            <br>
            <div class="content">
                <form @submit.prevent="submit">
                    <h1>Welcome back!</h1>
                    <h2>Please log in to continue...</h2>
                    <br>
                    <template v-if="error">
                        <p class="error">{{ error }}</p>
                        <br>
                    </template>
                    <TextField required v-model="form.username" label="Username" icon="user"/>
                    <TextField required v-model="form.password" label="Password" type="password" icon="lock"/>
                    <Button :loading="loading" block class="center" @click.native.prevent="submit">Log In</Button>
                    <br>
                    <div class="promo">
                        <p>Don't have an account yet?</p>
                        <p>
                            <Link to="/register">Create an account</Link>
                        </p>
                    </div>
                </form>
            </div>
        </SignInCard>
    </div>
</template>

<script>
import { user } from "~/utils/store-accessor";

export default {

    beforeCreate() {
        if (user.isAuthenticated) {
            this.$router.replace('/');
        }
    },

    mounted() {
        if (!user.isAuthenticated) this.ready = true;
    },

    data: () => ({
        ready: false,
        loading: false,
        error: undefined,

        form: {
            username: undefined,
            password: undefined
        }
    }),

    methods: {
        async submit() {
            this.loading = true;

            try {
                await user.login(this.form);
                await this.$router.replace('/');
                this.$toast.success('You have been logged in!');
            } catch (ex) {
                this.error = ex.message;
            }

            this.loading = false;
        }
    },

    watch: {
        form: {
            handler() {
                this.error = undefined;
            },
            deep: true
        }
    }

}
</script>

<style lang="scss" scoped>
.icon-left {
    height: 86px;
    width: 86px;
}
</style>
