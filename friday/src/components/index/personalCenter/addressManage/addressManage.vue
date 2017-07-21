<template>
  <div class="addressManage">

    <div id="c_addressContent" v-show="flag">
      <h4>地址管理 <a href="javascript:void(0)" @click="clickNew1()">添加新地址</a></h4>
      <div class="c_contentMiddle" v-show="seen">
        <img src="img/pencil.png" alt="">
        <span>暂无收货地址,请点击</span>
        <a href="javascript:void(0)" @click="clickNew2()">添加新地址</a>
      </div>

      <table v-show="!seen">
        <tr>
          <th>收货人</th>
          <th>所在区域</th>
          <th>街道地址</th>
          <th>联系电话</th>
          <th>备注</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in list">
          <td>{{item.user}}</td>
          <td>{{item.area}}</td>
          <td>{{item.address}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.remark}}</td>
          <td>
            <button>设为默认地址</button>
            <span>|</span>
            <button>修改</button>
            <span>|</span>
            <button>删除</button></td>
        </tr>
      </table>

    </div>

<!--添加新地址-->
    <div id="c_newAddress" v-show="!flag">
      <h4>添加新地址</h4>
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
            <input type="checkbox">
            <i>设为常用地址</i>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button @click="save()">保存</button>
          </td>
        </tr>

      </table>

    </div>




  </div>

</template>

<script>
    import VDistpicker from './v-distpicker/Distpicker.vue'
    export default {
        name: 'addressManage',
        data(){
            return {
                flag:true,
                seen:true,
                list:[
                  {
                    user:"王珂",
                    area:"河南省郑州市",
                    address:"高新区莲花街",
                    phone:18862756601,
                    remark:"现居地址"
                  },
                  {
                    user:"王珂",
                    area:"河南省郑州市",
                    address:"高新区莲花街",
                    phone:18862756601,
                    remark:"现居地址"
                  },
                  {
                    user:"王珂",
                    area:"河南省郑州市",
                    address:"高新区莲花街",
                    phone:18862756601,
                    remark:"现居地址"
                  },
                  {
                    user:"王珂",
                    area:"河南省郑州市",
                    address:"高新区莲花街",
                    phone:18862756601,
                    remark:"现居地址"
                  },
                  {
                    user:"王珂",
                    area:"河南省郑州市",
                    address:"高新区莲花街",
                    phone:18862756601,
                    remark:"现居地址"
                  }
                ]

            }
        },
        methods:{
          ensureCity(){
            this.$emit("ensureCity",true)
          },
          clickNew1:function(){
              this.flag=false;
          },
          clickNew2:function(){
            this.flag=false;
          },
          save:function(){
            this.seen=false;
            this.flag=true;
          },
        },
        components: {VDistpicker}
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
  #c_addressContent {
    width: 1085px;
    height: 628px;
    border: 1px solid #e9e9e9;
    float: left;
  }
  #c_addressContent h4 {
    border-bottom: 1px solid #e9e9e9;
    font-size: 20px;
    color: #323333;
    line-height: 60px;
    padding-left: 20px;
    font-weight:200;
  }
  #c_addressContent h4 a{
    display: inline-block;
    background: #3d8e43;
    width: 90px;
    height: 30px;
    font-size: 16px;
    line-height: 30px;
    color: white;
    text-align: center;
    float: right;
    margin-top: 15px;
    margin-right: 20px;
    border-radius: 5px;
  }
  .c_contentMiddle{
    text-align: center;
    margin-top: 260px;
  }
  .c_contentMiddle a{
    display: inline-block;
    background: #3d8e43;
    width: 90px;
    height: 30px;
    font-size: 16px;
    line-height: 30px;
    color: white;
    text-align: center;
    margin-top: 15px;
    margin-right: 20px;
    border-radius: 5px;
  }
  .c_contentMiddle span{
    padding: 0 20px;
    color: #999;
    font-size: 18px;
    font-weight: 300;
  }
  .c_contentMiddle img{
    vertical-align: middle;
  }
  #c_addressContent table{
    width: 1045px;
    text-align:center;
    margin:20px auto;
    border-collapse: collapse;
    border: 1px solid #e9e9e9;
  }
  #c_addressContent table tr:nth-child(1){
    background: #f2f2f2;
  }
  #c_addressContent table tr:nth-child(n+2):hover{
    background: #f3fff3;
  }
  #c_addressContent table tr{
    line-height: 55px;
    border:1px solid #e9e9e9;
  }
  #c_addressContent table tr td{
    font-size: 14px;
    color: #969696;
    border: 0px;
  }
  #c_addressContent table tr th{
    border: 0px;
    color: #6d6d6d;
  }
  #c_addressContent table tr td button{
    border:none;
    outline: none;
    background: transparent;
    color: #3e9444;
    font-size: 14px;
  }
  #c_addressContent table tr td button:nth-child(1){
    color:#f89437;
  }

  /*添加新地址*/

  #c_newAddress {
    width: 1085px;
    height: 628px;
    border: 1px solid #e9e9e9;
    float: left;
  }
  #c_newAddress h4 {
    border-bottom: 1px solid #e9e9e9;
    font-size: 20px;
    color: #323333;
    line-height: 60px;
    padding-left: 20px;
    font-weight:200;
  }
  #c_newAddress table{
    margin-left:30px;
    margin-top:40px;
  }
  #c_newAddress table tr td:nth-child(1){
    text-align: right;
  }
  #c_newAddress table tr td:nth-child(2){
    padding-left: 10px;
  }
  #c_newAddress table tr td span{
    color: #f99e6e;
    padding-right: 5px;
  }
  #c_newAddress table tr td{
    font-size: 18px;
    color: #555;
    padding-bottom: 30px;
  }
  #c_newAddress table tr td input{
    padding-left: 10px;
    font-size: 15px;
  }
  #c_newAddress table tr:nth-child(1) td input{
    width: 170px;
    height: 32px;
  }
  #c_newAddress table tr:nth-child(2) td select{
    width: 140px;
    height: 25px;
    display: inline-block;
    margin-right: 20px;
  }
  #c_newAddress table tr:nth-child(3) td input{
    width: 170px;
    height: 32px;
  }
  #c_newAddress table tr:nth-child(4) input:nth-child(1){
    height: 32px;
    width: 200px;
  }
  #c_newAddress table tr:nth-child(4) em{
    font-size: 16px;
    font-style: normal;
    font-weight:200;
    color: black;
  }
  #c_newAddress table tr:nth-child(4) input:nth-child(3){
    width: 170px;
    height: 32px;
  }
  #c_newAddress table tr:nth-child(5) i{
    font-style: normal;
  }
  #c_newAddress table tr:nth-child(5) input{
   padding: 5px;
  }
  #c_newAddress table tr:nth-child(6) button{
    width: 150px;
    height: 42px;
    border: none;
    outline: none;
    border-radius: 5px;
    background: #f08200;
    color: white;
    font-size: 17px;
  }

  /*地址管理*/
</style>
