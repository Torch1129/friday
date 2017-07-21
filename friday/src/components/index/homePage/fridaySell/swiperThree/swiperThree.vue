<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="swiperThree">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="swiper-slide" v-for="item in goodsInfor" :key="item.id">
        <div class="swiperBox">
          <img :src="item.to">
          <span>{{item.name}}</span>
          <span>礼拜五价:</span><span>{{item.price}}</span>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  // swiper options example:
  export default {
    name: 'swiperThree',
    data() {
      return {
         goodsInfor:[
           {
               to: require("./img/澳芒.jpg"),
               name: "澳芒" ,
               price: "¥20" ,
           },
           {
             to: require("./img/澳芒.jpg"),
             name: "澳芒" ,
             price: "¥20" ,
           },
           {
             to: require("./img/澳芒.jpg"),
             name: "澳芒" ,
             price: "¥20" ,
           },
           {
             to: require("./img/澳芒.jpg"),
             name: "澳芒" ,
             price: "¥20" ,
           },
           {
             to: require("./img/澳芒.jpg"),
             name: "澳芒" ,
             price: "¥20" ,
           },
           {
             to: require("./img/澳芒.jpg"),
             name: "澳芒" ,
             price: "¥20" ,
           }
         ],

        swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 5000,
          loop: true,
          autoplayDisableOnInteraction: false,
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          pagination: '.swiper-pagination',
          slidesPerView: 4,
          spaceBetween: 20,
          observeParents:true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart(swiper){
            console.log(swiper)
          },
          // more Swiper configs and callbacks...
          // ...
        }
      }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
//    mounted() {
//      // you can use current swiper instance object to do something(swiper methods)
//      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
//      console.log('this is current swiper instance object', this.swiper)
//      this.swiper.slideTo(3, 1000, false)
//    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped>
  .swiperThree{
    width: 100%;
    height: 500px;
  }
  .swiper-slide{
    margin-top: 40px;
    width: 300px;
    height: 450px;
    text-align: center;
    background: #F8f6f7;
    border:  1px solid transparent ;
  }
  .swiper-slide:hover{
     border:  1px solid #48943D ;
  }
  .swiperBox{
    height: 450px;
  }
  .swiper-slide img{
     margin-top: 10px;
     width: 95%;
  }
  .swiper-slide span:nth-child(2){
      display: block;
      font-size:18px;
      margin-top: 20px ;
     margin-bottom: 15px ;
  }
  .swiper-slide span:nth-child(3){
      font-size: 18px;
      color: #f29941;
      padding-right: 15px;
  }
  .swiper-slide span:nth-child(4){
    font-size: 20px;
    color: #ff5757
  }

</style>

