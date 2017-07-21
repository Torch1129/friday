<template>
  <div class="header_nav">
    <div class="p_header_nav">
      <div class="p_header_nav_left">所在城市:<span @click="selectCity()">{{city}}{{area}}</span><em></em></div>
      <div class="p_header_nav_right">
        <router-link class="p_header_nav_rightA" to="/login">登录</router-link>
        <router-link class="p_header_nav_rightA" to="/register">注册</router-link>
        <router-link class="p_header_nav_rightA" to="/login">我的订单</router-link>
        <router-link class="p_header_nav_rightA" to="/login">我的信息</router-link>
        <router-link class="p_header_nav_rightAs" ng-click="" to="/seller">我是商家</router-link>
        <span class="p_header_nav_rightText"><em><img src="./img/header_phone.png"/></em>400-9906366</span>
      </div>
    </div>
    <selectCity v-if="citys" @ensureCity="ensureCity()"></selectCity>
  </div>
</template>

<script>
  import selectCity from "./selectCity/selectCity"
  export default {
    name: 'header_nav',
    data () {
      return {
              city: "郑州市",
              area: "金水区",
              citys: false,
              a: "",
              b: "",
      }
    },
    created:function () {
       this.$root.$on("selected",this.getData);
    },
    methods: {
      ensureCity(data){
        this.citys = data;
        this.city = this.a;
        this.area = this.b;
      },
      selectCity(){
        this.citys = true
      },
      getData(data) {
          this.a =  data.city.value;
          this.b =   data.area.value;
      }
    },
    components: { selectCity },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .header_nav{
    background: #eeeeee;
    padding: 5px 10px ;
    font-size: 14px;
    font-weight:200;

  }
  .p_header_nav{
    min-width: 1280px;
    width: 1280px;
    margin:0 auto;
  }
  .p_header_nav_left{
    display: inline-block;
  }
  .p_header_nav_right{
    display: inline-block;
    float: right;
  }
  .p_header_nav_rightA{
    display: inline-block;
    border-right:1px solid #999999;
    text-decoration: none;
    color: #000;
    padding:0 10px 0 12px;
  }
  .p_header_nav_rightAs{
    display: inline-block;
    border-right:1px solid #999999;
    text-decoration: none;
    color: #000;
    padding:0 10px 0 12px;
  }
  .p_header_nav_rightText{
    padding-left: 5px;
  }
  .p_header_nav_rightText img{
    width: 14px;
    height: 14px;

  }
  em{
      width: 4px;
      height: 4px;
  }
</style>
