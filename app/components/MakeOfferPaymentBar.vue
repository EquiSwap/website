<template>
    <div class="payment-bar">
        <h1>Add Payment</h1>
        <TextField icon="money" type="number" label="Enter amount..."/>
        <Button>Make Trade</Button>
        <TextField icon="money" type="number" label="Enter amount..."/>
        <h1>Request Payment</h1>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.payment-bar {
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-top: 2px solid rgba(0, 0, 0, 0.121);

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

h1 {
    display: block;
    font-weight: bold;
    flex-grow: 1;

    padding: 0 20px;
    text-align: center;
}

// .center {
//     display: grid;
//     place-items: center;
// }
</style>
