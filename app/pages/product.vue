<template>
    <div>
        <Navbar />
        <FullPageCard>
            <DescriptionBox>
                <div class="inline">
                    <Button />
                    <p>OR</p>
                    <Button />
                </div>
            </DescriptionBox>
            <img src="~assets/images/t-shirt.jpg" class="image">
            <ProductSideBar />
        </FullPageCard>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.image {
    height: 70%;
    width: auto;
    // padding: 120px;
    margin-top: 90px;
    border: 2px solid #555;
}

.inline {
    display: flex;
}
</style>