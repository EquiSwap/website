<template>
    <div>
        <Navbar />
        <FullPageCard>
          <MakeOfferCard>
            <img src="~assets/images/t-shirt.jpg" class="image">
            <DescriptionBox />
          </MakeOfferCard>
          <MakeOfferCard>
            <DescriptionBox />
            <img src="~assets/images/t-shirt.jpg" class="image">
          </MakeOfferCard>
        </FullPageCard>
        <MakeOfferPaymentBar />
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