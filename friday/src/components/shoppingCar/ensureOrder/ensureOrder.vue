<template>
  <div class="ensureOrder">
    <div class="c_cover" v-show="appear"></div>
    <!--添加地址弹框-->
    <div class="c_alertAddress" v-show="appear">
      <h3>添加地址</h3>
      <table>
        <tr>
          <td>
            <span>*</span>收货人姓名:
          </td>
          <td>
            <input type="text" placeholder="收货人姓名">
          </td>
        </tr>
        <tr>
          <td><span>*</span>所在地区:</td>
          <td>
            <div class="c_select">
              <VDistpicker></VDistpicker>
            </div>
          </td>
        </tr>
        <tr>
          <td><span>*</span>详细地址:</td>
          <td><input type="text" placeholder="用于接收货物的详细地址"></td>
        </tr>
        <tr>
          <td><span>*</span>联系电话:</td>
          <td>
            <input type="text" placeholder="推荐使用手机号">
            <em>或固定电话:</em>
            <input type="text" placeholder="电话号码">
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="radio"> <span>设为常用地址</span>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button @click="addressHide()">返回</button>
            <button @click="">保存</button>

          </td>
        </tr>
      </table>

    </div>

    <div class="border">
      <div class="c_myShoppingCar_logo">
        <div class="c_myShoppingCar_logo_left">
          <router-link to="/index"><img src="./img/logo.png" alt=""></router-link>
        </div>
        <div class="c_myShoppingCar_logo_right">
          <span>我的购物车</span>
          <span>></span>
          <span>确认订单信息</span>
          <span>></span>
          <span>订单提交成功</span>
        </div>
      </div>
    </div>
    <!--中间部分1-->
    <div class="c_ensureOrder_content" v-show="firstCome">
    <div class="c_shopping_content">
      <h4>收货人信息</h4>
      <table>
        <tr>
          <td>
            <span>*</span>收货人姓名:
          </td>
          <td>
            <input type="text" placeholder="收货人姓名">
          </td>
        </tr>
        <tr>
          <td><span>*</span>所在地区:</td>
          <td>
            <div class="c_select">
              <VDistpicker></VDistpicker>
            </div>
          </td>
        </tr>
        <tr>
          <td><span>*</span>详细地址:</td>
          <td><input type="text" placeholder="用于接收货物的详细地址"></td>
        </tr>
        <tr>
          <td><span>*</span>联系电话:</td>
          <td>
            <input type="text" placeholder="推荐使用手机号">
            <em>或固定电话:</em>
            <input type="text" placeholder="电话号码">
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button @click="save()">确认并设为您的默认地址</button>
          </td>
        </tr>
      </table>
    </div>

    <div class="c_goods">
      <h2>商品信息</h2>
      <table border="1">
        <tr>
          <th>礼拜五生鲜</th>
          <th>规格</th>
          <th>数量</th>
          <th>单价</th>
          <th>金额</th>
        </tr>
        <tr v-for="every in arr">
          <td><img v-bind:src="every.imgUrl" alt="">{{every.name}}</td>
          <td>{{every.standard}}</td>
          <td><a href="javascript:void(0)">-</a><a href="javascript:void(0)">{{every.count}}</a><a href="javascript:void(0)">+</a></td>
          <td>¥{{every.price}}</td>
          <td>¥{{every.price}}</td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td>运费<span>¥</span><span>0</span></td>
          <td>商品金额<span>¥</span><span>2.00</span></td>
          <td>商家合集<span>¥</span><span>2.00</span></td>
        </tr>
      </table>
    </div>
    <!--发票信息-->
    <div class="c_bill">
      <h3>开票信息</h3>
      <span>发票抬头:</span>
      <input type="text">
      <span>*</span>
      <span>请填写后认真核对发票信息</span>
    </div>
<!--订单备注-->
    <div class="c_orderRemark">
      <h3>添加订单备注</h3>
      <input type="text" placeholder="限45字,请填写有关商品、支付、发票等信息">
    </div>
    <!--提交订单-->
    <div class="c_submitOrder">
        <h3>实付金额: <span>¥2.00</span></h3>
        <h4>订单完成后可获得积分: <span>3积分</span></h4>
        <button>提交订单</button>
    </div>
    </div>

    <!--中间部分2-->
    <div class="c_changeAddress_content" v-show="!firstCome">
      <button @click="goBack()">返回上一页</button>
      <div class="c_shopping_content">
        <h4>收货地址 <a href="javascript:void(0)" @click="addressShow()">使用新地址</a></h4>
        <ul>
          <li v-for="(address,index) in addressArr" v-show="flags==true||index==0">
            <input type="radio" value="" :checked="address.check" @click="checkOption(index)">
            <span>{{address.province}}</span>
            <span>{{address.city}}
             <em>{{address.defaultAddress}}</em>
            </span>
            <span>
              <button>修改为默认地址</button>
              <button @click="changeAddress()">修改</button>
              <button @click="deleteAddress(index)">删除</button>
            </span>
          </li>
          <li class="c_list" style="background: white;line-height: 40px">
            <a href="javascript:void(0)" @click="showList1()">展开其他地址<span> <span></span> </span></a>
            <a href="javascript:void(0)" @click="showList2()">收起地址<span> <span></span> </span></a>
          </li>
        </ul>
      </div>

      <div class="c_goods">
        <h2>商品信息</h2>
        <table border="1">
          <tr>
            <th>礼拜五生鲜</th>
            <th>规格</th>
            <th>数量</th>
            <th>单价</th>
            <th>金额</th>
          </tr>
          <tr v-for="every in arr">
            <td><img v-bind:src="every.imgUrl" alt="">{{every.name}}</td>
            <td>{{every.standard}}</td>
            <td><a href="javascript:void(0)">-</a><a href="javascript:void(0)">{{every.count}}</a><a href="javascript:void(0)">+</a></td>
            <td>¥{{every.price}}</td>
            <td>¥{{every.price}}</td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>运费<span>¥</span><span>0</span></td>
            <td>商品金额<span>¥</span><span>2.00</span></td>
            <td>商家合集<span>¥</span><span>2.00</span></td>
          </tr>
        </table>
      </div>
      <!--发票信息-->
      <div class="c_bill">
        <h3>开票信息</h3>
        <span>发票抬头:</span>
        <input type="text">
        <span>*</span>
        <span>请填写后认真核对发票信息</span>
      </div>
      <!--订单备注-->
      <div class="c_orderRemark">
        <h3>添加订单备注</h3>
        <input type="text" placeholder="限45字,请填写有关商品、支付、发票等信息">
      </div>
      <!--次日达-->
      <div class="c_tomorrowArrive">
        <h3>次日达·礼拜五专享</h3>
        <span>选择送达时间:</span> <span>2017-7-22</span> <span>10:00 - 11:00</span>
        <a href="javascript:void(0)" @click="clickTime()"><img src="./img/time.png" alt="">点击修改</a>

        <div class="c_timeList" v-show="saw">
          <span class="c_square"></span>
          <table border="1" cellspacing="0">
            <tr>
              <td>10:00 - 11:00</td>
              <td>11:00 - 12:00</td>
              <td>12:00 - 13:00</td>
              <td>13:00 - 14:00</td>
            </tr>
            <tr>
              <td>14:00 - 15:00</td>
              <td>15:00 - 16:00</td>
              <td>16:00 - 17:00</td>
              <td>17:00 - 18:00</td>
            </tr>
            <tr>
              <td>18:00 - 19:00</td>
              <td>19:00 - 20:00</td>
              <td>20:00 - 21:00</td>
              <td>21:00 - 22:00</td>
            </tr>

          </table>

          <button @click="cancelTime()">取消</button>
          <button>确定</button>
        </div>

      </div>
      <!--提交订单-->
      <div class="c_submitOrder">
        <h3>实付金额: <span>¥2.00</span></h3>
        <h4>订单完成后可获得积分: <b>3积分</b></h4>
        <router-link to="/shoppingCar/orderSuccess"><button>提交订单</button></router-link>
      </div>
    </div>

  </div>

</template>

<script>
  import VDistpicker from './v-distpicker/Distpicker.vue'
    export default {
        name: 'ensureOrder',
        data(){
            return {
                flags:true,
                showList: [],
                firstCome:true,
                saw:false,
                appear:false,
                arr:[
                  {
                      imgUrl:require("./img/beef.jpg"),
                      name:"牛肉",
                      standard:"无",
                      count:1,
                      price:1,
                  }
                ],
                addressArr:[
                    {
                      province:"河南省",
                      city:"永城市",
                      defaultAddress:"默认地址",
                      check:false,
                  },
                  {
                    province:"河南省",
                    city:"永城市",
                    defaultAddress:"默认地址",
                    check:false,
                  },
                  {
                    province:"河南省",
                    city:"永城市",
                    defaultAddress:"默认地址",
                    check:false,
                  },
                ]
            }
        },
        methods:{
          ensureCity(){
            this.$emit("ensureCity",true)
          },
          clickTime:function(){
              this.saw=true;
          },
          cancelTime:function(){
              this.saw=false;
          },
          addressShow:function(){
              this.appear=true;
          },
          addressHide:function(){
              this.appear = false;
          },
          changeAddress:function(){
              this.appear = true;
          },
          save:function(){
              this.firstCome=false;
          },
          deleteAddress:function(data){
              this.addressArr.splice(data,1);
          },
          showList1:function(a){
              this.flags=true;
          },
          showList2:function(a){
              this.flags = false;
          },
          goBack:function(){
              this.$router.back(-1);
          },
          checkOption:function(sub){
              for (let i=0;i<this.addressArr.length;i++){
                  this.addressArr[i].check = false;
              }
              console.log(sub);
              this.addressArr[sub].check = true;
          }
        },
        computed:{

        },
        components: {VDistpicker}
    }
</script>

<style scoped>
  ul{
    list-style: none;
  }
  .c_changeAddress_content {
    /*border: 1px solid ;*/
  }
  .c_cover{
    width: 100%;
    height: 100%;
    top:0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    z-index: 15;
  }
  /*添加地址弹框*/
  .c_alertAddress{
    position: fixed;
    width: 670px;
    height: 442px;
    background: #fff;
    border: 5px solid #e2e2e2;
    z-index: 20;
    left: 50%;
    margin-left: -335px;
    margin-top: 155px;
  }
  .c_alertAddress h3{
    color: #4b943d;
    line-height: 60px;
    padding-left: 40px;
    border-bottom:1px solid #ddd;
  }
  .c_alertAddress table{
    margin-left:30px;
    margin-top:10px;
  }
  .c_alertAddress table tr td:nth-child(1){
    text-align: right;
  }
  .c_alertAddress table tr td:nth-child(2){
    padding-left: 10px;
  }
  .c_alertAddress table tr td span{
    color: #f99e6e;
    padding-right: 5px;
  }
  .c_alertAddress table tr td{
    font-size: 18px;
    color: #555;
    padding-bottom: 30px;
  }
  .c_alertAddress table tr:nth-child(5) td{
    padding-bottom: 10px;
  }
  .c_alertAddress table tr:nth-child(4) td{
    padding-bottom: 10px;
  }
  .c_alertAddress table tr:nth-child(5) td span{
    font-size: 14px;
    color: #333;
  }
  .c_alertAddress table tr td input{
    padding-left: 10px;
    font-size: 14px;
  }
  .c_alertAddress table tr:nth-child(1) td input{
    width: 170px;
    height: 30px;
  }
  .c_alertAddress table tr:nth-child(2) td select{
    width: 140px;
    height: 30px;
    display: inline-block;
    margin-right: 20px;
  }
  .c_alertAddress table tr:nth-child(3) td input{
    width: 170px;
    height: 30px;
  }
  .c_alertAddress table tr:nth-child(4) input:nth-child(1){
    height: 30px;
    width: 170px;
  }
  .c_alertAddress table tr:nth-child(4) em{
    font-size: 14px;
    font-style: normal;
    font-weight:200;
    color: black;
  }
  .c_alertAddress table tr:nth-child(4) input:nth-child(3){
    width: 170px;
    height: 30px;
  }
  .c_alertAddress table tr:nth-child(6) button{
    width: 70px;
    height: 30px;
    border:none;
    outline:none;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
  }
  .c_alertAddress table tr:nth-child(6) button:nth-child(1){
    background: #999;
    margin-right: 135px;
  }
  .c_alertAddress table tr:nth-child(6) button:nth-child(2){
    background: #f08200;
  }


/*logo部分*/
  .border{
    width: 100%;
    border-bottom: 1px solid #dddddd;
  }
  .c_myShoppingCar_logo{
    width: 1280px;
    margin: 25px auto 0;
    overflow: hidden;
  }
  .c_myShoppingCar_logo_left{
    display: inline-block;
  }
  .c_myShoppingCar_logo_right{
    display: inline-block;
    float: right;
  }
  .c_myShoppingCar_logo_right span{
    line-height: 90px;
    font-size: 20px;
    color: #666;
    margin: 0 20px;
  }
  .c_myShoppingCar_logo_right span:nth-child(3){
    color: #F08200;
  }
  .c_shopping_content{
    width: 1280px;
    margin: 0 auto;
  }
  .c_shopping_content h4{
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    font-size: 18px;
    color: #666;
    font-weight: 400;
  }
  .c_shopping_content table{
    margin-left:30px;
    margin-top:20px;
  }
  .c_shopping_content table tr td:nth-child(1){
    text-align: right;
  }
  .c_shopping_content table tr td:nth-child(2){
    padding-left: 10px;
  }
  .c_shopping_content table tr td span{
    color: #f99e6e;
    padding-right: 5px;
  }
  .c_shopping_content table tr td{
    font-size: 18px;
    color: #555;
    padding-bottom: 30px;
  }
  .c_shopping_content table tr:nth-child(5) td{

    padding-bottom: 0px;
  }
  .c_shopping_content table tr td input{
    padding-left: 10px;
    font-size: 15px;
  }
  .c_shopping_content table tr:nth-child(1) td input{
    width: 170px;
    height: 32px;
  }
  .c_shopping_content table tr:nth-child(2) td select{
    width: 140px;
    height: 25px;
    display: inline-block;
    margin-right: 20px;
  }
  .c_shopping_content table tr:nth-child(3) td input{
    width: 170px;
    height: 32px;
  }
  .c_shopping_content table tr:nth-child(4) input:nth-child(1){
    height: 32px;
    width: 200px;
  }
  .c_shopping_content table tr:nth-child(4) em{
    font-size: 16px;
    font-style: normal;
    font-weight:200;
    color: black;
  }
  .c_shopping_content table tr:nth-child(4) input:nth-child(3){
    width: 170px;
    height: 32px;
  }

  .c_shopping_content table tr:nth-child(5) button{
    width: 200px;
    height: 42px;
    border: none;
    outline: none;
    border-radius: 5px;
    background: #f08200;
    color: white;
    font-size: 17px;
    display: inline-block;
    margin-left: 10px;
    margin-bottom: 10px;
  }
  /*商品信息*/
  .c_goods{
    width: 1280px;
    margin:0 auto;
  }
  a{
    text-decoration: none;
    color:#333;
  }
  .c_goods h2{
    border-top: 1px solid #ddd;
    padding-top:20px;
    padding-bottom: 10px;
  }
  .c_goods table{
    width:100%;
    text-align: center;
    border: 1px solid #ddd;
    border-collapse: collapse;
  }
  .c_goods table tr{
    border:1px solid #ddd;
  }
  .c_goods table tr td{
    border:0px;
  }
  .c_goods table tr th{
    border:0px;
  }
  .c_goods table tr:nth-child(1){
    font-size: 18px;
    height: 52px;
    background: #f2f2f2;
  }
  .c_goods table tr:nth-child(n+2){
    height: 100px;
  }
  .c_goods table tr:nth-child(n+2) td:nth-child(3) a:nth-child(1){
    display: inline-block;
    width: 30px;
    height: 30px;
    font-size: 20px;
    border:1px solid #ddd;
    background: #f2f2f2;
    margin-right: 20px;
    line-height: 30px;
  }
  .c_goods table tr:nth-child(n+2) td:nth-child(3) a:nth-child(3){
    display: inline-block;
    width: 30px;
    height: 30px;
    font-size: 20px;
    border:1px solid #ddd;
    background: #f2f2f2;
    margin-left: 20px;
    line-height: 30px;
  }
  .c_goods table tr:last-child{
    height: 70px;
    font-size: 18px;
    color:#666;
  }
  .c_goods table tr:last-child span{
    color:red;
  }
  .c_goods table tr:last-child span:nth-child(1){
    padding: 0 5px;
  }
  .c_goods table tr td img{
    width: 80px;
    height: 80px;
    vertical-align: middle;
    margin-right: 20px;
    border: 1px solid #ddd;
  }
  /*开票信息*/

  .c_bill{
    width: 1280px;
    margin:20px auto 0;
    border-top:1px solid #ddd;
    padding-top:20px;

  }
  .c_bill h3 {
    font-size: 20px;
    color: #666;
    padding-bottom: 10px;
  }
  .c_bill span:nth-child(2){
    color: #666;
  }
  .c_bill input:nth-child(3){
    width: 370px;
    height: 32px;
    padding: 0 5px;
    display: inline-block;
    margin: 0 10px;
  }
  .c_bill span:nth-child(4){
    color: #ed7848;
  }
  .c_bill span:nth-child(5){
    color: #707270;
  }
  /*订单备注*/
  .c_orderRemark{
    width: 1280px;
    margin:20px auto 0;
    border-top: 1px solid #ddd;
    padding-top:20px;
  }
  .c_orderRemark h3{
    font-size: 20px;
    color: #666;
    padding-bottom: 10px;
  }
  .c_orderRemark input{
    width: 650px;
    height: 32px;
    padding: 0 5px;
    font-size: 14px;
  }
  /*提交订单*/
  .c_submitOrder{
    text-align: right;
    width: 1280px;
    margin:20px auto 0;
    border-top: 1px solid #ddd;
    padding-top:20px;
  }
  .c_submitOrder h3{
    font-size: 20px;
    color: #666;
    padding-bottom: 5px;
    padding-top:30px;
  }
  .c_submitOrder h3 span{
    padding-left: 50px;
    color: #ff5757;
  }
  .c_submitOrder h4{
    font-size: 18px;
    color: #333;
    font-style: normal !important;
  }
  .c_submitOrder h4 b{
    padding-left: 50px;
    color: #ed8000;
  }
  .c_submitOrder button{
    width: 150px;
    height: 50px;
    border: none;
    outline:none;
    display: inline-block;
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 5px;
    color: white;
    font-size:20px;
    background: #ed8000;
  }

  /*中间部分2*/
  .c_changeAddress_content .c_shopping_content h4{
    border-bottom: none;
    font-size: 21px;
    padding-left:20px;
  }
  .c_changeAddress_content .c_shopping_content h4 a{
    width: 110px;
    height: 37px;
    border:none;
    outline: none;
    display: inline-block;
    line-height: 37px;
    text-align: center;
    float: right;
    margin-top: 10px;
    background: #ed8000;
    border-radius: 4px;
    color: white;
    font-size: 18px;
    margin-right: 20px;
  }
  .c_changeAddress_content .c_shopping_content ul li{
    background: #f4fff2;
    height: 37px;
    font-size: 14px;
    margin-top: 10px;
  }
  .c_changeAddress_content .c_shopping_content ul li input{
    display: inline-block;
    margin-top: 12px;
    margin-left: 10px;
  }
  .c_changeAddress_content .c_shopping_content ul li span:nth-child(2){
    margin-right: 30px;
    margin-left: 10px;
    color: #666;
  }
  .c_changeAddress_content .c_shopping_content ul li span:nth-child(3){
    color: #666;
  }
  .c_changeAddress_content .c_shopping_content ul li span:nth-child(4){
    float: right;
    margin-top: 8px;
    margin-right: 20px;
  }
  .c_changeAddress_content .c_shopping_content ul li span:nth-child(4) button{
    border:none;
    outline:none;
    font-size: 15px;
    color: #4b943d;
    background: transparent;
  }
  .c_changeAddress_content .c_shopping_content ul li span:nth-child(4) button:nth-child(1){
    color:#f1963e;
  }
  .c_changeAddress_content .c_shopping_content ul li span:nth-child(4) button:nth-child(2){
    margin-right: 20px;
    margin-left: 20px;
  }
  .c_list{
    line-height: 60px;
    background: white ;
  }
  .c_list a{
    color: #72af77;
    background: white;
  }
  .c_list a:nth-child(1)>span{
    height: 8px;
    width: 8px;
    display: inline-block;
    margin-left: 5px;
    border-bottom: 1px solid #72af77;
    border-left: 1px solid #72af77;
    transform: rotate(-45deg);
  }
  .c_list a:nth-child(2)>span span{
    position: absolute;
    height: 8px;
    width: 8px;
    left: 2px;
    top: -3px;
    display: inline-block;
    /*margin-left: 10px;*/
    border-bottom: 1px solid #72af77;
    border-left: 1px solid #72af77;
  }
  .c_list a:nth-child(2)>span{
    height: 8px;
    width: 8px;
    display: inline-block;
    margin-left: 5px;
    border-bottom: 1px solid #72af77;
    border-left: 1px solid #72af77;
    transform: rotate(135deg);
  }
  .c_list a:nth-child(1){
    margin-left: 10px;
    font-size: 14px;
  }
  .c_list a:nth-child(2){
    margin-left: 20px;
    font-size: 14px;
  }
  .c_list a:nth-child(1)>span span{
    position: absolute;
    height: 8px;
    width: 8px;
    left: 2px;
    top: -3px;
    display: inline-block;
    border-bottom: 1px solid #72af77;
    border-left: 1px solid #72af77;
  }
  /*次日达*/
  .c_tomorrowArrive{
    width: 1280px;
    margin: 20px auto 0;
    border-top: 1px solid #ddd;
  }
  .c_tomorrowArrive h3{
    font-size: 20px;
    color: #4b943d;
    line-height: 60px;
  }
  .c_tomorrowArrive span:nth-child(2){
    color: #666;
  }
  .c_tomorrowArrive span:nth-child(3){
    padding-left: 30px;
  }
  .c_tomorrowArrive span:nth-child(4){
    padding-left: 20px;
  }
  .c_tomorrowArrive a{
    padding-left: 40px;
    color: #498e3d;
  }
  .c_tomorrowArrive a img{
    vertical-align: top;
    padding-right:5px;
  }
  /*时间下拉菜单*/
  .c_timeList{
    width: 515px;
    height: 170px;
    background: #f8fff8;
    border: 1px solid #d7d7d7;
    position: relative;
    text-align: center;
    margin-left: 160px;
    margin-top: 13px;
  }
  .c_timeList table{
    /*width: 400px;*/
    margin: 20px auto;
    border: 1px solid #d7d7d7;
  }
  .c_timeList table tr td{
    padding: 3px;
  }
  .c_timeList table tr td:hover{
    cursor: pointer;
    color: #498e3d;
  }
  .c_timeList span{
    display: inline-block;
    position: absolute;
    width: 13px;
    height: 13px;
    top:-8px;
    z-index: 10;
    left: 251px;
    background: #f8fff8;
    border-bottom: 1px solid #d7d7d7;
    border-left: 1px solid #d7d7d7;
    transform: rotate(135deg);
  }
  .c_timeList button{
    width: 70px;
    height: 30px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 15px;
    color: white;
    display: inline-block;
  }
  .c_timeList button:nth-child(3){
    background: #999;
    margin-right: 30px;
  }
  .c_timeList button:nth-child(4){
    background: #f08200;
  }
</style>
