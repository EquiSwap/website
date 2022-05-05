<template>
   <div class="container">
       <SearchField class="search"/>
       <UserDisplay class="Temp"/>
   </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.container {
    position: relative;
    background: white;
    display: inline-block;
    width: 30%;
    height: 100%;
    padding: 1px;
}
.container .search {
    display: inline-block;
    width: 100%;
    border-radius: 0px;

}

</style>