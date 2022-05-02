<template>
    <div class="box">
        <h1>Red T-Shirt</h1>
        <br>
        <hr>
        <h2>Kristin Watson, Guildford, 11/3/22</h2>
        <hr>
        <br>
        <p>
            Bottega Veneta takes you on a colorful journey with its latest offerings, such as this bold tomato-red cotton T-shirt. The classic crewneck style has slightly dropped shoulders that enhance its relaxed fit. Our styling advice is this: wear it with everything you own – it will slot seamlessly into your everyday rotations.
            Bottega Veneta takes you on a colorful journey with its latest offerings, such as this bold tomato-red cotton T-shirt. The classic crewneck style has slightly dropped shoulders that enhance its relaxed fit. Our styling advice is this: wear it with everything you own – it will slot seamlessly into your everyday rotations.
            Bottega Veneta takes you on a colorful journey with its latest offerings, such as this bold tomato-red cotton T-shirt. The classic crewneck style has slightly dropped shoulders that enhance its relaxed fit. Our styling advice is this: wear it with everything you own – it will slot seamlessly into your everyday rotations.
        </p>
        <Button class="button"/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
h1 {
    font-size: 50px;
    font-weight: bold;
}

h2 {
    font-size: 28px;
}

p {
    font-size: 25px;
}

.box {
    background-color: white;
    padding: 150px;
}

.button {
    // margin: 100px;
    display: grid;
    place-items: center;
            top: 50%;
        left: 50%;
        transform: translate(70%, 50%);
    width: 40%;
    align-self: center;
}
</style>