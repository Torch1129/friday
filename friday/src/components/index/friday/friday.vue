<template>
    <div class="friday">
      <div class="w_friday_title">
        <span>您当前的位置:</span>
        <a href="">
          <span>首页</span>
          <span>专题</span>
        </a>
      </div>
      <div class="w_friday_one">
      <a href="">
        <img src="./img/568466dc847d5.png" alt="">
      </a>
        <div class="w_friday_one_text_one">
          <a href="">
            <img src="./img/专题_03.png" alt="">
          </a>
        </div>
      </div>
      <div class="w_friday_two">
        <a href="">
          <img src="./img/31758PICYMZ_1024.png" alt="">
        </a>
        <div class="w_friday_one_text_two">
          <a href="">
            <img src="./img/专题03_03.png" alt="">
          </a>
        </div>
      </div>
        <div class="w_friday_three">
          <a href="">
            <img src="./img/568466dc847d5.png" alt="">
          </a>
          <div class="w_friday_one_text_three">
            <a href="">
              <img src="./img/专题_02_03.png" alt="">
            </a>
          </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'friday',
        data(){
            return {}
        },
        components: {}
    }
</script>

<style>
.friday{
  width: 1280px;
  margin: 0 auto;
}
  a{
    text-decoration: none;
  }
  .w_friday_title{
    background-color:#f4f4f4;
    padding: 20px;
    color: #adadad;
  }
  .w_friday_title a{
    color:#000000;
    font-size: 18px;
    margin-left: 10px;
  }
  .w_friday_one, .w_friday_two,.w_friday_three{
    position: relative;
    margin-top: 20px;
  }
  .w_friday_three{
    margin-bottom:40px;
  }
  .w_friday_one_text_one{
    position: absolute;
    width: 492px;
    height: 224px;
    top:0;
    right:0;
    left:0;
    bottom:0;
    margin: auto;
  }
.w_friday_one_text_two,.w_friday_one_text_three{
  position: absolute;
  width:543px;
  height:74px;
  top:0;
  right:0;
  left:0;
  bottom:0;
  margin: auto;
}
</style>
