<template>
    <div>
        <FullPageCard :loading="!ready">
            <form @submit.prevent="post">
                <div class="wrapper">
                    <div>
                        <h2>Product Details</h2>
                        <p>Please enter some basic details about your product and upload an image.</p>
                        <br>

                        <template v-if="error">
                            <p class="error">{{ error }}</p>
                            <br>
                        </template>

                        <TextField required v-model="form.title" icon="title" label="Product Title"/>
                        <TextField required v-model="form.description" icon="description" label="Product Description"/>

                        <!-- Product Category -->
                        <select v-model="form.category" required>
                            <option :value="undefined" selected disabled>Product Category (please select)</option>
                            <option :value="category.id" :key="category.id" v-for="category in categories">
                                {{ category.name }}
                            </option>
                        </select>

<!--                        <br><br>-->
<!--                        <p>-->
<!--                            Please select any categories you are willing to trade for.<br>-->
<!--                            Leave this blank to allow any.-->
<!--                        </p>-->
<!--                        <br>-->

                        <Button class="right" @submit.native.prevent="post">Create Listing</Button>
                    </div>
                    <div>
                        <h2>Product Picture</h2>
                        <br>

                        <div class="center">
                            <ProductPicture large :target="form.image" />
                            <Button @click.native.prevent="setProductPicture">Set Product Picture</Button>

                            <template v-if="!form.image">
                                <p class="error">You have not yet set a product picture. You must set one in order to
                                    create a product listing.</p>
                            </template>
                        </div>
                    </div>
                </div>
            </form>
        </FullPageCard>
    </div>
</template>

<script>
import {user} from "@/utils/store-accessor";

export default {

    beforeCreate() {
        if (!user.isAuthenticated) {
            this.$router.replace('/');
        }
    },

    data: () => ({
        loading: false,
        error: undefined,
        categories: undefined,

        form: {
            title: undefined,
            description: undefined,
            category: undefined,

            image: undefined
        }
    }),

    async mounted() {
        if (user.isAuthenticated) {
            this.categories = (await this.$axios.$get('/v1/product/categories/list')).payload;
        }
    },

    computed: {
        ready() {
            return !this.loading && user.isAuthenticated && this.categories;
        }
    },

    methods: {
        async setProductPicture() {
            try {
                // Attempt to get the product image from the user.
                const productPicture = await new Promise((resolve, reject) => {
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

                if (!productPicture) return;
                this.form.image = productPicture;
            } catch(ex) {
                const errorData = ex.response?.data;
                this.$toast.error(errorData.message ?? 'Failed to process image. Please try again later.');
            }
        },

        async post() {
            if (!this.form.image) {
                alert("You have not yet set a product picture. You must set one in order to create a product listing.");
                return;
            }

            this.loading = true;

            try {
                const productResponse = (await this.$axios.$post(
                    '/v1/product/create', this.form, user.requestConfig
                )).payload;
                await this.$router.push(`/product/${productResponse.product.id}`);
                this.$toast.success('Your product listing was created successfully.');
                return;
            } catch (ex) {
                const errorData = ex.response?.data;
                this.error = errorData?.message ?? "There was a problem creating the product listing.";
            }

            this.loading = false;
        }
    }

}
</script>

<style lang="scss" scoped>
h2 {
    font-size: 25px;
    font-weight: bold;
}

.error {
    color: #FF2D3F;
}

.wrapper {
    display: flex;
    flex-direction: row;
    padding: 40px;
    justify-content: space-evenly;
    align-items: stretch;

    & > div {
        width: 500px;
        display: inline-flex;
        flex-direction: column;
    }

    .right {
        align-self: flex-end;
        margin: 20px 0 0;
    }

    .center {
        flex-grow: 1;
        align-self: center;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>
