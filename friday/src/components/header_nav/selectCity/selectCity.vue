<template>
<div class="selectCity">
  <div id="c_cover"></div>
  <div id="c_location">
    <p>请选择您的收货地址:</p>
    <div class="c_select">
        <VDistpicker></VDistpicker>
    </div>
    <button @click="ensureCity()">确定</button>
  </div>
</div>
</template>
<script>
  import VDistpicker from './v-distpicker/Distpicker.vue'
  export default{
    name: 'selectCity',
    data () {
      return {}
    },
    methods: {
      ensureCity(){
          this.$emit("ensureCity",true)
      },
    },
    components: {VDistpicker},
  }
</script>

<!-- 样式代码 -->
<style scoped>
  .selectCity{
    width: 100%;
    height: 100%;
  }
  #c_cover{
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  #c_location {
    z-index:100;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 700px;
    height: 350px;
    background: url(img/c_bg.png) no-repeat;
    background-size: 100% 100%;
    text-align: center;
  }
  #c_location p{
    text-align: left;
    padding-top: 50px;
    padding-left: 75px;
    color: rgb(65,126,19);
    font-size: 18px;
  }
  .c_select{
    margin-top: 60px;
  }
  .c_select select option{
    padding: 50px;
  }
  #c_location button{
    width: 150px;
    height: 35px;
    border: none;
    outline: none;
    font-size: 14px;
    color: white;
    margin-top: 55px;
    border-radius: 3px;
    background: rgb(219,134,27);
  }
</style>
