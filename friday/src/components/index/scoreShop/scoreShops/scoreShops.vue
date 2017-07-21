<template>
  <ul class="w_scoreShops">
    <li class="w_scoreShops_list"v-for="item in lists">
      <a href="javascript:void(0)"><img :src="item.src" alt=""></a>
      <div class="w_scoreShops_list_text">
        <h3>{{item.name}}</h3>
        <h4>{{item.title}}</h4>
        <span>{{item.integral}}</span>
        <span>{{item.num}}</span>
        <span>{{item.money}}</span>
        <span>{{item.moneys}}</span>
        <button>{{item.btn}}</button>
      </div>
    </li>
  </ul>
</template>

<script>
  export default{
      name:'w_scoreShops',
      data(){
          return{
              lists:[
                {
                  src:require('./img/orange.png'),
                  name:'新西兰新西兰平平平平果',
                  title:'花蜜版的ppppppp果',
                  integral:'积分:',
                  num:'500',
                  money:'价值:',
                  moneys:'88¥',
                  btn:'立即兑换'
                },{
                  src: require('./img/orange.png'),
                  name: '新西兰新西兰平平平平果',
                  title: '花蜜版的ppppppp果',
                  integral: '积分:',
                  num: '500',
                  money: '价值:',
                  moneys: '88¥',
                  btn: '立即兑换'
                },{
                  src: require('./img/orange.png'),
                  name: '新西兰新西兰平平平平果',
                  title: '花蜜版的ppppppp果',
                  integral: '积分:',
                  num: '500',
                  money: '价值:',
                  moneys: '88¥',
                  btn: '立即兑换'
                },{
                  src: require('./img/orange.png'),
                  name: '新西兰新西兰平平平平果',
                  title: '花蜜版的ppppppp果',
                  integral: '积分:',
                  num: '500',
                  money: '价值:',
                  moneys: '88¥',
                  btn: '立即兑换'
                },{
                  src: require('./img/orange.png'),
                  name: '新西兰新西兰平平平平果',
                  title: '花蜜版的ppppppp果',
                  integral: '积分:',
                  num: '500',
                  money: '价值:',
                  moneys: '88¥',
                  btn: '立即兑换'
                },{
                  src: require('./img/orange.png'),
                  name: '新西兰新西兰平平平平果',
                  title: '花蜜版的ppppppp果',
                  integral: '积分:',
                  num: '500',
                  money: '价值:',
                  moneys: '88¥',
                  btn: '立即兑换'
                },{
                  src: require('./img/orange.png'),
                  name: '新西兰新西兰平平平平果',
                  title: '花蜜版的ppppppp果',
                  integral: '积分:',
                  num: '500',
                  money: '价值:',
                  moneys: '88¥',
                  btn: '立即兑换'
                },{
                  src: require('./img/orange.png'),
                  name: '新西兰新西兰平平平平果',
                  title: '花蜜版的ppppppp果',
                  integral: '积分:',
                  num: '500',
                  money: '价值:',
                  moneys: '88¥',
                  btn: '立即兑换'
                },{
                  src: require('./img/orange.png'),
                  name: '新西兰新西兰平平平平果',
                  title: '花蜜版的ppppppp果',
                  integral: '积分:',
                  num: '500',
                  money: '价值:',
                  moneys: '88¥',
                  btn: '立即兑换'
                }
              ]
          }
      }
  }
</script>

<style scoped>
  ul,li{list-style: none}
.w_scoreShops{
  width: 1280px;
  margin: 0 auto;
  overflow: hidden;
}
.w_scoreShops_list{
  position:relative;
  float: left;
  margin-top:10px;
  margin-bottom:20px;
}
.w_scoreShops_list img{
  border:1px solid #ececec;
}
.w_scoreShops_list img:hover{
  border:1px solid #4B943D;
}
.w_scoreShops_list:nth-child(4n-2){
  padding:0 17px;
}
.w_scoreShops_list:nth-child(4n-1){
  margin-right: 17px;
}
  .w_scoreShops_list_text{
    position: absolute;
    bottom:0px;
    padding:60px 40px 20px 40px;
    text-align: center;
  }
  .w_scoreShops_list_text h3{
    font-size: 20px;
    padding-bottom:15px;
  }
  .w_scoreShops_list_text h4{
    font-size: 16px;
    color: #7a7a7a;
    padding-bottom:15px;
  }
  .w_scoreShops_list_text span:nth-child(4){
    color:red;
    margin-right:40px;
    font-size: 20px;
  }
  .w_scoreShops_list_text button{
    display: block;
    padding:6px 40px;
    border:none;
    outline: none;
    background-color: #f08200;
    font-size: 18px;
    color: white;
    border-radius:20px;
    margin-left: 33px;
    margin-top: 20px;
  }
</style>
