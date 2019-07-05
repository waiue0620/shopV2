<template>
  <div id="app">
    <!-- <loading :active.sync="isLoading"></loading> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
  // created: {
  //   isLoading () {
  //     return this.$store.state.isLoading
  //   }
  // }
}
</script>

<style lang="scss">
  @import './assets/all';
</style>
