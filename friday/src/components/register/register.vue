<template>
  <div class="register">
    <div id="c_content">
      <div id="c_head">
        <router-link to="/index"><img src="./img1/logo.png" class="c_logo" /></router-link>
        <span>会员注册</span>
      </div>
      <img src="./img1/logon_bg.png" class="c_register_bg" />
      <div id="c_out">
        <div id="c_mid">
          <h1>礼拜五会员</h1>
          <h2>免费注册</h2>
        </div>
      </div>
      <div id="c_register">
        <div class="c_register_content">
          <p>注册</p>
          <input type="text" v-model="phone" v-on:blur="phonereg()" placeholder="请输入手机号" />
          <p v-bind:style="{opacity:num1}"><span>!</span>请输入手机号</p>
          <input type="password" v-model="password" v-on:blur="passWord()" placeholder="请输入密码(6-20位号码字符)" />
          <p v-bind:style="{opacity:num2}"><span>!</span>请输入密码</p>
          <input type="text" name="" placeholder="验证码" />
          <img src="./img1/验证码.png" class="c_yan" />
          <span>看不清,换一张</span>
          <input type="password" v-model="yanzheng" v-on:blur="yanZheng()" placeholder="请输入手机验证码" />
          <p v-bind:style="{opacity:num3}"><span>!</span>请输入短信验证码</p>
          <span>手机验证码</span>
          <label><input type="radio" name="" value="" style="vertical-align:middle; margin-top:-2px; margin-bottom:1px;"/><span>我已阅读并同意《礼拜五用户使用协议》</span></label>
          <button id="c_btn1">注册</button>
          <button id="c_btn2">登录</button>
        </div>
      </div>

  </div>
  </div>
</template>

<script>

  export default {
    name: 'register',
    data(){
        return{
          num1:0,
          num2:0,
          num3:0,
          phone:"",
          password:"",
          yanzheng:"",
          phoneReg: /^1[3|5|7|8]\d{9}$/,
          passwordReg:/^[0-9a-zA-Z!@#$^]{6,18}$/,
        }
    },
    methods:{
      phonereg:function () {
        if(this.phoneReg.test(this.phone)){
          this.num1 = 0;
        }else{
          this.num1 = 1;
        }
      },
      passWord:function(){
          if(this.passwordReg.test(this.password)){
            this.num2 = 0;
          }else{
            this.num2 = 1;
          }
      },
      yanZheng:function(){
        if(!!this.password.trim()){
          console.log(!!this.yanzheng.trim())
          this.num3 = 0;
        }else{
          this.num3 = 1;
        }
      },
    },
    components: {
    }
  }
</script>

<style scoped>
  /*注册页面*/
  * {
    margin: 0;
    padding: 0;
  }
  #c_content {
    width: 100%;
    position: relative;
  }

  #c_head{
    width: 1280px;
    margin: 0 auto;
    height: 130px;
  }

  .c_logo {
    vertical-align: bottom;
    padding-top: 32px;
    float: left;
  }
  .c_register_bg{
    vertical-align: bottom;
    width: 100%;
    height: 500px;
  }

  #c_head span {
    padding-left: 30px;
    border-left: 1px solid #ddd;
    line-height: 30px;
    font-size: 20px;
    display: inline-block;
    margin-left: 30px;
    margin-top: 60px;
    color: #666;
  }

  #c_out {
    position: absolute;
    width: 490px;
    height: 220px;
    border: 2px solid white;
    top: 270px;
    left: 540px;
  }

  #c_mid {
    margin: 8px auto;
    border: 2px solid white;
    width: 470px;
    height: 200px;
    color: white;
    text-align: center;
  }

  #c_mid h1 {
    font-size: 50px;
    padding-top: 30px;
    text-shadow: 0 3px 2px gray;
  }

  #c_mid h2 {
    font-size: 50px;
    letter-spacing: 50px;
    padding-top: 10px;
    margin-left: 45px;
    text-shadow: 0 3px 2px gray;
  }

  #c_register {
    border-top: 1px solid rgb(221,221,221);
    border-bottom: 1px solid rgb(221,221,221);
    position: absolute;
    height: 500px;
    width: 390px;
    background: white;
    top: 130px;
    right: 300px;
  }
  .c_register_content{
    width: 80%;
    margin: 0 auto;
  }
  .c_register_content p:nth-child(1){
    padding-top: 30px;
  }
  .c_register_content input{
    height: 30px;
    font-size: 15px;
    padding-left: 5px;
    display: inline-block;
    background: rgb(249, 249, 249);
    border: 1px solid rgb(211, 211, 211);
    font-weight: 200;
  }
  .c_register_content input:nth-child(2){
    width: 98%;
    margin-top: 15px;
  }
  .c_register_content input:nth-child(4){
    width: 98%;
  }
  .c_register_content input:nth-child(6){
    width: 40%;
    /*margin-top: 20px;*/
  }
  .c_register_content input:nth-child(9){
    width: 98%;
    margin-top: 30px;
  }
  .c_yan{
    vertical-align: top;
    height: 28px;
    padding-left: 10px;
    padding-right:10px;
  }
  .c_register_content p:nth-child(3) {
    line-height: 30px;
    font-size: 13px;
    color: red;
  }

  .c_register_content p:nth-child(3) span {
    /*border: 1px solid;*/
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
    width: 12px;
    height: 12px;
    color: white !important;
    line-height: 12px;
    text-align: center;
    background: rgb(194, 56, 50);
  }
  .c_register_content p:nth-child(5) {
     line-height: 30px;
     font-size: 13px;
     color: red;
   }

  .c_register_content p:nth-child(5) span {
    /*border: 1px solid;*/
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
    width: 12px;
    height: 12px;
    color: white !important;
    line-height: 12px;
    text-align: center;
    background: rgb(194, 56, 50);
  }

  .c_register_content p:nth-child(10) {
    line-height: 30px;
    font-size: 13px;
    color: red;
  }

  .c_register_content p:nth-child(10) span {
    /*border: 1px solid;*/
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
    width: 12px;
    height: 12px;
    color: white !important;
    line-height: 12px;
    text-align: center;
    background: rgb(194, 56, 50);
  }
  .c_register_content span:nth-child(8) {
    color: red;
    font-size: 13px;
  }
  .c_register_content span:nth-child(11) {
    color: white;
    position: absolute;
    display: inline-block;
    padding:5px 10px;
    right: 40px;
    top:255px;
    background:#4b943d;
    font-size: 13px;
  }
  .c_register_content label:nth-child(12){
    font-size: 13px;
    margin-top: 15px;
    display: block;
  }
  .c_register_content label:nth-child(12) span{
    padding-left: 5px;
  }
  .c_register_content button{
    border: 1px solid;
    width: 140px;
    font-size: 15px;
    color: white;
    border-radius: 5px;
    display: inline-block;
    height: 45px;
    margin-top: 30px;
    outline:none;
    border:none;
  }
  #c_btn1{
    float: left;
    background: #ea5b0c;
  }
  #c_btn2{
    background: #4b943d;
    float: right;
  }

</style>
