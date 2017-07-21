<template>
  <div class="orderSuccess">
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
    <div class="w_orderSuccess_message">
      <div class="w_orderSuccess_message_title">
        <img src="./img/形状1.png" alt="">
        <h3>订单已提交,请于24小时内完成支付  <strong>(逾期订单将会被取消)</strong></h3>
      </div>
      <div class="w_orderSuccess_site">
        <span><img src="./img/location.png" alt=""></span>
        <span>送货至: XXX 联系电话12345678911</span>
      </div>
      <h4 class="w_orderSuccess_money"><span>应付金额:<strong>13</strong>(在线支付)</span><span>订单号641215405640</span></h4>
      <h4 class="w_orderSuccess_platform">支付平台</h4>
      <div class="w_orderSuccess_payment">
        <span><input type="radio"><img src="./img/成功提交订单1_03.png" alt="" @click="click1"></span>
        <span><input type="radio"><img src="./img/成功提交订单2_03.png" alt="" @click="click2"></span>
        <span><input type="radio"><img src="./img/成功提交订单_03.png" alt="" @click="click3"></span>
      </div>
      <div class="w_orderSuccess_code">
        <div class="w_orderSuccess_code_alipay"v-show="flag1">
          <div class="w_orderSuccess_code_alipay_left">
            <h4>使用支付宝支付</h4>
            <img src="./img/FRONT.png" alt="">
            <a href="javascript:void(0)">立即支付</a>
          </div>
          <div class="w_orderSuccess_code_alipay_right">
            <h4>支付宝扫一扫支付</h4>
            <img src="./img/图层84.png" alt="">
          </div>
        </div>
        <div class="w_orderSuccess_code_weixin"v-show="flag2">
            <img src="./img/图层86.png" alt="">
          <div class="w_orderSuccess_code_weixin_right">
            <h4>使用微信扫一扫付款</h4>
            <img src="./img/图层84.png" alt="">
          </div>
        </div>
        <div class="w_orderSuccess_code_zaixian"v-show="flag3">
           <h4>使用余额支付</h4>
            <img src="./img/FRONT.png" alt="">
            <a href="javascript:void(0)">立即支付</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

    export default {
        name: 'orderSuccess',
        data(){
            return {
                flag1:true,
                flag2:false,
                flag3:false,
            }
        },
        components: {},
        methods:{
          click1:function(){
            this.flag1=true;
            this.flag2=false;
            this.flag3=false;
          },
          click2:function(){
            this.flag1=false;
            this.flag2=true;
            this.flag3=false;
          },
          click3:function(){
            this.flag1=false;
            this.flag2=false;
            this.flag3=true;
          },
        }
    }
</script>

<style>
  .orderSuccess{
    padding-bottom:50px;
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
  .w_myShoppingCar_logo_right span:nth-child(5){
    color: #F08200;
  }
  .w_orderSuccess_message{
    width: 1280px;
    margin: 0 auto;
  }
  .w_orderSuccess_message_title{
    margin: 80px 0 50px 0;
    text-align: center;
  }
  .w_orderSuccess_message_title img{
    margin-bottom:50px;
  }
  .w_orderSuccess_message_title h3{
    color: #666;
    font-size: 24px;
  }
  .w_orderSuccess_message_title h3 strong{
    color: #F08200;
  }
  .w_orderSuccess_site{
    background-color: #f4fff2;
    border:1px solid #ddd;
    line-height: 40px;
    color: #666;
  }
  .w_orderSuccess_site img{
    margin: 0 10px;
  }
  .w_orderSuccess_money{
    overflow: hidden;
    padding:40px 0;
  }
  .w_orderSuccess_money span:nth-child(1){
    float:left;
    font-size:18px;
    font-weight: 400;
    color: #666;
  }
  .w_orderSuccess_money span:nth-child(1) strong{
    font-size: 20px;
    color: red;
    margin: 0 10px;
  }
  .w_orderSuccess_money span:nth-child(2){
    float:right;
    font-size: 16px;
    color: #666;
  }
  .w_orderSuccess_platform{
    color: #666;
    font-size: 18px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    font-weight: 400;
  }
  .w_orderSuccess_payment{
    padding:40px 0;
    overflow: hidden;
  }
  .w_orderSuccess_payment span{
    display: inline-block;
    margin-right: 40px;
    cursor: pointer;
  }
  .w_orderSuccess_payment input{
    float: left;
    margin-top: 15px;
    width: 20px;
  }
  .w_orderSuccess_payment img{
    float: left;
  }
  .w_orderSuccess_code{
    border:1px solid #ddd;
    padding: 60px 250px;
  }
  .w_orderSuccess_code_alipay{
    text-align: center;
    /*width: 375px;*/
    overflow: hidden;
  }
  .w_orderSuccess_code_alipay_left{
    float: left;
    padding-right:80px;
    margin-left:70px;
    border-right: 1px solid #ddd;
  }
  .w_orderSuccess_code_alipay_right{
    float: right;
    margin-right:165px;
  }
  .w_orderSuccess_code_alipay h4{
    color:#666;
    font-weight: 500;
    font-size: 18px;
  }
  .w_orderSuccess_code_alipay img{
    padding:40px 0;
  }
  .w_orderSuccess_code_alipay a{
    display: block;
    text-decoration: none;
    color:white;
    background-color:#f08200;
    width:150px;
    margin: 0 auto;
    padding:10px 0;
    border-radius:10px;
    font-size: 18px;
  }
  .w_orderSuccess_code_weixin{
    overflow: hidden;
  }
  .w_orderSuccess_code_weixin img:nth-child(1){
    border-right: 1px solid #ddd;
  }
  .w_orderSuccess_code_weixin_right{
    display: inline-block;
    float: right;
    margin-right:160px;
    margin-top: 20px;
  }
  .w_orderSuccess_code_weixin_right h4{
    margin-bottom: 30px;
    font-size: 20px;
    color: #666;
    text-align: center;
  }


  .w_orderSuccess_code_zaixian{
    text-align: center;
    width: 375px;
  }
  .w_orderSuccess_code_zaixian h4{
    color:#666;
    font-weight: 500;
    font-size: 18px;
  }
  .w_orderSuccess_code_zaixian img{
    padding:40px 0;
  }
  .w_orderSuccess_code_zaixian a{
    display: block;
    text-decoration: none;
    color:white;
    background-color:#f08200;
    width:150px;
    margin: 0 auto;
    padding:10px 0;
    border-radius:10px;
    font-size: 18px;
  }
</style>
