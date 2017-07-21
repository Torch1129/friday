<template>
  <div class="w_scoreAccount">
    <div class="w_scoreAccount_title">
      <h3>积分订单</h3>
      <strong>当前积分:<span>240</span></strong>
    </div>
    <ul class="w_scoreAccount_message">
      <li v-for="item in lists">
        <div class="w_Account_title">
          <span>订单号:{{item.order}}</span>
          <span>下单时间:{{item.data}}</span>
          <span>订单状态:<em>已完成</em></span>
        </div>
        <div class="w_Account_message">
          <span><img :src="item.src" alt=""></span>
          <span>{{item.name}}</span>
          <span>{{item.num}}</span>
          <span>{{item.box}}</span>
          <span>积分:{{item.score}}</span>
          <span><a href="">查看详情</a>
              <a href="">删除订单</a>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

    export default {
        name: 'w_scoreAccount',
        data(){
            return {
                lists:[
                  {
                      order:"1504545641",
                      data:"2015.02.02 19:40:30",
                      src:require('./img/图层277.png'),
                      name:"某某某苹果",
                      num:"6个装",
                      box:"x1",
                      score:"55"
                  },{
                    order:"1504545641",
                    data:"2015.02.02 19:40:30",
                    src:require('./img/图层277.png'),
                    name:"某某某苹果",
                    num:"6个装",
                    box:"x1",
                    score:"55"
                  }
                ]
            }
        },
        components: {}
    }
</script>

<style>
  .w_scoreAccount{
    border:1px solid #e7e7e7;
    float: left;
    width: 1085px;
  }
  .w_scoreAccount_title{
    padding:20px 0 20px 20px;
    color: #666;
    border-bottom: 1px solid #dddddd;
  }
  .w_scoreAccount_title h3{
    display: inline-block;
  }
  .w_scoreAccount_title strong{
    float: right;
    margin-right: 20px;
  }
  .w_scoreAccount_title span{
    color: #F08200;
    font-size: 18px;
  }
  .w_scoreAccount_message{
    margin:0 20px 20px 20px;
  }
  .w_scoreAccount_message li{
    border:1px solid #e9e9e9;
    margin-top: 20px;
  }
  .w_Account_title{
    background-color: #f2f2f2;
    padding:10px 20px;
  }
  .w_Account_title span:nth-child(2){
    margin: 0 250px;
  }
  .w_Account_title em{
    color: #F08200;
  }
  .w_Account_message{
    overflow: hidden;
  }
  .w_Account_message span:nth-child(1){
    padding:20px;
    display: inline-block;
    float: left;
  }
  .w_Account_message span:nth-child(n+2){
    float: left;
  }
  .w_Account_message span:nth-child(2){
    color: #000;
    font-size: 16px;
    margin-top:50px;
  }
  .w_Account_message span:nth-child(3){
    margin:50px 150px 0;
    color: #999999;
  }
  .w_Account_message span:nth-child(4){
    margin-top:50px;

  }
  .w_Account_message span:nth-child(5){
    margin:0 50px 0 100px;
    border-left:1px solid #e9e9e9;
    border-right:1px solid #e9e9e9;
    padding:52px 80px;
  }
  .w_Account_message span a{
    margin-top:30px;
    display: block;
  }
  .w_Account_message span a:nth-child(1){
    color:#4b943d;
    text-decoration: underline;
  }
  .w_Account_message span a:nth-child(2){
    text-decoration: none;
    color: white;
    background-color:#F08200;
    padding:5px 20px;
    border-radius: 5px;
    margin-left: -20px;
  }
</style>
