<template>
  <div class="myCllect">
    <div id="c_recentContent">
      <h4>我的收藏</h4>

      <div class="c-goodsKinds_show" v-for="(item,index) in goods">
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
          <div class="c_btn">
            <p v-show="!item.flag" @click="click1(index)">已失效</p>
            <p v-show="item.flag" @click="click2(index)">取消收藏</p>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>

    export default {
        name: 'myCllect',
        data(){
            return {
              goods: [{
                src:require('./img/新鲜水果1.jpg'),
                name:'团聚礼盒',
                money:'¥1',
                moneys:'¥1',
                car:require('./img/购物车.png'),
                flag: true,
              },
                {
                  src:require('./img/新鲜水果2.jpg'),
                  name:'青柠檬',
                  money:'¥5',
                  moneys:'¥0',
                  car:require('./img/购物车.png'),
                  flag: true,
                },
                {
                  src:require('./img/新鲜水果3.jpg'),
                  name:'澳芒',
                  money:'¥30',
                  moneys:'¥0',
                  car:require('./img/购物车.png'),
                  flag: true,
                },
                {
                  src:require('./img/新鲜水果4.jpg'),
                  name:'椰子',
                  money:'¥15',
                  moneys:'¥0',
                  car:require('./img/购物车.png'),
                  flag: true,
                },
                {
                  src:require('./img/新鲜水果3.jpg'),
                  name:'澳芒',
                  money:'¥30',
                  moneys:'¥0',
                  car:require('./img/购物车.png'),
                  flag: true,
                },
                {
                  src:require('./img/新鲜水果4.jpg'),
                  name:'椰子',
                  money:'¥15',
                  moneys:'¥0',
                  car:require('./img/购物车.png'),
                  flag: true,
                }],

            }
        },
      methods:{
        click1:function(a){
            this.goods[a].flag = true;
        },
        click2:function(a){
            this.goods[a].flag = false;
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

  /*最近收藏的商品*/

  .c-goodsKinds_show{
    border:1px solid #ECECEC;
    float: left;
    margin:20px 27px;
    position: relative;
  }
  .c_btn{
    text-align: center;
  }
  .c_btn p{
    width: 150px;
    height: 40px;
    border-radius: 20px;
    margin: 20px auto;
    line-height: 40px;
    color: white;
  }
  .c_btn p:nth-child(1){
    background: #999;
  }
  .c_btn p:nth-child(2){
    background: #3e9444;
  }
  .c-goodsKinds_closed span:nth-child(2){
    width: 20px;
    height: 5px;
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
