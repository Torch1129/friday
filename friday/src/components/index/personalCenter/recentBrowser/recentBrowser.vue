<template>
  <div class="recentBrower">
    <div id="c_recentContent">
      <h4>最近浏览</h4>

      <div class="c-goodsKinds_show" v-for="item in goods">
        <div class="c-goodsKinds_closed">
          <span></span><span></span>
        </div>

        <div class="c-goodsKinds_show_one">
          <a href="javascript:void(0)">
            <img :src="item.src" class="c-goodsKinds_show_one_img">
          </a>
          <div class="c-goodsKinds_introduce">
            <a href="javascript:void(0)">{{item.name}}</a>
            <span>{{item.money}}</span>
            <span>{{item.moneys}}</span>
            <a href="javascript:void(0)">
              <img :src="item.car">
            </a>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script>

    export default {
        name: 'recentBrower',
        data(){
            return {
              goods: [{
                src:require('./img/新鲜水果1.jpg'),
                name:'团聚礼盒',
                money:'¥1',
                moneys:'¥1',
                car:require('./img/购物车.png')
              },
                {
                  src:require('./img/新鲜水果2.jpg'),
                  name:'青柠檬',
                  money:'¥5',
                  moneys:'¥0',
                  car:require('./img/购物车.png')
                },
                {
                  src:require('./img/新鲜水果3.jpg'),
                  name:'澳芒',
                  money:'¥30',
                  moneys:'¥0',
                  car:require('./img/购物车.png')
                },
                {
                  src:require('./img/新鲜水果4.jpg'),
                  name:'椰子',
                  money:'¥15',
                  moneys:'¥0',
                  car:require('./img/购物车.png')
                },
                {
                  src:require('./img/新鲜水果3.jpg'),
                  name:'澳芒',
                  money:'¥30',
                  moneys:'¥0',
                  car:require('./img/购物车.png')
                },
                {
                  src:require('./img/新鲜水果4.jpg'),
                  name:'椰子',
                  money:'¥15',
                  moneys:'¥0',
                  car:require('./img/购物车.png')
                },]
            }
        },
        components: {}
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  #c_recentContent {
    width: 1085px;
    /*height: 628px;*/
    border: 1px solid #e9e9e9;
    float: left;
  }
  #c_recentContent h4 {
    border-bottom: 1px solid #e9e9e9;
    font-size: 20px;
    color: #323333;
    line-height: 60px;
    padding-left: 20px;
    font-weight:200;
  }

  /*最近访问的商品*/

  .c-goodsKinds_show{
    border:1px solid #ECECEC;
    float: left;
    margin:20px 27px;
    position: relative;
  }
  .c-goodsKinds_closed{
    position: absolute;
    right: 10px;
    top: 10px;
    width: 30px;
    height: 30px;
    background: #3e9444;
    border-radius: 50%;
    text-align: center;
    line-height: 25px;
  }
  .c-goodsKinds_closed span:nth-child(1){
    position: absolute;
    top:15px;
     width: 20px;
     height: 3px;
     background: white;
     display: inline-block;
     transform: rotate(40deg);
   }
  .c-goodsKinds_closed span:nth-child(2){
    width: 20px;
    height: 3px;
    background: white;
    display: inline-block;
    transform: rotate(-40deg);
  }
  .c-goodsKinds_show:hover{
    border:1px solid #4B943D;
  }
  .c-goodsKinds_show_one_img{
    width: 305px;
    height: 305px;
  }
  .c-goodsKinds_introduce{
    padding:10px 30px;
  }
  .c-goodsKinds_introduce a:nth-child(1){
    font-size: 18px;
    color: #000;
    padding-bottom:10px;
    display: block;
  }
  .c-goodsKinds_introduce span:nth-child(2){
    color: red;
    font-size: 20px;
  }
  .c-goodsKinds_introduce span:nth-child(3){
    color: #666666;
    font-size:16px;
    text-decoration:line-through;
  }
  .c-goodsKinds_introduce a:nth-child(4){
    float: right;
  }

</style>
