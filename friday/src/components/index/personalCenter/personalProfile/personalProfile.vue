<template>
  <div class="w_personalProfile">
    <h3>{{msg}}</h3>
    <ul class="w_personalProfile_message" v-show="flag">
      <li>
        <span>当前头像:</span>
        <img src="./img/图层89.png" alt="">
        <a href="">修改</a>
      </li>
      <li>
        <span>昵称:</span>
        <input type="input"placeholder="15044781545">
      </li>
      <li><span>性别:</span><input type="radio">男 <input type="radio">女</li>
      <li><span>生日:</span>
        <select>
          <option value="">2017</option>
          <option value="">2016</option>
        </select>年
        <select>
          <option value="">12</option>
          <option value="">11</option>
        </select>月
        <select>
          <option value="">30</option>
          <option value="">29</option>
        </select>日</li>
      <li><span>手机:</span><input type="input"><a href="javascript:void(0)" @click="phone">更换手机号</a></li>
      <li><button class="w_personalProfile_btn">确认提交</button></li>
    </ul>
    <div class="w_phoneOne"v-show="flag1">
      <span><img src="./img/换绑手机1-1_03.png" alt=""></span>
      <span><img src="./img/换绑手机3_02_03.png" alt=""></span>
      <span><img src="./img/换绑手机3-3_03.png" alt=""></span>
      <div class="w_phoneOne_input">
        <div class="w_phoneOne_input1">
        <input type="text"placeholder="15205781342">
        </div>
        <div class="w_phoneOne_input2">
        <input type="text"placeholder="验证码"><img src="./img/图层253.png" alt=""><a href="">看不清,换一张</a>
        </div>
        <div class="w_phoneOne_input3">
        <input type="text"placeholder="输入密码验证身份">
        </div>
        <button @click="phone1">提交验证</button>
      </div>
    </div>
    <div class="w_phoneTwo"v-show="flag2">
      <span><img src="./img/换绑手机3_03.png" alt=""></span>
      <span><img src="./img/换绑手机2-2_03.png" alt=""></span>
      <span><img src="./img/换绑手机3-3_03.png" alt=""></span>
      <div class="w_phoneOne_input">
        <div class="w_phoneOne_input1">
          <input type="text"placeholder="输入手机号">
        </div>
        <div class="w_phoneOne_input2">
          <input type="text"placeholder="验证码"><img src="./img/图层253.png" alt=""><a href="">看不清,换一张</a>
        </div>
        <div class="w_phoneTwo_input3">
          <input type="text"placeholder="手机验证码">
          <a href="">获取验证码</a>
        </div>
        <button @click="phone2">提交验证</button>
      </div>
    </div>
    <div class="w_phoneThree"v-show="flag3">
      <span><img src="./img/换绑手机3_03.png" alt=""></span>
      <span><img src="./img/换绑手机3_02_03.png" alt=""></span>
      <span><img src="./img/换绑手机3_3.png" alt=""></span>
      <div class="w_phoneThree_message">
        <img src="./img/check.png" alt=""><span>恭喜您成功修改</span>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
        name: '',
        data(){
            return {
                 flag:true,
                 flag1:false,
                 flag2:false,
                 flag3:false,
                  msg:'个人资料',
            }
        },
        components: {},
        methods:{
            phone:function(){
              this.flag=false;
              this.flag1=true;
              this.flag2=false;
              if(this.msg=='个人资料'){
                  this.msg= '换绑手机'
              }else{
                  this.msg ='个人资料'
              }
            },
            phone1:function(){
              this.flag1=false;
              this.flag2=true;
            },
          phone2:function(){
            this.flag1=false;
            this.flag2=false;
            this.flag3=true;
          }
        }
    }
</script>

<style>
  .w_personalProfile{
    border:1px solid #e7e7e7;
    float: left;
    width: 1085px;
  }
  .w_personalProfile h3{
    padding:20px 0 20px 20px;
    color: #666;
    border-bottom: 1px solid #dddddd;
  }
  .w_personalProfile_message{
    margin: 20px 50px 222px;
  }
  .w_personalProfile_message span{
    font-size: 18px;
    margin-right:10px;
    margin-bottom: 20px;
    display: inline-block;
  }
  .w_personalProfile_message img{
    margin-right: 10px;
  }
  .w_personalProfile_message a{
    text-decoration: none;
    margin-left: 10px;
    color: #4b943d;
  }
  .w_personalProfile_message li select{
    display: inline-block;
    padding:10px;
  }
  .w_personalProfile_message input{
    padding:5px;
  }
  .w_personalProfile_btn{
    padding:7px 25px;
    outline: none;
    border: none;
    background-color: #F08200;
    color:white;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 50px;
  }


  .w_phoneOne{
    padding-bottom: 225px;
    margin-left: 40px;
  }
  .w_phoneOne span{
    display: inline-block;
    margin: 40px 0 30px 5px;
  }
  .w_phoneOne_input{
    margin-left:40px;
  }
  .w_phoneOne_input1 input{
    padding:10px 100px 10px 10px;
    margin-bottom: 20px;
  }
  .w_phoneOne_input2{
    overflow: hidden;
    margin-bottom: 20px;
  }
  .w_phoneOne_input2 input{
    padding:10px 0px 10px 5px;
    margin-right: 10px;
    float: left;
  }
  .w_phoneOne_input2 img{
    margin-top: 3px;
    margin-right:10px;
    float: left;
  }
  .w_phoneOne_input2 a{
    color:#F08200;
    text-decoration: none;
    float: left;
    margin-top:8px;
  }
  .w_phoneOne_input3 input{
    padding:10px 100px 10px 10px;
    margin-bottom: 20px;
  }
  .w_phoneOne_input button{
    padding:10px 25px;
    outline: none;
    background-color: #F08200;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
  }
  .w_phoneTwo{
    padding-bottom: 225px;
    margin-left: 40px;
  }
  .w_phoneTwo span{
    display: inline-block;
    margin: 40px 0 30px 5px;
  }
  .w_phoneTwo_input3 input{
    padding:10px 100px 10px 10px;
    margin-bottom: 20px;
  }
  .w_phoneTwo_input3 a{
    margin-left:-90px;
    background-color:#4b943d;
    color: white;
    text-decoration: none;
    padding:2px 0;
  }
  .w_phoneThree{
    padding-bottom:227px;
    margin-left: 40px;
  }
  .w_phoneThree span{
    display: inline-block;
    margin: 40px 0 30px 5px;
  }
  .w_phoneThree_message{
    text-align: center;
    margin-top:120px;
  }
  .w_phoneThree_message span{
    color: #F08200;
    font-size: 20px;
  }
</style>
