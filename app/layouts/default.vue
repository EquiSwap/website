<template>
    <div>
        <!-- stuff for every page such as nav bars -->
        <Navbar />

        <!-- page content -->
        <Nuxt />
    </div>
</template>

<script>
import { user } from "~/utils/store-accessor";

export default {

    data: () => ({
        isAuthenticated: false
    }),

    async beforeCreate() {
        let wasLoggedIn = user.isAuthenticated;

        await user.startSession();
        this.isAuthenticated = user.isAuthenticated;
        if (wasLoggedIn && !this.isAuthenticated) {
            this.$toast.error('You have been logged out.');
        }
    },

}
</script>
