<template>
    <div>
        <Navbar />
        <FullPageCard>
            <div class="wrapper">
                <div>
                    <h1>Product name</h1>
                    <TextField />
                    <h1>Product category</h1>
                    <!-- change to drop down list -->
                    <TextField />
                    <h1>Product description</h1>
                    <TextField />
                    <Button />
                </div>
                <p>(Image upload here)</p>
            </div>
        </FullPageCard>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.wrapper {
    display: grid;
    // grid-template: auto / 5fr auto;
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
    padding: 40px;
}
</style>