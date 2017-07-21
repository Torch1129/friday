<template>
  <div class="w_myScore">
    <h3>我的积分</h3>
    <h4>当前积分:<span>240分</span></h4>
    <ul class="w_myScores">
      <li><strong>积分日期</strong><strong>变动</strong><strong>来源</strong></li>
      <li><span>2015-05-04 16:20:22</span><span>+100</span><span>消费赠送</span></li>
      <li><span>2015-05-04 16:20:22</span><span>+100</span><span>消费赠送</span></li>
      <li><span>2015-05-04 16:20:22</span><span>+100</span><span>消费赠送</span></li>
      <li><span>2015-05-04 16:20:22</span><span>+100</span><span>消费赠送</span></li>
      <li><span>2015-05-04 16:20:22</span><span>+100</span><span>消费赠送</span></li>
    </ul>
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
  .w_myScore{
    border:1px solid #e7e7e7;
    float: left;
    width: 1085px;
  }
  .w_myScore h3{
    padding:20px 0 20px 20px;
    color: #666;
    border-bottom: 1px solid #dddddd;
  }
  .w_myScore h4{
    padding:20px 0 20px 20px;
    font-size:18px;
    font-weight: 400;
  }
  .w_myScore h4 span{
    color: #F08200;
  }
  .w_myScores{
    /*padding-left:20px;*/
  }
  .w_myScores li:nth-child(1){
    background-color:#f2f2f2;
    padding: 15px 100px;
  }
  .w_myScores li strong{
    margin-right: 350px;
    font-weight: 400;
  }
  .w_myScores li span{
    margin-left: 45px;
    margin-right: 260px;
  }
  .w_myScores li span:nth-child(3){
    margin-left:75px;
  }
  .w_myScores li{
    padding: 15px 0;
    border-bottom: 1px solid #dddddd;
  }
  .w_myScores li:nth-child(n+2):hover{
    background-color: #f4fff2;
  }
</style>
