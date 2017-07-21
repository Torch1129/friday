<template>
  <div class="w_myWallet">
    <div class="w_myWallet_title">
      <h3>账户余额:  <span>¥50.0</span></h3>
    </div>
    <div class="w_myWallet_recharge">
      <p>请选择充值金额:</p>
      <span>500元</span>
      <span>1000元</span>
      <span>2000元</span>
      <div class="w_Name">
        <a href="javascript:void(0)"><strong>w-kkk</strong></a>
        <a href="javascript:void(0)"><strong>phy</strong></a>
        <a href="javascript:void(0)"><strong>cjs</strong></a>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>

    export default {
        name: '',
        data(){
            return {}
        },
        components: {}
    }
</script>

<style>
  .w_myWallet{
    border:1px solid #e7e7e7;
    float: left;
    width: 1085px;
  }
  .w_myWallet_title{
    padding:20px 0 20px 20px;
    color: #666;
    border-bottom: 1px solid #dddddd;
  }
  .w_myWallet_title span{
    color: #F08200;
  }
  .w_myWallet_recharge{
    padding:20px 0 0px 20px;
  }
  .w_myWallet_recharge p{
    font-size: 20px;
    margin-bottom: 30px;
  }
  .w_myWallet_recharge span{
    background-color:white;
    border: 1px solid #e9e9e9;
    padding:5px 10px;
    margin-right: 10px;
  }
  .w_myWallet_recharge span:hover{
    background-color: #f4fff2;
  }
  .w_Name{
    padding:105px 0 300px 300px;
  }
  .w_Name a{
    text-decoration: none;
    color: #000;
  }
  .w_Name strong{
    font-size:40px;
    font-weight:100;
    margin-right:30px;
  }
</style>
