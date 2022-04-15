<template>
<div>
  <div>
    <Navbar />
    <Display />
    <h1> Trending Categories </h1>
    <div>
      <TrendingCard />
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})

</script>



