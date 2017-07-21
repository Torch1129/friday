<template>
  <div class="index">
    <header_log v-on:toPersonalCenter="getHeader_logData"></header_log>
    <goodsType v-bind:b="a"></goodsType>
    <router-view></router-view>
  </div>
</template>

<script>
  import header_log from './header_log/header_log.vue'
  import goodsType from './goodsType/goodsType.vue'
  export default {
    name: 'index',
    data () {
      return {
          a: "1"
      }
    },
    methods:{
        getHeader_logData:function(data) {
            console.log(data);
            this.a = data;
            console.log(this.a)
        }
    },
    components:{
        header_log,
        goodsType
    }
  }
</script>

<style scoped>



</style>
