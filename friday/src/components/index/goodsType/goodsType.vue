<template>
    <div class="goodsType">
      <ul id="c_box">
        <div id="c_content">
          <li>
            <a href="###">
              全部分类
              <span id="c_border"></span>
            </a>
            <ul class="c_typeList">
              <li v-for="item in list"><span :class="item.icont"></span>{{item.title}}
                <dl id="c_fruitList">
                  <dd  v-for="i in item.arr"><a href="">{{i}}</a></dd>
                  <!--<dd><a href="">进口水果</a></dd>-->
                  <!--<dd><a href="">地产蔬菜</a></dd>-->
                  <!--<dd><a href="">国产水果</a></dd>-->
                </dl>
              </li>


              <!--<li><span class="iconfont">&#xe66e;</span> 田园蔬菜-->
                <!--<dl id="c_vegetableList">-->
                  <!--<dd><a href="">蔬菜礼篮</a></dd>-->
                  <!--<dd><a href="">有机蔬菜</a></dd>-->
                  <!--<dd><a href="">地产蔬菜</a></dd>-->
                  <!--<dd><a href="">进口蔬菜</a></dd>-->
                <!--</dl>-->
              <!--</li>-->
              <!--<li><span class="iconfont">&#xe614;</span> 肉类家禽-->
                <!--<dl id="c_meatList">-->
                  <!--<dd><a href="">羊肉</a></dd>-->
                  <!--<dd><a href="">牛肉</a></dd>-->
                  <!--<dd><a href="">鸡鸭肉</a></dd>-->
                  <!--<dd><a href="">鱼肉</a></dd>-->
                <!--</dl>-->
              <!--</li>-->
              <!--<li><span class="iconfont">&#xe622;</span> 海鲜水产-->
                <!--<dl id="c_seafoodList">-->
                  <!--<dd><a href="">海鲜礼盒</a></dd>-->
                  <!--<dd><a href="">国产海鲜</a></dd>-->
                  <!--<dd><a href="">进口海鲜</a></dd>-->
                  <!--<dd><a href="">干货其他</a></dd>-->
                <!--</dl>-->
              <!--</li>-->
              <!--<li><span class="iconfont">&#xe619;</span> 优选食材-->
                <!--<dl id="c_goodList">-->
                  <!--<dd><a href="">优选米面</a></dd>-->
                  <!--<dd><a href="">优选杂粮</a></dd>-->
                  <!--<dd><a href="">粮油调味</a></dd>-->
                  <!--<dd><a href="">其他食材</a></dd>-->
                <!--</dl>-->
              <!--</li>-->
              <!--<li><span class="iconfont">&#xe66d;</span> 零食酒水</li>-->
              <!--<li><span class="iconfont">&#xe672;</span> 蛋奶速食</li>-->
              <!--<li><span class="iconfont">&#xe611;</span> 全球代购</li>-->
            </ul>
          </li>
          <li v-bind:class="classState==1?'c_active':''" v-on:click="click1">
            <router-link to="/index/homePage">首页</router-link>
          </li>
          <li v-bind:class="classState==2?'c_active':''" v-on:click="click2">
            <router-link to="/index/sameCity">同城</router-link>
          </li>
          <li v-bind:class="classState==3?'c_active':''" v-on:click="click3">
            <router-link to="/index/friday">礼拜五</router-link>
          </li >
          <li v-bind:class="classState==4?'c_active':''" v-on:click="click4">
            <router-link to="/index/scoreShop">积分商城</router-link>
          </li>
        </div>
      </ul>
    </div>
</template>

<script>
    export default {
        created:function(){
          this.$root.$on("toPersonalCenter",this.getData);
        },
        name: 'goodsType',
        methods:{
          click1(){
            this.classState=1
          },
          click2(){
            this.classState=2
          },
          click3(){
            this.classState=3
          },
          click4(){
            this.classState=4
          },
          getData(){
            this.classState=5
          }
        },
        data(){
            return {
              classState: 1,
              list:[
                {
                    title:"新鲜水果",
                    icont: "iconfont icon-caomei1",
                    arr:["水果礼盒","进口水果","有机水果","国产水果"]
                },
                {
                    title:"田园蔬菜",
                    icont: "iconfont icon-icon-test",
                    arr:["蔬菜礼篮","有机蔬菜","地产蔬菜","进口蔬菜"]
                },
                {
                  title:"肉类家禽",
                  icont: "iconfont icon-jitui",
                  arr:["羊肉","牛肉","鸡鸭肉","鱼肉"]
                },
                {
                  title:"海鲜水产",
                  icont: "iconfont icon-yu",
                  arr:["海鲜礼盒","国产海鲜","进口海鲜","其他干货"]
                },
                {
                  title:"优选食材",
                  icont: "iconfont icon-baotang",
                  arr:["优选米面","优选杂粮","粮油调味","其他食材"]
                },
                {
                  title:"零食酒水",
                  icont: "iconfont icon-jiushuiyinliao",
                  arr:["零食","特色干果","休闲冲饮","茶叶","白酒","啤酒","葡萄酒","其他酒品"]
                },
                {
                  title:"蛋奶速食",
                  icont: "iconfont icon-danlei",
                  arr:["方便速食","奶制品","面包甜点","蛋品"]
                },
                {
                  title:"全球代购",
                  icont: "iconfont icon-daigousanqi03",
                  arr:["保健品","洗护用品","农副产品","母婴用品"]
                },

              ]
            }
        },
        components: {}
    }
</script>

<style scoped>
  @import url('./iconfont/iconfont.css');
  *{
    margin: 0;
    padding: 0;
  }
  .goodsType{
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
  }
  #c_box{
    /*border: 1px solid;*/
    margin: 20px auto 0 auto;
    width: 1280px;
    /*display: flex;
            justify-content: space-around;*/

  }
 #c_box #c_content {
    /*border: 1px solid;*/
    /*margin: 0 auto;*/
    margin-left: 20px;
    width: 780px;
    display: flex;
    position: relative;
    justify-content: space-around;

  }
  #c_content li:nth-child(1) a{
    display: flex;
    justify-content: space-around;

  }
  #c_border{
    width: 10px;
    height: 10px;
    border-bottom: 1px solid;
    border-left: 1px solid;
    display: block;
    margin-top: 5px;
    transform: rotate(-45deg);
  }
  #c_content  li{
    text-align: center;
    width: 156px;
    height: 50px;
    list-style: none;
    /*border: 1px solid;*/
    /*position: relative;*/

  }
  #c_content li a{
    font-size: 20px;
    color: black;
    text-decoration: none;
    /*line-height: 50px;*/
    border-right: 1px solid rgb(232,232,232);
    display: block;
    height: 30px;
    margin-top: 10px;
    /*box-sizing: border-box;*/
  }
  #c_content .c_active{
    background: #f78327;
  }
  #c_content .c_active a{
    color: white;
    border-right: 1px solid #f78327;
  }
  #c_content li:nth-child(5) a{
    border-right: none;
  }
  #c_content  li:hover{
    background: #f78327;

  }
  #c_content  li:hover a{
    color: white;
    border-right: 1px solid rgb(219,134,27);
  }
  #c_content li:nth-child(1):hover{

    background: white;
  }
  #c_content li:nth-child(1):hover a{
    color: black;
    border-right: 1px solid rgb(232,232,232);
  }
  #c_content li:nth-child(1):hover .c_typeList{
    display: block;
  }
  #c_content .c_typeList li:hover{
    background: rgb(239,254,233);
  }
  .c_typeList{
    background: white;
    position: absolute;
    width: 150px;
    top: 50px;
    height: 510px;
    display: none;
    z-index: 10;
  }
  #c_content .c_typeList li{
    width: 150px;
    height: 60px;
    font-size: 16px;
    line-height: 60px;
    border-bottom: 1px solid rgb(232,232,232);
    border-top: 1px solid rgb(232,232,232);
  }
  #c_content .c_typeList li span{
    padding-right: 5px;
    font-size: 24px;
  }
  /*水果*/
  #c_fruitList{
    position: absolute;
    width: 500px;
    height: 495px;
    text-align: left;
    left: 150px;
    top: 0;
    background: rgb(239,254,233);
    display: none;
  }
  #c_fruitList dd{
    border: 1px solid;
    background: white;
    width: 100%;
    float: left;
    color: rgb(239,254,233);
    line-height: 30px;
  }
  .c_typeList li:hover #c_fruitList{
    display: block;
  }
  #c_fruitList:hover dd{
    background: rgb(239,254,233);
  }
  /*蔬菜*/
  #c_vegetableList{
    position: absolute;
    width: 500px;
    height: 495px;
    text-align: left;
    left: 150px;
    top: -62px;
    background: rgb(239,254,233);
    display: none;
  }
  #c_vegetableList dd{
    border: 1px solid;
    background: white;
    width: 100%;
    float: left;
    color: rgb(239,254,233);
    line-height: 30px;
  }
  .c_typeList li:hover #c_vegetableList{
    display: block;
  }
  #c_vegetableList:hover dd{
    background: rgb(239,254,233);
  }
  /*肉类*/
  #c_meatList{
    position: absolute;
    width: 500px;
    height: 495px;
    text-align: left;
    left: 150px;
    top: -122px;
    background: rgb(239,254,233);
    display: none;
  }
  #c_meatList dd{
    border: 1px solid;
    background: white;
    width: 100%;
    float: left;
    color: rgb(239,254,233);
    line-height: 30px;
  }
  .c_typeList li:hover #c_meatList{
    display: block;
  }
  #c_meatList:hover dd{
    background: rgb(239,254,233);
  }
  /*海鲜*/
  #c_seafoodList{
    position: absolute;
    width: 500px;
    height: 495px;
    text-align: left;
    left: 150px;
    top: -182px;
    background: rgb(239,254,233);
    display: none;
  }
  #c_seafoodList dd{
    border: 1px solid;
    background: white;
    width: 100%;
    float: left;
    color: rgb(239,254,233);
    line-height: 30px;
  }
  .c_typeList li:hover #c_seafoodList{
    display: block;
  }
  #c_seafoodList:hover dd{
    background: rgb(239,254,233);
  }
  /*优选食材*/
  #c_goodList{
    position: absolute;
    width: 500px;
    height: 495px;
    text-align: left;
    left: 150px;
    top: -242px;
    background: rgb(239,254,233);
    display: none;
  }
  #c_goodList dd{
    border: 1px solid;
    background: white;
    width: 100%;
    float: left;
    color: rgb(239,254,233);
    line-height: 30px;
  }
  .c_typeList li:hover #c_goodList{
    display: block;
  }
  #c_goodList:hover dd{
    background: rgb(239,254,233);
  }
</style>
