<template>
    <div v-if="ready">
        <h1>Account Settings</h1>
        <div class="cards">
            <ContentCard>
                <h2>User Details</h2>

                <br>

                <h3>General Information</h3>
                <TextField icon="user" v-model="form.displayName" label="Display Name"/>
                <TextField required icon="email" v-model="form.email" label="Email Address"/>

                <br>

                <h3>Location</h3>
                <TextField v-model="form.street" label="Street"/>
                <TextField v-model="form.county" label="County"/>
                <TextField v-model="form.postcode" label="ZIP Code / Postcode"/>
                <TextField disabled v-model="form.country" label="Country"/>

                <Button danger class="right" @click.native.prevent="deleteAccount">Delete Account</Button>
                <Button class="right" @click.native.prevent="save">Save Changes</Button>
            </ContentCard>

            <ContentCard>
                <h2>Profile Picture</h2>
                <div class="center">
                    <ProfilePicture large currentUser />
                    <Button @click.native.prevent="uploadProfilePicture">Change Profile Picture</Button>
                </div>
            </ContentCard>
        </div>
    </div>
</template>

<script>
import { user } from "~/utils/store-accessor";

export default {

    beforeCreate() {
        if (!user.isAuthenticated) {
            this.$router.replace('/');
        }
    },

    mounted() {
        if (user.isAuthenticated) this.ready = true;
    },

    data: () => ({
        ready: false,

        form: {
            displayName: user.cache.displayName,
            email: user.cache.email,

            street: user.cache.street,
            county: user.cache.county,
            postcode: user.cache.postcode,
            country: user.cache.country,
        }
    }),

    methods: {

        async deleteAccount() {
            if (confirm('Are you sure you want to delete your account?')) {
                try {
                    const deleteResponse = (await this.$axios.$delete(
                        '/v1/user/delete', user.requestConfig
                    )).payload;

                    await user.logout({ force: true });
                    await this.$router.replace('/');

                    this.$toast.success(deleteResponse.message);
                } catch (ex) {
                    const errorData = ex.response?.data;
                    this.$toast.error(errorData.message ?? 'Failed to delete your account. Please try again later.');
                }
            }
        },

        async save() {
            try {
                const updateResponse = (await this.$axios.$post(
                    '/v1/user/update', this.form, user.requestConfig
                )).payload;

                user.replaceUserCache(updateResponse.user);
                this.$toast.success(updateResponse.message);
            } catch(ex) {
                const errorData = ex.response?.data;
                this.$toast.error(errorData.message ?? 'Failed to save changes. Please try again later.');
            }
        },

        async uploadProfilePicture() {
            try {
                // Attempt to get the profile image from the user.
                const profilePicture = await new Promise((resolve, reject) => {
                    const fileInputElement = document.createElement('input');
                    fileInputElement.type = 'file';
                    fileInputElement.accept = 'image/*';

                    fileInputElement.addEventListener('change', () => {
                        if (fileInputElement.files.length) {
                            const reader = new FileReader();
                            reader.onloadend = () => resolve(reader.result);
                            reader.onerror = (err) => reject(err);
                            reader.readAsDataURL(fileInputElement.files[0]);
                        } else resolve(undefined);
                    });
                    fileInputElement.click();
                });

                // If there was no profile image specified, do nothing.
                if (!profilePicture) return;

                const progressToast = this.$toast.success("Uploading image...");

                // Otherwise, upload the profile image.
                const updateResponse = (await this.$axios.$post(
                    '/v1/user/setProfilePicture', { profilePicture }, user.requestConfig
                )).payload;

                // Wait a 100ms delay for the image to update on the server.
                await new Promise((resolve) => setTimeout(resolve, 100));

                // Update cache and display a notification indicating success.
                user.replaceUserCache({
                    ...user.cache,
                    profilePicture: updateResponse.profilePicture
                });

                this.$toast.dismiss(progressToast);
                this.$toast.success(updateResponse.message);
            } catch(ex) {
                const errorData = ex.response?.data;
                this.$toast.error(errorData.message ?? 'Failed to upload new profile picture. Please try again later.');
            }
        }

    }

}
</script>

<style lang="scss" scoped>
h1 {
    margin-top: 60px;
    margin-bottom: 20px;
    margin-left: 120px;
    font-size: 30px;
    font-weight: bold;
}

h2 {
    font-size: 25px;
    font-weight: bold;
}

h3 {
    font-size: 15px;
    font-weight: bold;
}

.cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px 60px;
    row-gap: 50px;

    @media(min-width: 1200px) {
        justify-content: space-evenly;
        align-items: stretch;
        padding: 30px 120px;
        flex-direction: row;
        row-gap: 0;
    }

    .content-card {
        width: 500px;
    }

    .right {
        align-self: flex-end;
        margin: 20px 0 0;
    }
}

.label {
    padding: 30px;
    font-size: 15px;
}

</style>
