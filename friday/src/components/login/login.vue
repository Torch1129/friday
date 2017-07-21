<template>
    <div class="login">
      <div id="c_content">
        <div id="c_top">
          <router-link to="/index"><img src="./img1/logo.png" class="c_logo" /></router-link>
          <span v-show="isD">会员登录</span><span v-show="isE">密码重置</span>
        </div>
        <img src="./img1/logon_bg.png" class="c_logon_bg" />
        <div id="c_out">
          <div id="c_mid">
            <h1>礼拜五会员</h1>
            <h2>免费注册</h2>
          </div>
        </div>
        <div id="c_logon">

          <div class="c_logon_content" v-if="isA">
            <span>登录</span>
            <img src="./img1/iPhone.png" class="c_phone" @click="click1()"/><span>手机验证码登录</span>
            <input type="text" v-model="phone" v-on:blur="phonereg()" placeholder="请输入手机号" />
            <p v-bind:style="{opacity:num1}"><span>!</span>请输入手机号</p>
            <input type="password" v-model="password" v-on:blur="passWord()" placeholder="请输入密码" />
            <p v-bind:style="{opacity:num2}"><span>!</span>请输入密码</p>
            <img src="./img1/pwd.png" class="c_pwd" />
            <input type="text" name="" placeholder="验证码" />
            <img src="./img1/验证码.png" class="c_yanzheng" />
            <span>看不清,换一张</span>
            <div id="c_forget">
              <input type="checkbox" name="" value="" /><span>自动登录</span>
              <span @click="click3()">忘记密码?</span>
            </div>
            <button id="c_btn1">登录</button>
            <button id="c_btn2">会员注册</button>
            <strong class="c_tishi"><span>提示:</span>未注册的用户将直接注册为礼拜五用户</strong>
          </div>

          <div class="c_logon_content1" v-show="isB">
            <span>登录</span>
            <img src="./img1/user-icon.png" class="c_phone" @click="click2()"/><span>账号登录</span>
            <input type="text" v-model="phone_yanzheng" v-on:blur="yanzheng()" placeholder="请输入手机号" />
            <p v-bind:style="{opacity:num3}"><span>!</span>请输入手机号</p>
            <input type="text" name="" placeholder="验证码" />
            <img src="./img1/验证码.png" class="c_yanzheng" />
            <span>看不清,换一张</span>
            <input type="text" placeholder="请输入手机验证码">
            <span>手机验证码</span>
            <div id="c_forget1">
              <input type="checkbox" name="" value="" /><span>自动登录</span>
              <span @click="click4()">忘记密码?</span>
            </div>
            <button id="c_btn3">登录</button>
            <button id="c_btn4">会员注册</button>
            <strong class="c_tishi1"><span>提示:</span>未注册的用户将直接注册为礼拜五用户</strong>
          </div>

          <div class="c_forgetPassword" v-show="isC">
            <p>重置密码</p>
            <input type="text" v-model="phone_forget" v-on:blur="forget()" placeholder="请输入手机号">
            <p v-bind:style="{opacity:num4}"><span>!</span>请输入手机号</p>
            <input type="text" name="" placeholder="验证码" />
            <img src="./img1/验证码.png" class="c_yanzheng" />
            <span>看不清,换一张</span>
            <input type="password" v-model="password_forget" v-on:blur="forgetPassword()" placeholder="请输入密码" />
            <p v-bind:style="{opacity:num5}"><span>!</span>请输入密码</p>
            <img src="./img1/pwd.png" class="c_pwd" />
            <input type="password" v-model="password_forget_aga" v-on:blur="forgetPassword_aga()" placeholder="请再次输入密码" />
            <p v-bind:style="{opacity:num6}"><span>!</span>请再次输入密码</p>
            <input type="text" placeholder="请输入手机验证码">
            <span>手机验证码</span>
            <button id="btn5">提交</button>

          </div>


        </div>

      </div>

    </div>
</template>

<script>
    import header_nav from '../header_nav/header_nav.vue'
    export default {
        name: 'login',
        data(){
            return {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                phoneReg: /^1[3|5|7|8]\d{9}$/,
                phone: "",
                phone_yanzheng:"",
                password: "",
                phone_forget:"",
                password_forget:"",
                password_forget_aga:"",
                isA:true,
                isB:false,
                isC:false,
                isD : true,
                isE : false,


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
        yanzheng:function () {
          if(this.phoneReg.test(this.phone_yanzheng)){
            this.num3 = 0;
          }else{
            this.num3 = 1;
          }
        },
        forget:function () {
          if(this.phoneReg.test(this.phone_forget)){
            this.num4 = 0;
          }else{
            this.num4 = 1;
          }
        },
        forgetPassword:function () {
          if(!!this.password_forget.trim()){
            this.num5 = 0;
          }else{
            this.num5 = 1;
          }
        },
        forgetPassword_aga:function () {
          if(!!this.password_forget_aga.trim()){
            this.num6 = 0;
          }else{
            this.num6 = 1;
          }
        },
        passWord:function(){
          if(!!this.password.trim()){
              console.log(!!this.password.trim())
            this.num2 = 0;
          }else{
            this.num2 = 1;
          }
        },
        click1:function(){
          this.isA = false;
          this.isB = true;
          this.isC = false;
        },
        click2:function(){
          this.isA = true;
          this.isB = false;
          this.isC = false;
        },
        click3:function(){
          this.isA = false;
          this.isB = false;
          this.isC = true;
          this.isD = false;
          this.isE = true;
        },
        click4:function(){
          this.isA = false;
          this.isB = false;
          this.isC = true;
          this.isD = false;
          this.isE = true;
        },
      },

        components: {
          header_nav
        }
    }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration:none;
  }
  .login{
    width: 100%;
  }
  /*忘记密码*/
  #c_logon .c_forgetPassword{
    /*border: 1px solid;*/
    width: 80%;
    margin:0 auto;
    padding-top: 30px;
  }
  .c_forgetPassword p{
    font-size: 17px;
    color: rgb(106,102,102);
  }
  .c_forgetPassword input{
    height: 30px;
    font-size: 15px;
    padding-left: 5px;
    display: inline-block;
    background: rgb(249, 249, 249);
    border: 1px solid rgb(211, 211, 211);
    font-weight: 200;
  }
  .c_forgetPassword input:nth-child(2){
    width:98%;
    margin-top: 20px;
  }
  .c_forgetPassword p:nth-child(3) {
    line-height: 30px;
    font-size: 13px;
    color: red;
  }

  .c_forgetPassword p:nth-child(3) span {
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
  .c_forgetPassword input:nth-child(4) {
    width: 40%;
  }

  .c_forgetPassword .c_yanzheng {
    vertical-align: top;
  }

  .c_forgetPassword span:nth-child(6) {
    color: red;
    font-size: 13px;
  }
  .c_forgetPassword input:nth-child(7){
    width:98%;
    margin-top: 20px;
  }
  .c_forgetPassword p:nth-child(8) {
    line-height: 30px;
    font-size: 13px;
    color: red;
  }

  .c_forgetPassword p:nth-child(8) span {
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
  .c_forgetPassword .c_pwd{
    position: absolute;
    top: 198px;
    right: 50px;
    width: 25px;
  }
  .c_forgetPassword input:nth-child(10){
    width:98%;
  }
  .c_forgetPassword p:nth-child(11) {
    line-height: 30px;
    font-size: 13px;
    color: red;
  }
  .c_forgetPassword p:nth-child(11) span {
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

  .c_forgetPassword input:nth-child(12) {
    width: 98%;
  }
  .c_forgetPassword span:nth-child(13) {
    color: white;
    position: absolute;
    display: inline-block;
    padding:5px 10px;
    right: 40px;
    top:316px;
    background:rgb(100,146,66);
    font-size: 13px;
  }
  #btn5{
    width: 100%;
    margin-top: 60px;
    height: 40px;
    border:none;
    outline:none;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    background: rgb(210,99,26);
  }

  /*登录页面*/
  #c_content {
    width: 100%;
    position: relative;
  }

  #c_top {
    width: 1280px;
    margin: 0 auto;
    height: 130px;
  }

  .c_logo {
    vertical-align: bottom;
    padding-top: 32px;
    float: left;
  }
  .c_logon_bg{
    vertical-align: bottom;
    width: 100%;
    height: 500px;
  }

  #c_top span {
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

  #c_logon {
    border-top: 1px solid rgb(221,221,221);
    border-bottom: 1px solid rgb(221,221,221);
    position: absolute;
    height: 500px;
    width: 390px;
    background: white;
    top: 130px;
    left: 1215px;
  }

  .c_logon_content {
    width: 80%;
    margin: 0 auto;
    padding-top: 50px;
    overflow: hidden;
  }

  .c_phone {
    float: right;
    vertical-align: middle;
  }

  .c_logon_content span:nth-child(1) {
    color: rgb(102, 102, 102);
  }

  .c_logon_content span:nth-child(3) {
    float: right;
    padding-right: 10px;
    line-height: 20px;
    font-size: 14px;
    color: rgb(90, 142, 70);
  }

  .c_logon_content input {
    clear: both;
    height: 30px;
    font-size: 15px;
    padding-left: 5px;
    display: inline-block;
    background: rgb(249, 249, 249);
    border: 1px solid rgb(211, 211, 211);
    font-weight: 200;
  }

  .c_logon_content input:nth-child(4) {
    margin-top: 15px;
    width: 97%;
  }

  .c_logon_content input:nth-child(6) {
    /*margin-top: 30px;*/
    width: 97%;
  }

  .c_pwd {
    position: absolute;
    top: 158px;
    right: 50px;
    width: 25px;
  }

  .c_logon_content p {
    line-height: 30px;
    font-size: 13px;
    color: red;
  }

  .c_logon_content p span {
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

  .c_logon_content input:nth-child(9) {
    width: 40%;
  }

  .c_yanzheng {
    vertical-align: top;
  }

  .c_logon_content span:nth-child(11) {
    color: red;
    font-size: 13px;
  }

  #c_forget {
    margin-top: 30px;
  }

  #c_forget input:nth-child(1) {
    vertical-align: middle;
  }

  #c_forget span:nth-child(2) {
    font-size: 13px;
    padding-left: 10px;

  }

  #c_forget span:nth-child(3) {
    font-size: 13px;
    float: right;
    color: red;
    padding-top: 12px;
    cursor:pointer;
  }


  .c_logon_content button{
    border: 1px solid;
    width: 140px;
    font-size: 15px;
    color: white;
    border-radius: 5px;
    display: inline-block;
    height: 45px;
    margin-top: 10px;
    outline:none;
    border:none;
  }
  #c_btn1{
    float: left;
    background: #ea5b0c;
  }
  #c_btn2{
    background: rgb(100,146,66);
    float: right;
  }
  .c_logon_content .c_tishi{
    clear: both;
    display: block;
    font-size: 14px;
    padding-top: 20px;

  }
  .c_logon_content .c_tishi span{
    color: black;
    padding-right: 5px;
  }

  /*账号登录*/
  #c_forget1 {
    margin-top: 30px;
  }

  #c_forget1 input:nth-child(1) {
    vertical-align: middle;
  }

  #c_forget1 span:nth-child(2) {
    font-size: 13px;
    padding-left: 10px;

  }

  #c_forget1 span:nth-child(3) {
    font-size: 13px;
    float: right;
    color: red;
    padding-top: 12px;
    cursor:pointer;
  }
  #c_btn3{
    background: rgb(210,99,26);

    float: left;
  }
  #c_btn4{
    background: rgb(100,146,66);
    float: right;
    /*margin-top: 10px;*/
  }
  .c_logon_content1 {
    width: 80%;
    margin: 0 auto;
    padding-top: 50px;
    overflow: hidden;
  }

  .c_logon_content1 span:nth-child(1) {
    color: rgb(102, 102, 102);
  }

  .c_logon_content1 span:nth-child(3) {
    float: right;
    padding-right: 10px;
    line-height: 20px;
    font-size: 14px;
    color: rgb(90, 142, 70);
  }

  .c_logon_content1 input {
    clear: both;
    height: 30px;
    font-size: 15px;
    padding-left: 5px;
    display: inline-block;
    background: rgb(249, 249, 249);
    border: 1px solid rgb(211, 211, 211);
    font-weight: 200;
  }

  .c_logon_content1 input:nth-child(4) {
    margin-top: 15px;
    width: 97%;
  }

  .c_logon_content1 input:nth-child(6) {
    /*margin-top: 30px;*/
    width: 97%;
  }
  .c_logon_content1 p {
    line-height: 30px;
    font-size: 13px;
    color: red;
  }

  .c_logon_content1 p span {
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

  .c_logon_content1 input:nth-child(6) {
    width: 40%;

  }

  .c_logon_content1 span:nth-child(8) {
    color: red;
    font-size: 13px;
  }
  /*验证码*/

  .c_logon_content1 input:nth-child(9) {
    width: 97%;
    margin-top: 30px;
  }
  .c_logon_content1 span:nth-child(10) {
    color: white;
    position: absolute;
    display: inline-block;
    padding:5px 10px;
    right: 43px;
    top:215px;
    background:rgb(100,146,66);
    font-size: 13px;
  }


  .c_logon_content1 button{
    border: 1px solid;
    width: 140px;
    font-size: 15px;
    color: white;
    border-radius: 5px;
    display: inline-block;
    height: 45px;
    margin-top: 10px;
    outline:none;
    border:none;
  }

  .c_logon_content1 .c_tishi1{
    clear: both;
    display: block;
    font-size: 14px;
    padding-top: 20px;

  }
  .c_logon_content1 .c_tishi1 span{
    color: black;
    padding-right: 5px;
  }


</style>
