<template>
  <div class="scoreShop">
    <swiperTwo></swiperTwo>
    <scoreShops></scoreShops>
  </div>
</template>

<script>
  import scoreShops from './scoreShops/scoreShops.vue'
  import swiperTwo from './swiperTwo/swiperTwo.vue'
  export default {
    name: 'scoreShop',
    data(){
      return {}
    },
    components: {
      scoreShops,
      swiperTwo
    }
  }
</script>

<style>

</style>

