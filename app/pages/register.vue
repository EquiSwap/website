<template>
    <div v-if="ready">
        <SignInCard>
            <nuxt-link to="/"><BrandIcon class="icon-left"/></nuxt-link>
            <br>
            <div class="content">
                <form @submit.prevent="submit">
                    <h1>Hey there!</h1>
                    <h2>Please create an account to continue...</h2>
                    <br>
                    <template v-if="error">
                        <p class="error">{{ error }}</p>
                        <br>
                    </template>
                    <TextField required v-model="form.username" label="Username" icon="user" />
                    <TextField required v-model="form.email" label="Email Address" icon="email" />
                    <TextField required v-model="form.password" label="Password" type="password" icon="lock" />
                    <Button block class="center" @click.native.prevent="submit">Sign Up</Button>
                    <br>
                    <div class="promo">
                        <p>Already have an account?</p>
                        <p><Link to="/login">Log in to your account</Link></p>
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
            email: undefined,
            password: undefined,
        }
    }),

    methods: {
        async submit() {
            this.loading = true;

            try {
                await user.register(this.form);
                await this.$router.replace('/');
                this.$toast.success('Your account has been created!');
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
