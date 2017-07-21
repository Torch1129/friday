<template>
  <div class="footer">
    <div class="w_footer">
      <ul class="w_footer_top">
        <li><span><img src="./img/footer_正品保障.png" alt="" class="w_footer_top_imp"/></span><span class="w_footer_top_text">优先保障</span></li>
        <li><span><img src="./img/footer_全面监控.png" alt="" class="w_footer_top_imp"/></span><span class="w_footer_top_text">全面监控</span></li>
        <li><span><img src="./img/footer_精选特惠.png" alt="" class="w_footer_top_imp"/></span><span class="w_footer_top_text">礼拜五优惠</span></li>
        <li><span><img src="./img/footer_直供.png" alt="" class="w_footer_top_imp"/></span><span class="w_footer_top_text">基地直供</span></li>
        <li><span><img src="./img/footer_准时.png" alt="" class="w_footer_top_imp"/></span><span class="w_footer_top_text">准时送达</span></li>
      </ul>
      <div class="w_footer_mid">
        <div class="w_footer_mid_left">
          <img src="./img/logo.png" />
          <div class="w_footer_mid_left_text">
            <span>服务时间  :  08:00 - 22:00</span>
            <span><img src="./img/footer_phone.png"/></span>
            <span>400-800-8820</span>
          </div>
        </div>
        <div class="w_footer_mid_con">
          <img src="./img/footer_erweima.png" />
          <span>礼拜五官方微信</span>
        </div>
        <div class="w_footer_mid_con">
          <img src="./img/footer_erweima.png" />
          <span>礼拜五官方微信</span>
        </div>
        <ul class="w_footer_mid_bom">
          <li>
            <h4>关于礼拜五</h4>
            <h5>新用户注册</h5>
          </li>
          <li>
            <h4>关于礼拜五</h4>
            <h5>新用户注册</h5>
          </li>
          <li>
            <h4>关于礼拜五</h4>
            <h5>新用户注册</h5>
          </li>
          <li>
            <h4>关于礼拜五</h4>
            <h5>新用户注册</h5>
          </li>
        </ul>
      </div>
      <div class="w_footer_mid_mid">
        <p>版权所有©礼拜五 保留所有权利 | 13154121254</p>
        <p>北京澳环科技提供技术支持</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {

      }
    }
  }
</script>


<style scoped>
  *{margin: 0;padding: 0;}
  ul,li{list-style: none;}
  a{text-decoration: none;}
  .w_footer{
    width: 100%;
    min-width:1500px;
  }
  .w_footer_top{
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #DDDDDD;
    text-align: center;
    padding: 22px 0;
  }
  .w_footer_top li{
    display: inline-block;
    font-size: 24px;
    border-right: 1px solid #C2C2C2;
  }
  .w_footer_top li:nth-child(5){
    border: none;
  }
  .w_footer_top_text{
    vertical-align:middle;
    padding-right: 46px;
  }
  .w_footer_top_imp{
    vertical-align: middle;
    padding: 0 20px 0 47px;
  }
  .w_footer_mid{
    width: 1280px;
    margin: 0 auto;

    overflow: hidden;
  }
  .w_footer_mid_left{
    float: left;
    padding:30px 40px 0 34px;
  }
  .w_footer_mid_left_text{
    display: block;
    padding:20px 0  65px 0;
  }
  .w_footer_mid_con{
    display: inline-block;
    float: left;
    padding: 30px 40px 0  0;
  }
  .w_footer_mid_con span{
    text-align: center;
    font-size: 14px;
    color:#666666;
  }
  .w_footer_mid_con span{
    display: block;
  }
  .w_footer_mid_bom{
    float: left;
  }
  .w_footer_mid_bom li{
    display: inline-block;
    padding-top:25px;
    padding-right: 20px;

  }
  .w_footer_mid_bom li h4{
    padding-bottom: 20px;
    font-size: 18px;
  }
  .w_footer_mid_bom li h5{
    color: #666666;
  }
  .w_footer_mid_mid{
    width: 100%;
    border-top: 1px solid #ddd;
    text-align: center;
    padding: 20px 0 25px 0;
  }
  .w_footer_mid_mid p:nth-child(1){
    color: #666666;
    font-size: 14px;
    padding-bottom: 5px;
  }
  .w_footer_mid_mid p:nth-child(2){
    font-size: 14px;
  }

</style>

v-if="str==msg || flag"
flag = false;
data:{
    return {
        list:[{
            str: xidi
            src
          },{
            str: weixiu
          }]
    }

}

