<template>
    <div class="trendingCardContainer">
        <h1 class="heading1">Trending Categories</h1>

        <nuxt-link to="/categories" :key="n" v-for="n in numbers">
            <div class="imgContainer">
                <img src="~assets/images/books.jpg" alt="" class="ProductImage">
                <h2 class="productTitle">Books</h2>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            numbers: [1, 2, 3]
        }
    }

}
</script>

<style lang="scss" scoped>
.trendingCardContainer {
    padding: 20px 15% 20px;
    text-align: center;

    .imgContainer {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        width: 230px;
        height: 230px;
        margin: 30px;
        border-radius: 5px;
        box-shadow: 0 0 55px 10px rgba(0, 0, 0, 0.05);

        .ProductImage {
            height: 150px;
            width: 150px;
        }
    }
}

h1 {
    font-weight: 700;
    line-height: 1;
    font-size: 50px;
    padding: 50px 0 20px;
    margin-bottom: 15px;
    text-align: center;
}

.productTitle {
    font-weight: bold;
    text-align: center;
    font-size: 25px;
}
</style>
