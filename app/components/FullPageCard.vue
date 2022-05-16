<template>
    <div class="full-page-card">
        <div class="header">
            <BackButton />
        </div>
        <div class="content">
            <template v-if="loading">
                <div class="my-32">
                    <Loader large />
                </div>
            </template>
            <template v-else>
                <div>
                    <slot />
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            loading: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
.full-page-card {
    width: 90%;
    left: 50%;
    margin: 50px auto auto;

    border-radius: 18px;

    background: #ffffff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(0, 0, 0, 0.121);

    .content {
        width: 100%;
        background: #ffffff;
        border-top: 1px solid rgba(0, 0, 0, 0.121);

        border-bottom-left-radius: 18px;
        border-bottom-right-radius: 18px;
    }
}
</style>
