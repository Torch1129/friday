<template>
  <div class="goodsKinds">
    <div v-for="list in lists">
      <div class="w-goodsKinds_title" >
        <div class="w-goodsKinds_title_left">
          <span><img :src='list.img'></span>
          <span>{{list.kind}}</span>
          <span class="w-goodsKinds_title_slogan">{{list.title}}</span>
        </div>
        <div class="w-goodsKinds_title_right">
           <router-link to="/index/goods" class="w-goodsKinds_title_right_span"><span>{{list.more}}</span></router-link>
        </div>
      </div>
      <div class="w-goodsKinds_show" v-for="item in list.goods">
        <div class="w-goodsKinds_show_one">
          <a href="javascript:void(0)">
            <img :src="item.src" class="w-goodsKinds_show_one_img">
          </a>
          <div class="w-goodsKinds_introduce">
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
      name:'goodsKinds',
      data() {
          return {
              lists:[
                {
                  img:require('./img/水果.png'),
                  kind:'新鲜水果',
                  title:'优选全球好货',
                  more:'更多>',
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
                    }]
                },
                {
                  img:require('./img/水果.png'),
                  kind:'田园蔬菜',
                  title:'新鲜还不贵哦?',
                  more:'更多>',
                  goods: [{
                    src:require('./img/田园蔬菜1.jpg'),
                    name:'蔬菜礼盒',
                    money:'¥1',
                    moneys:'¥1',
                    car:require('./img/购物车.png')
                  },
                    {
                      src:require('./img/田园蔬菜2.jpg'),
                      name:'芦笋',
                      money:'¥1',
                      moneys:'¥1',
                      car:require('./img/购物车.png')
                    },
                    {
                      src:require('./img/田园蔬菜3.jpg'),
                      name:'丝瓜',
                      money:'¥1',
                      moneys:'¥1',
                      car:require('./img/购物车.png')
                    },
                    {
                      src:require('./img/田园蔬菜4.jpg'),
                      name:'新西兰南瓜',
                      money:'¥1',
                      moneys:'¥1',
                      car:require('./img/购物车.png')
                    }]
                },{
                  img:require('./img/水果.png'),
                  kind:'肉类家禽',
                  title:'破肉?',
                  more:'更多>',
                  goods: [{
                    src:require('./img/肉类家禽1.jpg'),
                    name:'羊肉',
                    money:'¥1',
                    moneys:'¥1',
                    car:require('./img/购物车.png')
                  },
                    {
                      src:require('./img/肉类家禽2.jpg'),
                      name:'牛肉',
                      money:'¥1',
                      moneys:'¥1',
                      car:require('./img/购物车.png')
                    },
                    {
                      src:require('./img/肉类家禽3.jpg'),
                      name:'鸡肉',
                      money:'¥1',
                      moneys:'¥1',
                      car:require('./img/购物车.png')
                    },
                    {
                      src:require('./img/肉类家禽4.jpg'),
                      name:'鱼肉',
                      money:'¥1',
                      moneys:'¥1',
                      car:require('./img/购物车.png')
                    }]
                },{
                  img:require('./img/水果.png'),
                  kind:'海鲜水产',
                  title:'破海鲜?',
                  more:'更多>',
                  goods: [{
                    src:require('./img/海鲜水产1.jpg'),
                    name:'羊肉',
                    money:'¥1',
                    moneys:'¥1',
                    car:require('./img/购物车.png')
                  },
                    {
                      src:require('./img/海鲜水产2.jpg'),
                      name:'牛肉',
                      money:'¥1',
                      moneys:'¥1',
                      car:require('./img/购物车.png')
                    },
                    {
                      src:require('./img/海鲜水产3.jpg'),
                      name:'鸡肉',
                      money:'¥1',
                      moneys:'¥1',
                      car:require('./img/购物车.png')
                    },
                    {
                      src:require('./img/海鲜水产4.jpg'),
                      name:'鱼肉',
                      money:'¥1',
                      moneys:'¥1',
                      car:require('./img/购物车.png')
                    }]
                },{
                  img:require('./img/水果.png'),
                  kind:'优选食材',
                  title:'豆豆豆豆豆豆?',
                  more:'更多>',
                  goods: [{
                    src:require('./img/优选食材1.jpg'),
                    name:'黑米',
                    money:'¥18',
                    moneys:'¥0',
                    car:require('./img/购物车.png')
                  },
                    {
                      src:require('./img/优选食材2.jpg'),
                      name:'赤小豆',
                      money:'¥16',
                      moneys:'¥0',
                      car:require('./img/购物车.png')
                    },
                    {
                      src:require('./img/优选食材3.jpg'),
                      name:'芡实',
                      money:'¥27',
                      moneys:'¥0',
                      car:require('./img/购物车.png')
                    },
                    {
                      src:require('./img/优选食材4.jpg'),
                      name:'山药片',
                      money:'¥25',
                      moneys:'¥0',
                      car:require('./img/购物车.png')
                    }]
                },{
                  img:require('./img/水果.png'),
                  kind:'零食酒水',
                  title:'难吃还贵?',
                  more:'更多>',
                  goods: [{
                    src:require('./img/零食酒水1.jpg'),
                    name:'大杏仁',
                    money:'¥35',
                    moneys:'¥0',
                    car:require('./img/购物车.png')
                  },
                    {
                      src:require('./img/零食酒水2.jpg'),
                      name:'枣夹核桃',
                      money:'¥40',
                      moneys:'¥0',
                      car:require('./img/购物车.png')
                    },
                    {
                      src:require('./img/零食酒水3.jpg'),
                      name:'小杏仁',
                      money:'¥20',
                      moneys:'¥0',
                      car:require('./img/购物车.png')
                    },
                    {
                      src:require('./img/零食酒水4.jpg'),
                      name:'黑加仑葡萄干',
                      money:'¥20',
                      moneys:'¥0',
                      car:require('./img/购物车.png')
                    }]
                },
                {
                  img:require('./img/水果.png'),
                  kind:'蛋奶速食',
                  title:'吃过老干妈吗?',
                  more:'更多>',
                  goods: [{
                    src:require('./img/蛋奶速食1.jpg'),
                    name:'沙湖拌面酱',
                    money:'¥11',
                    moneys:'¥0',
                    car:require('./img/购物车.png')
                  },
                    {
                      src:require('./img/蛋奶速食2.jpg'),
                      name:'沙湖夹面酱',
                      money:'¥11',
                      moneys:'¥0',
                      car:require('./img/购物车.png')
                    },
                    {
                      src:require('./img/蛋奶速食3.jpg'),
                      name:"沙湖牛肉酱",
                      money:'¥11',
                      moneys:'¥0',
                      car:require('./img/购物车.png')
                    },
                    {
                      src:require('./img/蛋奶速食4.jpg'),
                      name:'沙湖香辣酱',
                      money:'¥11',
                      moneys:'¥0',
                      car:require('./img/购物车.png')
                    }]
                },{
                  img:require('./img/水果.png'),
                  kind:'全球代购',
                  title:'一堆破钙片?',
                  more:'更多>',
                  goods: [{
                    src:require('./img/全球代购1.jpg'),
                    name:'自然之宝钙糖',
                    money:'¥1',
                    moneys:'¥186',
                    car:require('./img/购物车.png')
                  },
                    {
                      src:require('./img/全球代购2.jpg'),
                      name:'小铁人童钙',
                      money:'¥168',
                      moneys:'¥168',
                      car:require('./img/购物车.png')
                    },
                    {
                      src:require('./img/全球代购3.jpg'),
                      name:"韦伯玛卡人参胶囊",
                      money:'¥236',
                      moneys:'¥236',
                      car:require('./img/购物车.png')
                    },
                    {
                      src:require('./img/全球代购4.jpg'),
                      name:'健美生钙镁VD3',
                      money:'¥158',
                      moneys:'¥158',
                      car:require('./img/购物车.png')
                    }]
                },
              ]
          }
      }
  }
</script>

<style scoped>
  a{text-decoration: none}
  .goodsKinds{
    width: 1280px;
    margin: 0 auto;
    margin-top: 10px;
    overflow:hidden;
  }
  .w-goodsKinds_title{
    background-color: #ebffe8;
    border-bottom: 1px solid #498e3d;
    overflow: hidden;
    padding:27px 0 30px 27px;
  }
  .w-goodsKinds_title_left{
    float: left;
  }
  .w-goodsKinds_title_left img:nth-child(1){
    vertical-align: top;
    padding-right: 20px;
  }
  .w-goodsKinds_title_left span:nth-child(2){
    font-size: 30px;
    color: #498e3d;
    padding-right:17px;
  }
  .w-goodsKinds_title_left span:nth-child(3){
    font-size: 20px;
    color:#9ea09e;
  }
  .w-goodsKinds_title_right{
    float: right;
  }
  .w-goodsKinds_title_right_span{
    float: right;
    margin-top:8px;
    font-size: 20px;
    color:#4B943D;
    margin-right: 30px;
  }
  .w-goodsKinds_show{
    border:1px solid #ECECEC;
    float: left;
    margin: 20px 0;
  }
  .w-goodsKinds_show:hover{
    border:1px solid#4B943D;
  }
  .w-goodsKinds_show:nth-child(3){
    margin-right: 17px;
    margin-left: 17px;
  }
  .w-goodsKinds_show:nth-child(4){
    margin-right: 18px;
  }
  .w-goodsKinds_show_one_img{
    width: 305px;
    height: 305px;
  }
  .w-goodsKinds_introduce{
    padding:10px 30px;
  }
  .w-goodsKinds_introduce a:nth-child(1){
    font-size: 18px;
    color: #000;
    padding-bottom:10px;
    display: block;
  }
  .w-goodsKinds_introduce span:nth-child(2){
    color: red;
    font-size: 20px;
  }
  .w-goodsKinds_introduce span:nth-child(3){
    color: #666666;
    font-size:16px;
    text-decoration:line-through;
  }
  .w-goodsKinds_introduce a:nth-child(4){
    float: right;
  }
</style>
