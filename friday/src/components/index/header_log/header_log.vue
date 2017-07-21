<template>
  <div class="header_logo">
    <div class="w_head_logo">
      <!--左侧logo-->
      <div class="w_head_left">
        <router-link to="/index"><img src="./img/logo.png"/></router-link>
      </div>
      <!--中间搜索框-->
      <div class="w_head_content">
        <div class="w_head_search">
          <input type="text" placeholder="请输入关键字进行搜索"/>
          <img src="./img/形状 19.png"/>
        </div>
        <div class="w_head_text">
          <span>热门:</span>
          <a href="">杂粮饭</a>
          <a href="">辣椒酱</a>
          <a href="">水果礼篮</a>
          <a href="">擦玻璃</a>
          <a href="">蟹肉棒</a>
          <a href="">苹果</a>
        </div>
      </div>
      <!--右侧个人中心 购物车-->
      <div class="w_head_right">
        <router-link class="w_head_personal_link" v-on:click.native="toPersonalCenter()" to="/index/personalCenter/myAccount">
          <div class="w_head_personal">
            <span><img src="./img/图层 8.png"/></span>
            <span>个人中心</span>
          </div>
        </router-link>
        <router-link class="w_head_personal_link" to="/shoppingCar">
        <div class="w_head_shopping">
          <span><img src="./img/图层 9.png"/></span>
          <span>购物车</span>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'header_logo',
    data(){
      return {

      }
    },
    methods:{
      toPersonalCenter: function () {
          this.$root.$emit("toPersonalCenter","5");
      }
    },
    components: {}
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  .w_head_logo {
    width: 1280px;
    margin: 25px auto 0 auto;
    overflow: hidden;
    /*margin-top: 61px;*/
  }

  .w_head_left {
    display: inline-block;
    float: left;
    cursor: pointer;
  }

  .w_head_content {
    display: inline-block;
    float: left;
    margin: 25px 0 0 94px;
    position: relative;
  }

  .w_head_search input {
    outline: none;
    border: 2px solid #4b943d;
    padding: 10px 285px 9px 10px;
    font-size: 14px;
    color: #c2c2c2;
    float: left;
  }

  .w_head_search img {
    background-color: #4b943d;
    padding: 10px;
    cursor: pointer;
  }

  .w_head_text {
    font-size: 14px;
    color: #8f8f8f;
  }

  .w_head_text span {
    display: inline-block;
    margin-right: 10px;
  }

  .w_head_text a {
    font-size: 14px;
    color: #8f8f8f;
    margin-right: 5px;
  }

  .w_head_right {
    display: inline-block;
    float: right;
    margin-top: 24px;
    font-size: 14px;
    color: #666666;
    margin-right: 16px;
  }

  .w_head_personal {
    border: 1px solid #E5E5E5;
    background-color: #F8F8F6;
    display: inline-block;
    padding: 7px 23px;
    margin-right: 20px;
    cursor: pointer;
  }

  .w_head_personal_link {
    color: #666666;
  }

  .w_head_personal span:nth-child(1) {
    margin-top: 3px;
    margin-right: 5px;
    display: inline-block;
    float: left;
  }

  .w_head_shopping {
    border: 1px solid #E5E5E5;
    background-color: #F8F8F6;
    display: inline-block;
    padding: 7px 29px;
    cursor: pointer;
    float: right;
  }

  .w_head_shopping span:nth-child(1) {
    margin-top: 3px;
    margin-right: 5px;
    display: inline-block;
    float: left;
  }

</style>
