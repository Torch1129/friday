<template>
    <div class="personalCenter">
        <personalNav></personalNav>
        <router-view></router-view>
    </div>
</template>
<script>
  import personalNav from "./personalNav/personalNav.vue"
    export default {
        name: '',
        data(){
            return {}
        },
        components: {
          personalNav
        }
    }
</script>

<style>
  .personalCenter{
    width: 1280px;
    margin: 20px auto 45px;
    overflow: hidden;
  }
</style>
