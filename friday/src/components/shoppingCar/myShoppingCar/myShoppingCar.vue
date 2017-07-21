<template>
   <div class="myShoppingCar">
     <div class="border">
      <div class="w_myShoppingCar_logo">
        <div class="w_myShoppingCar_logo_left">
        <router-link to=""><img src="./img/logo.png" alt=""></router-link>
        </div>
        <div class="w_myShoppingCar_logo_right">
          <span>我的购物车</span>
          <span>></span>
          <span>确认订单信息</span>
          <span>></span>
          <span>订单提交成功</span>
        </div>
      </div>
     </div>
     <div class="w_myShoppingCar_message">
        <div class="w_myShoppingCar_message_title">
          <img src="./img/图层274.png" alt="">
          <span>购物车</span>
        </div>
       <table class="w_myShoppingCar_message_details">
         <tr class="w_myShoppingCar_message_detailsOne">
           <th><input type="checkbox"></th><th>礼拜五生鲜</th><th>规格</th><th>数量</th><th>单价</th><th>金额</th><th>操作</th>
         </tr>
         <tr class="w_myShoppingCar_message_detailsTwo"v-for="item in lists">
           <td><input type="checkbox"></td><td><img :src="item.src" alt=""><span>{{item.name}}</span></td><td>{{item.norms}}</td><td>
           <a href="javascript:void(0)">-</a><span>1</span><a href="javascript:void(0)">+</a></td><td>{{item.cost}}</td><td>{{item.money}}</td><td>
           <a href="javascript:void(0)">删除</a></td>
         </tr>
         <tr class="w_myShoppingCar_message_detailsLast">
           <td colspan="7">
             <span>商品金额</span><span>¥  6.00</span>
           </td>
         </tr>
       </table>
       <div class="w_myShoppingCar_operation">
         <div class="w_myShoppingCar_operation_left">
           <a href="javascript:void(0)">全选</a>
           <a href="javascript:void(0)">批量操作</a>
         </div>
         <div class="w_myShoppingCar_operation_right">
          <span>商品总计</span>
           <span>¥ 6.00</span>
           <router-link to="./shoppingCar/ensureOrder">立即购买</router-link>
         </div>
       </div>
     </div>
   </div>
</template>

<script>

    export default {
        name: 'myShoppingCar',
        data(){
            return {
                lists:[
                  {
                    src:require('./img/图层275.png'),
                    name:'什什么水果',
                    norms:'6个装',
                    cost:'¥1',
                    money:'¥6.00',
                  },
                  {
                    src:require('./img/图层275.png'),
                    name:'什什么水果',
                    norms:'6个装',
                    cost:'¥1',
                    money:'¥6.00',
                  }
                ]
            }
        },
        components: {}
    }
</script>

<style>
  *{
    margin: 0px;padding: 0px;
  }
  .border {
    width: 100%;
    border-bottom: 1px solid #dddddd;
  }
  .w_myShoppingCar_logo{
    width: 1280px;
    margin:25px auto 0;
    overflow: hidden;
  }
  .w_myShoppingCar_logo_left{
    display: inline-block;
  }
  .w_myShoppingCar_logo_right{
    display: inline-block;
    float: right;
  }
  .w_myShoppingCar_logo_right span{
    line-height: 90px;
    font-size: 20px;
    color: #666;
    margin: 0 20px;
  }
  .w_myShoppingCar_logo_right span:nth-child(1){
    color: #F08200;
  }
  .w_myShoppingCar_message{
    width: 1280px;
    margin: 0 auto;
  }
  .w_myShoppingCar_message_title{
    padding:17px 0;
  }
  .w_myShoppingCar_message_title span{
    color: #666;
    font-size: 18px;
    vertical-align: top;
  }
  .w_myShoppingCar_message_details{
    border:1px solid #ddd;
    border-spacing:0;
    width: 100%;
    border-collapse: collapse;
  }
  .w_myShoppingCar_message_detailsOne{
    background-color:#F5F5F5;
    font-size: 18px;
    line-height:50px;
  }
  .w_myShoppingCar_message_detailsOne th:nth-child(1){
    width: 5%;
  }
  .w_myShoppingCar_message_detailsOne th:nth-child(2){
    width: 20%;
    text-align: left;
  }
  .w_myShoppingCar_message_detailsOne th:nth-child(3){
    width: 15%;
  }
  .w_myShoppingCar_message_detailsOne th:nth-child(4){
    width: 15%;
  }
  .w_myShoppingCar_message_detailsOne th:nth-child(5){
    width: 25%;
  }
  .w_myShoppingCar_message_detailsOne th:nth-child(6){
    width: 15%;
  }
  .w_myShoppingCar_message_detailsOne th:nth-child(7){
    width: 5%;
  }
  .w_myShoppingCar_message_detailsTwo{
    border-bottom:1px solid #ddd;
  }
  .w_myShoppingCar_message_detailsTwo td{
    font-size:14px;
    padding:20px 0;
  }
  .w_myShoppingCar_message_detailsTwo td:nth-child(1){
    width: 5%;
    text-align: center;
  }
  .w_myShoppingCar_message_detailsTwo td:nth-child(2){
    width: 15%;
    text-align: left;
  }
  .w_myShoppingCar_message_detailsTwo td:nth-child(2) span{
    color:#707070;
    display: inline-block;
    vertical-align: top;
    margin-top: 30px;
    margin-left:10px;
  }
  .w_myShoppingCar_message_detailsTwo td:nth-child(3){
    width: 15%;
    text-align: center;
    color: #666;
  }
  .w_myShoppingCar_message_detailsTwo td:nth-child(4){
    width: 15%;
    text-align: center;
  }
  .w_myShoppingCar_message_detailsTwo td:nth-child(4) a{
    width: 30px;
    height: 30px;
    display: inline-block;
    text-align: center;
    line-height: 25px;
    background-color: #F2F2F2;
    border: solid 1px #ddd;
    font-size: 25px;
    text-decoration: none;
    color: #666;
  }
  .w_myShoppingCar_message_detailsTwo td:nth-child(4) span{
    font-size: 18px;
    display: inline-block;
    padding: 0 10px;
  }
  .w_myShoppingCar_message_detailsTwo td:nth-child(5){
    width: 25%;
    text-align: center;
    color: #666;
  }
  .w_myShoppingCar_message_detailsTwo td:nth-child(6){
    width: 15%;
    text-align: center;
    color: #666;
  }
  .w_myShoppingCar_message_detailsTwo td:nth-child(7){
    width: 5%;
    text-align: center;
  }
  .w_myShoppingCar_message_detailsTwo td:nth-child(7) a{
    text-decoration: none;
    color: #000;
  }
  .w_myShoppingCar_message_detailsLast td{
    text-align: right;
    padding:20px 30px;
  }
  .w_myShoppingCar_message_detailsLast td span{
    font-size: 20px;
  }
  .w_myShoppingCar_message_detailsLast td span:nth-child(2){
    color: #FF5757;
  }
  .w_myShoppingCar_operation{
    overflow: hidden;
    padding: 40px 0 40px 10px;
  }
  .w_myShoppingCar_operation_left{
    float: left;
  }
  .w_myShoppingCar_operation_left a{
    color: #498e3d;
    text-decoration: none;
    margin-right: 30px;
  }
  .w_myShoppingCar_operation_right{
    float: right;
  }
  .w_myShoppingCar_operation_right span{
    margin-right: 15px;
    font-size: 18px;
  }
  .w_myShoppingCar_operation_right a{
    text-decoration: none;
    color: white;
    background-color: #f08200;
    padding:5px 20px;
    border-radius: 5px;
  }
</style>
