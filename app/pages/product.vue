<template>
    <div>
        <Navbar />
        <FullPageCard>
            <div class="product-wrapper">
                <DescriptionBox>
                    <div class="inline">
                        <Button />
                        <p>OR</p>
                        <Button />
                    </div>
                </DescriptionBox>
                <img src="~assets/images/t-shirt.jpg" class="image">
                <ProductSideBar />
            </div>
        </FullPageCard>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.image {
    height: auto;
    width: 100%;
    margin-top: 90px;
    border: 2px solid #555;
}

.inline {
    display: flex;
}

.product-wrapper {
    display: grid;
    grid-template: auto / 2.5fr auto auto;
    column-gap: 25px;
    padding: 40px;
}
</style>