<template>
  <div class="revisePassword">
    <div id="c_reviseContent">
      <h4>修改密码</h4>
      <div id="c_reviseMid">
        <div class="c_revise_content">
          <input type="text" v-model="phone" v-on:blur="phonereg()" placeholder="请输入手机号" />
          <p v-bind:style="{opacity:num1}"><span>!</span>请输入手机号</p>
          <input type="password" v-model="password" v-on:blur="passWord()" placeholder="请输入密码(6-20位号码字符)" />
          <p v-bind:style="{opacity:num2}"><span>!</span>请输入密码</p>
          <input type="text" name="" placeholder="验证码" />
          <img src="img/yanzhengma.png" class="c_yan" />
          <span>看不清,换一张</span>
          <input type="password" v-model="yanzheng" v-on:blur="yanZheng()" placeholder="请输入手机验证码" />
          <p v-bind:style="{opacity:num3}"><span>!</span>请输入短信验证码</p>
          <span>手机验证码</span>
          <button id="c_reviseBtn">提交修改</button>
        </div>

        <div class="c_succeed">
          <strong><span class="c_tangle"></span></strong>
          <span>恭喜您修改成功</span>
        </div>

      </div>
    </div>

  </div>

</template>

<script>

    export default {
        name: '',
        data(){
            return {
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
        components: {}
    }
</script>

<style scoped>

  * {
    margin: 0;
    padding: 0;
  }

  #c_reviseContent {
    width: 1085px;
    height: 628px;
    border: 1px solid #e9e9e9;
    float: left;
  }
  #c_reviseContent h4 {
    border-bottom: 1px solid #e9e9e9;
    font-size: 20px;
    color: #323333;
    line-height: 60px;
    padding-left: 20px;
    font-weight:200;
  }

  /*修改密码*/

  .c_revise_content{
    width: 315px;
    margin-left:40px;
    margin-top:40px;
    /*border: 1px solid;*/
    position: relative;
    display: inline-block;
  }
  .c_revise_content input{
    height: 45px;
    width: 300px;
    font-size: 18px;
    padding-left: 10px;
    display: inline-block;
    background: #f9f9f9;
    border: 1px solid #d3d3d3;
    font-weight: 200;
  }


  .c_revise_content input:nth-child(5){
    width: 105px;
  }
  .c_revise_content input:nth-child(8){

    margin-top: 30px;
  }
  .c_yan{
    vertical-align: middle;
    height: 28px;
    width: 80px;
    height: 35px;
    padding-left: 5px;
    padding-right:5px;
  }
  .c_revise_content p:nth-child(2) {
    line-height: 30px;
    font-size: 13px;
    color: red;
  }

  .c_revise_content p:nth-child(2) span {

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
  .c_revise_content p:nth-child(4) {
    line-height: 30px;
    font-size: 13px;
    color: red;
  }

  .c_revise_content p:nth-child(4) span {
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

  .c_revise_content p:nth-child(9) {
    line-height: 30px;
    font-size: 13px;
    color: red;
  }

  .c_revise_content p:nth-child(9) span {
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

  .c_revise_content span:nth-child(10) {
    color: white;
    position: absolute;
    display: inline-block;
    width: 100px;
    height: 35px;
    right: 10px;
    top:237px;
    text-align: center;
    line-height: 35px;
    background:#4b943d;
    font-size: 13px;
  }
  .c_revise_content span:nth-child(7) {
    color: #4c9b50;
    display: inline-block;
    line-height: 35px;
    font-size: 14px;
  }

  .c_revise_content button{
    border: 1px solid;
    width: 150px;
    font-size: 20px;
    color: white;
    border-radius: 5px;
    display: inline-block;
    height: 50px;
    background: #f78327;
    margin-top: 30px;
    outline:none;
    border:none;
  }

  /*提示成功*/
  .c_succeed{
    float: right;
    width: 455px;
    height: 185px;
    background: #d9d9d9;
    border-radius: 10px;
    margin-right: 100px;
    margin-top: 150px;
  }
  .c_succeed strong{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #f78327;
    display: inline-block;
    position: relative;
    margin-left: 115px;
    vertical-align: middle;
  }
  .c_succeed strong .c_tangle{
    width: 20px;
    height: 15px;
    border-bottom: 5px solid #d9d9d9;
    border-left: 5px solid #d9d9d9;
    display: inline-block;
    position: absolute;
    left: 10px;
    top: 10px;
    transform: rotate(-45deg);
  }
  .c_succeed>span{
    font-size: 25px;
    color: #f78327;
    font-weight: 200;
    line-height: 185px;
    padding-left: 20px;
  }
</style>
