<template>
    <div>
        <FullPageCard :loading="!product">
            <div v-if="product" class="offer-row">
                <Card>
                    <ProductPicture :target="product.image" class="image"/>
                    <ProductInfoBox :product="product"/>
                </Card>
                <Card>
                    <ProductInfoBox :product="product"/>
                    <ProductPicture :target="product.image" class="image"/>
                </Card>
            </div>
            <MakeOfferPaymentBar/>
        </FullPageCard>
    </div>
</template>

<script>
export default {

    data: () => ({
        product: undefined
    }),

    async mounted() {
        try {
            this.product = (await this.$axios.$get(`/v1/product/${this.$route.params.id}`)).payload;
        } catch (ex) {
            await this.$router.replace('/');
            this.$toast.error('That product could not be found!');
        }
    }

}
</script>

<style lang="scss" scoped>
.image {
    height: 250px;
    width: 250px;
    // padding: 120px;
    margin-top: 90px;
}

.offer-row {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
