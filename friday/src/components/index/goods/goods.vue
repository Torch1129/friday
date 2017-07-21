<template>
  <div class="goods">
    <div class="goods_headerNav1">
      <span>您的当前位置:</span>
      <router-link class="goods_link" to="/">首页</router-link>
      <em>&gt;</em>
      <router-link to="/" class="goods_link">全部商品</router-link>
      <em>&gt;</em>
      <router-link to="/" class="goods_link">田园蔬菜</router-link>
      <em>&gt;</em>
      <router-link to="/" class="goods_link">进口蔬菜</router-link>
    </div>
    <div class="goods_headerNav2">
      <span>一级分类:</span>
      <em v-for="(item,index) in list" v-on:click="click1(item.code,index)"
          v-bind:class="item.code==flag?active:''">{{item.oneKind}}</em>
    </div>
    <div class="goods_headerNav3" v-show="flag1">
      <span>二级分类:</span>
      <div v-for="(item,index) in list" class="goods_headerNav3_kind" v-show="item.code==flag?true:false">
        <em v-for="items in item.twoKind" v-bind:class="items.code==flag2?active:''" v-on:click="click2(items.code)">{{items.kind}}</em>
      </div>
    </div>
    <div class="goods_headerNav4">
      <span>排序:</span>
      <em>销量</em>
      <em>价格从低到高</em>
      <em>价格从高到低</em>
      <em>评价最高</em>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'goods',
    methods: {
      click1(data, index){
        this.flag = data;
        this.flag1 = true;
        this.flag2= 'quanbu';
      },
      click2(data){
        this.flag2 = data;
      }
    },
    data(){
      return {
        active: 'goods_active',
        flag: 'quanbu',
        flag1: false,
        flag2: 'quanbu',
        index: 0,
        list: [
          {
            oneKind: '全部',
            code: 'quanbu',
            twoKind: [],
            flag: false,
          },
          {
            oneKind: '新鲜水果',
            code: 'shuiguo',
            twoKind: [
              {
                kind: '全部',
                code: 'quanbu'
              },
              {
                kind: '水果礼盒',
                code: 'lihe'
              },
              {
                kind: '进口水果',
                code: 'jinkou'
              },
              {
                kind: '有机水果',
                code: 'youji'
              },
              {
                kind: '国产水果',
                code: 'guochan'
              }
            ],
            flag: false,
          },
          {
            oneKind: '田园蔬菜',
            code: 'shucai',
            twoKind: [
              {
                kind: '全部',
                code: 'quanbu'
              },
              {
                kind: '蔬菜礼篮',
                code: 'lilan'
              },
              {
                kind: '有机蔬菜',
                code: 'youji'
              },
              {
                kind: '地产蔬菜',
                code: 'dichan'
              },
              {
                kind: '进口蔬菜',
                code: 'jinkou'
              }
            ],
            flag: false,
          }, {
            oneKind: '肉类家禽',
            code: 'jiaqin',
            twoKind: [
              {
                kind: '全部',
                code: 'quanbu'
              },
              {
                kind: '羊肉',
                code: 'yang'
              },
              {
                kind: '牛肉',
                code: 'niu'
              },
              {
                kind: '鸡鸭肉',
                code: 'jiya'
              },
              {
                kind: '鱼肉',
                code: 'yu'
              }
            ],
            flag: false,
          }, {
            oneKind: '海鲜水产',
            code: 'shuichan',
            twoKind: [
              {
                kind: '全部',
                code: 'quanbu'
              },
              {
                kind: '海鲜礼盒',
                code: 'lihe'
              },
              {
                kind: '国产海鲜',
                code: 'guochan'
              },
              {
                kind: '进口海鲜',
                code: 'jinkou'
              },
              {
                kind: '干货其他',
                code: 'ganhuo'
              }
            ],
            flag: false,
          }, {
            oneKind: '优选食材',
            code: 'shicai',
            twoKind: [
              {
                kind: '全部',
                code: 'quanbu'
              },
              {
                kind: '优选米面',
                code: 'mimian'
              },
              {
                kind: '优选杂粮',
                code: 'zaliang'
              },
              {
                kind: '粮油调味',
                code: 'tiaowei'
              }
            ],
            flag: false,
          }, {
            oneKind: '零食酒水',
            code: 'jiushui',
            twoKind: [
              {
                  kind: '全部',
                code:'quanbu'
              },
              {
                  kind: '零食',
                code:'lingshi'
              },
              {
                  kind: '特色干果',
                code:'ganguo'
              },
              {
                  kind: '休闲冲饮',
                code:'chongyin'
              },
              {
                  kind: '茶叶',
                code:'chaye'
              },
              {
                  kind: '白酒',
                code:'baijiu'
              },
              {
                  kind: '啤酒',
                code:'pijiu'
              },
              {
                  kind: '葡萄酒',
                code:'putao'
              },
              {
                  kind: '其他酒品',
                code:'qita'
              }
            ],
            flag: false,
          }, {
            oneKind: '蛋奶速食',
            code: 'sushi',
            twoKind: [
              {
                  kind: '全部',
                code:'quanbu'
              },
              {
                  kind: '方便速食',
                code:'sushi'
              },
              {
                  kind: '奶制品',
                code:'naizhipin'
              },
              {
                  kind: '面包甜点',
                code:'mianbao'
              },
              {
                  kind: '蛋品',
                code:'danpin'
              }
            ],
            flag: false,
          }, {
            oneKind: '全球代购',
            code: 'daigou',
            twoKind: [
              {
                  kind: '全部',
                code:'quanbu'
              },
              {
                  kind: '保健品',
                code:'baojian'
              },
              {
                  kind: '洗护用品',
                code:'xidi'
              },
              {
                  kind: '农副产品',
                code:'nongfu'
              },
              {
                  kind: '母婴用品',
                code:'muying'
              }
            ],
            flag: false,
          },
        ]
      }
    },
    components: {}
  }
</script>

<style scoped>
  .goods {
    width: 1280px;
    margin: 20px auto;
  }

  .goods_headerNav1 {
    width: 1240px;
    background: #F4F4F4;
    padding: 20px;
    color: #666;
  }

  .goods_link {
    font-size: 14px;
    text-decoration: none;
    color: #666666;
  }

  .goods span {
    font-size: 14px;
  }

  .goods em {
    font-style: normal;
    padding: 0 10px;
  }

  .goods_headerNav2 {
    padding: 10px 0;
    border-bottom: 1px solid #dddddd;
    font-size: 14px;
  }

  .goods_headerNav2 span {
    display: inline-block;
    padding: 5px 10px;
  }

  .goods_headerNav2 em {
    display: inline-block;
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
  }

  .goods_headerNav3 {
    padding: 10px 0;
    border-bottom: 1px solid #dddddd;
    font-size: 14px;
  }
  .goods_headerNav4{
    padding: 10px 0;
    font-size: 14px;
  }
  .goods_headerNav3 span {
    display: inline-block;
    padding: 5px 10px;
  }

  .goods_headerNav3_kind em {
    display: inline-block;
    padding: 5px 10px;
    cursor: pointer;
  }
  .goods_headerNav4 em{
    display: inline-block;
    padding: 5px 10px;
    cursor: pointer;
  }
  .goods_active {
    background: #4B943D;
    color: #ffffff;
  }

  .goods_headerNav3_kind {
    display: inline-block;
  }
</style>
