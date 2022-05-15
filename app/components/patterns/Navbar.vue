<template>
    <div>
        <div class="header-spacer" />
        <div class="header">
            <nuxt-link class="logo-wrapper" to="/">
                <img draggable="false" class="logo" src="~/assets/images/equiswap_logo.png" alt="EquiSwap Logo" role="presentation">
            </nuxt-link>
            <nuxt-link to="/categories">Categories</nuxt-link>
            <nuxt-link to="/leaderboard">Leaderboard</nuxt-link>
            <div class="spacer"/>
            <div class="searchbar">
                <SearchField />
            </div>

            <template v-if="authenticated">
                <a>Messages</a>
                <a href="#" @click.prevent="logout">Log Out</a>
                <nuxt-link style="font-size:0" to="/account"><ProfilePicture currentUser /></nuxt-link>
            </template>
            <template v-else>
                <nuxt-link to="/register">Register</nuxt-link>
                <div class="button">
                    <nuxt-link to="/login"><Button>Login</Button></nuxt-link>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { user } from "~/utils/store-accessor";

export default {
    name: 'Navbar',

    computed: {
        authenticated () {
            return user.isAuthenticated;
        },

        user () {
            return user.cache;
        }
    },

    methods: {
        async logout () {
            await this.$router.push('/');
            await user.logout();
        }
    }
}
</script>

<style lang="scss" scoped>
.header-spacer {
    height: 90px;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #ffffff;
    text-align: center;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 999;
    height: 90px;

    a {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        color: #6D6D6D;
        padding: 0 15px;
    }
}

.logo-wrapper {
    user-select: none !important;
    -webkit-user-select: none !important;
    cursor: pointer;

    img.logo {
        background-size: 300px;
        background-repeat: no-repeat;
        display: inline-block;
        height: 60px;
        transform: translate(0, -2px);

        user-select: none !important;
        -webkit-user-select: none !important;
        cursor: pointer;
    }
}

.spacer {
    flex-grow: 1;
}

</style>
