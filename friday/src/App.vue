<template>
  <div id="app">
    <header_nav></header_nav>
    <router-view></router-view>
    <footers></footers>
  </div>
</template>

<script>
  import header_nav from "./components/header_nav/header_nav"
  import footers from "./components/footer/footer"
  export default {
    name: 'app',
    data(){
      return {}
    },
    components: {
      header_nav,
      footers
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    margin: 0;
    padding: 0;

  }
</style>
