<template>
  <div class="sameCity">
    <div class="c_list">
      <span disabled>一级分类:</span>
      <span v-bind:class="className=='all'?active:''" v-on:click="all()">全部</span>
      <span v-for="items in arr" v-bind:class="className==items.code?active:''"
            v-on:click="click(items.code)">{{items.server}}</span>
    </div>
    <div class="c_line"></div>
    <ul class="c_allServer" v-for="item in list" v-show='flag||className==item.code?true:false'>
      <li>
        <img :src="item.imgUrl" alt="">
        <div class="c_name">{{item.server}}</div>
        <div class="c_price">
          <span class="c_star"></span>
          <span class="c_star1">¥69/人</span>
        </div>
        <div class="c_footer">{{item.market}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'sameCity',
    methods: {
      all(){
          this.className = 'all';
          this.flag = true;
      },
      click(data){
        this.className = data;
        this.flag = false;
      }
    },
    data(){
      return {
        className: 'all',
        active: 'c_active',
        flag: true,
        list: [
          {
            imgUrl: require('./img/xidi.jpg'),
            server: '洗涤服务',
            market: '礼拜五商城',
            code: "xidi"
          },
          {
            imgUrl: require('./img/weixiu.jpg'),
            server: '维修服务',
            market: '礼拜五商城',
            code: "weixiu"
          },
          {
            imgUrl: require('./img/banjia.jpg'),
            server: '搬家服务',
            market: '礼拜五商城',
            code: 'banjia'
          },
          {
            imgUrl: require('./img/jiazheng.jpg'),
            server: '家政服务',
            market: '礼拜五商城',
            code: 'jiazheng'
          },
          {
            imgUrl: require('./img/carServer.jpg'),
            server: '汽车服务',
            market: '礼拜五汽车服务中心',
            code: 'qiche'
          },
          {
            imgUrl: require('./img/wanggou.jpg'),
            server: '网购服务',
            market: '礼拜五商城',
            code: 'wanggou'
          },
          {
            imgUrl: require('./img/lvyou.jpg'),
            server: '旅游服务',
            market: '礼拜五商城',
            code: 'lvyou'
          },
          {
            imgUrl: require('./img/paizhao.jpg'),
            server: '拍照服务',
            market: '礼拜五商城',
            code: 'paizhao'
          },
          {
            imgUrl: require('./img/hunqing.jpg'),
            server: '婚庆服务',
            market: '礼拜五商城',
            code: 'hunqing'
          },
          {
            imgUrl: require('./img/internet.jpg'),
            server: '互联网服务',
            market: '礼拜五商城',
            code: 'hulianwang'
          },
        ],
        arr:[
          {
            server: "洗涤服务",
            code: 'xidi'
          },
          {
            server: "家政服务",
            code: 'jiazheng'
          },
          {
            server: "维修服务",
            code: 'weixiu'
          },
          {
            server: "搬家服务",
            code: 'banjia'
          },
          {
            server: "汽车服务",
            code: 'qiche'
          },
          {
            server: "网购服务",
            code: 'wanggou'
          },
          {
            server: "旅游服务",
            code: 'lvyou'
          },
          {
            server: "拍照服务",
            code: 'paizhao'
          },
          {
            server: "婚庆服务",
            code: 'hunqing'
          },
          {
            server: "互联网服务",
            code: 'hulianwang'
          }
        ]
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

  .sameCity {
    width: 1280px;
    margin: 14px auto;
    overflow: hidden;
    /*padding-left: 0;*/
    /*border:1px solid;*/
  }

  .c_list {
    font-size: 15px;

  }

  .c_list span {
    display: inline-block;
    margin-right: 10px;
    padding: 5px 10px;
  }

  .c_line {
    width: 1280px;
    height: 1px;
    background: rgb(221, 221, 221);
    margin-top: 20px;
  }

  .c_active {
    background: rgb(100, 146, 66);
    color: white;
  }

  .c_list span:hover {
    background: rgb(100, 146, 66);
    color: white;
    cursor: pointer;
  }

  .c_list span:nth-child(1):hover {
    background: white;
    color: #000;
  }

  .c_allServer {
    width: 305px;
    height: 415px;
    list-style: none;
    float: left;
    border: 1px solid rgb(236, 236, 236);
    text-align: center;
    margin-top: 15px;
    margin-right: 13px;
    background: rgb(248, 246, 247);
  }

  .c_allServer li {
    width: 100%;
    height: 100%;
  }

  .c_allServer:hover {
    border: 1px solid rgb(63, 121, 43);
  }

  .c_allServer li img {
    float: left;
    width: 100%;
    height: 305px;
    display: block;
    vertical-align: top;
  }

  .c_name {
    font-size: 26px;
    font-weight: bold;
    line-height: 50px;
    /*margin-top: 30px;*/
    /*padding: 50px;*/
    /*border: 1px solid;*/
  }

  .c_price {
    color: rgb(212, 111, 40);
    font-size: 15px;
    position: relative;
    /*border: 1px solid;*/
    /*overflow: hidden;*/
  }

  .c_price .c_star {
    width: 87px;
    height: 14px;
    top: 3px;
    left: 70px;
    position: absolute;
    background: url(./img/xingxing.png) 0 -20px;
  }

  .c_price .c_star1 {
    position: absolute;
    right: 70px;
    top: 0px;
    z-index: 10;
  }

  .c_footer {
    margin-top: 30px;
    font-size: 15px;
    color: rgb(132, 132, 132);
  }

</style>
