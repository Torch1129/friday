<template>
    <div class="personalNav">
        <h2>个人中心</h2>
        <ul class="personalCenter_lists">
          <li class="personalCenter_lists_title">交易管理</li>
          <li @click="click1"><router-link to="/index/personalCenter/myAccount" class="personalCenter_lists_one"v-bind:class="classState==1?'w_personalNav':''">我的账号</router-link></li>
          <li @click="click2" ><router-link to="/index/personalCenter/myOrder" class="personalCenter_lists_one" v-bind:class="classState==2?'w_personalNav':''" >我的订单</router-link></li>
          <li @click="click3"><router-link to="/index/personalCenter/myScore" class="personalCenter_lists_one" v-bind:class="classState==3?'w_personalNav':''">我的积分</router-link></li>
          <li @click="click4"><router-link to="/index/personalCenter/scoreAccount" class="personalCenter_lists_one" v-bind:class="classState==4?'w_personalNav':''">积分订单</router-link></li>
          <li @click="click5"><router-link to="/index/personalCenter/myWallet" class="personalCenter_lists_one" v-bind:class="classState==5?'w_personalNav':''">我的钱包</router-link></li>
          <li class="personalCenter_lists_title">会员资料</li>
          <li @click="click6"><router-link to="/index/personalCenter/personalProfile" class="personalCenter_lists_one" v-bind:class="classState==6?'w_personalNav':''">个人资料</router-link></li>
          <li @click="click7"><router-link to="/index/personalCenter/addressManage" class="personalCenter_lists_one" v-bind:class="classState==7?'w_personalNav':''">地址管理</router-link></li>
          <li @click="click8"><router-link to="/index/personalCenter/myCllect" class="personalCenter_lists_one" v-bind:class="classState==8?'w_personalNav':''">我的收藏</router-link></li>
          <li @click="click9"><router-link to="/index/personalCenter/recentBrowser" class="personalCenter_lists_one" v-bind:class="classState==9?'w_personalNav':''">最近浏览</router-link></li>
          <li @click="click10"><router-link to="/index/personalCenter/revisePassword" class="personalCenter_lists_one" v-bind:class="classState==10?'w_personalNav':''">修改密码</router-link></li>
          <li class="personalCenter_lists_title">站内信</li>
          <li @click="click11"><router-link to="/index/personalCenter/myInformation" class="personalCenter_lists_one" v-bind:class="classState==11?'w_personalNav':''">我的消息</router-link></li>
          <li @click="click12"><router-link to="/index/personalCenter/feedback" class="personalCenter_lists_one" v-bind:class="classState==12?'w_personalNav':''">意见反馈</router-link></li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'personalNav',
        data(){
            return {
                classState:1,
            }
        },
        components: {},
        methods:{
            click1:function(){
              this.classState=1;
            },
            click2:function(){
              this.classState=2;
            },
          click3:function(){
            this.classState=3;
          },
          click4:function(){
            this.classState=4;
          },
          click5:function(){
            this.classState=5;
          },
          click6:function(){
            this.classState=6;
          },
          click7:function(){
            this.classState=7;
          },
          click8:function(){
            this.classState=8;
          },
          click9:function(){
            this.classState=9;
          },
          click10:function(){
            this.classState=10;
          },
          click11:function(){
            this.classState=11;
          },
          click12:function(){
            this.classState=12;
          }
      }
    }
</script>

<style>
  ul,li{
    list-style: none;
  }
  .personalNav{
    border: 1px solid #e7e7e7;
    width: 170px;
    float: left;
    margin-right:20px;
    overflow: hidden;
  }
  .personalNav h2{
    font-weight: 500;
    border-bottom: 1px solid #e7e7e7;
    padding: 15px 0 15px 20px;
    color: #666;
  }
  .personalCenter_lists{
    overflow: hidden;
  }
  .personalCenter_lists li{
    padding-left: 20px;
    padding-bottom:13px;
  }
  .personalCenter_lists_one{
    color:#666;
    font-size: 14px;
    text-decoration: none;
  }
  .w_personalNav{
    color:#4B943D;
    text-decoration:underline;
  }
  .personalCenter_lists_one:hover{
    color:#4B943D;
    text-decoration:underline;
  }
  .personalCenter_lists_title{
    font-size: 18px;
    padding: 10px 0 10px 0;
    color: #666;
  }
  .personalCenter_lists_title span{
    float: right;
    margin-right: 27px;
    margin-top: -2px;
  }
</style>
