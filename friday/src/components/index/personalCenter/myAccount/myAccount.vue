<template>
  <div class="myAccount">
      <div class="w_myAccount_top">
        <p>
        <a href=""><img src="./img/头像.png" alt=""></a>
        </p>
        <p>
        <strong>您好,<em>136****1313</em></strong>
        </p>
        <p><span>当前积分</span><span>12455</span></p>
        <p><span>我的钱包</span><span>¥12564.0</span></p>
        <p><a href="">充值有礼>>></a><a href="">充值卡兑换>>></a></p>
      </div>
      <div class="w_myAccount_bom">
        <a href=""><img src="./img/背景.png" alt="" class="w_myAccount_bom_img1"></a>
        <a href=""><img src="./img/我的账户_03.png" alt="" class="w_myAccount_bom_img2"></a>
      </div>
  </div>
</template>

<script>

    export default {
        name: 'myAccount',
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
  .myAccount{
    float: left;
    overflow: hidden;
  }
  .w_myAccount_top{
    background-color: #f4fff2;
    width: 1083px;
    border:1px solid #e7e7e7;
    padding:40px 0;
    height: 144px;
    margin-bottom: 20px;
  }
  .w_myAccount_top p{
    display: inline-block;
  }
  .w_myAccount_top p:nth-child(1){
    margin-left: 40px;
    float: left;
  }
  .w_myAccount_top p:nth-child(2){
    float: left;
    margin-top:50px;
    margin-left: 40px;
    margin-right: 220px;
  }
  .w_myAccount_top p em{
    font-style: normal;
    color: #e85e35;
  }
  .w_myAccount_top p:nth-child(3){
    float: left;
    margin-top:37px;
    margin-right: 80px;
  }
  .w_myAccount_top p:nth-child(4){
    float: left;
    margin-top: 37px;
    margin-right: 80px;
  }
  .w_myAccount_top p:nth-child(5){
    float: left;
    margin-top: 37px;
  }
  .w_myAccount_top p a:nth-child(1){
    color:#4b943d;
    margin-bottom:20px;
  }
  .w_myAccount_top p a:nth-child(2){
    color: #e85e35;
  }
  .w_myAccount_top p span{
    display: block;
  }
  .w_myAccount_top p span:nth-child(2){
    color:#e85e35;
    margin-left:5px;
    margin-top: 20px;
  }
  .w_myAccount_top p a{
    display: block;
  }
  .w_myAccount_bom{
    position: relative;
  }
  .w_myAccount_bom_img2{
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
</style>
