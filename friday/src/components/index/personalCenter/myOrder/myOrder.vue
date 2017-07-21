<template>
  <div class="myOreder">
      <h3>我的订单</h3>
    <div class="w_myOreder_title">
      <a href="">全部</a>
      <span>|</span>
      <a href="">代付款</a>
      <span>|</span>
      <a href="">待发货</a>
      <span>|</span>
      <a href="">待收货</a>
      <span>|</span>
      <a href="">待评价</a>
      <span>|</span>
      <a href="">退款/售后</a>
      <span>|</span>
      <a href="">已完成/关闭</a>
      <a href="">订单回收站</a>
    </div>
    <div class="w_myOreder_message">
      <img src="./img/形状20.png" alt="">
      <strong>您还没有订单哦!!!!</strong>
      <a href="">去首页看看</a>
    </div>
  </div>
</template>

<script>

    export default {
        name: 'myOreder',
        data(){
            return {}
        },
        components: {}
    }
</script>

<style>
  a{
    text-decoration: none;
  }
  .myOreder{
    border:1px solid #e7e7e7;
    float: left;
    width: 1085px;
  }
  .myOreder h3{
    padding:20px 0 20px 20px;
    color: #666;
    border-bottom: 1px solid #dddddd;
  }
  .w_myOreder_title{
    padding:20px;
  }
  .w_myOreder_title a{
    margin-right:25px;
    padding:5px 10px;
    color: #666;
    font-size:14px;
  }
  .w_myOreder_title a:hover{
    color: whitesmoke;
    background-color:#F08200 ;
  }
  .w_myOreder_title a:nth-child(1){
    color: whitesmoke;
    background-color:#F08200 ;
  }
  .w_myOreder_title span{
    padding-right:20px;
    color: #666;
  }
  .w_myOreder_title a:last-child{
    margin-left:60px;
    text-decoration: underline;
    color: #4B943D;
  }
  .w_myOreder_message{
    text-align: center;
    padding:196px 0 196px 0;
  }
  .w_myOreder_message strong{
    vertical-align: top;
    margin-left: 20px;
    color: #666;
    font-size: 20px;
  }
  .w_myOreder_message a{
    margin-left:-160px;
    background-color: #F08200;
    color: #ffffff;
    font-size: 20px;
    border-radius: 5px;
    padding:5px 15px;
  }
</style>
