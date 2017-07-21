<template>
    <div class="fridaySell">
        <div class="p_fridaySell_header">
          <div class="p_fridaySell_headerLeft">
            <img src="./img/clock.png" alt="">
            <span>礼拜五</span>
            <span>friday</span>
          </div>
          <div class="p_firdaySell_headerRight">
              <span>距离开始</span>
              <em>{{day}}天</em>
              <em>{{hours}}</em>
              <i>:</i>
              <em>{{minute}}</em>
              <i>:</i>
              <em>{{second}}</em>
              <span>更多></span>
          </div>
        </div>
        <swiperThree></swiperThree>
    </div>
</template>

<script>
import swiperThree from "./swiperThree/swiperThree.vue"
    export default {
        name: 'fridaySell',
        data(){
            return {
                day: "" ,
                hours: "" ,
                minute: "" ,
                second: "" ,
            }
        },
      created() {
            this.countdowm()
        },
        methods:{
           countdowm:function(){
               let _this = this;
               let time = setInterval(function () {
                  let nowTime = new Date();
                  let endTime = 1500566400000;
                  let week = 604800000;
                  let flag = false;
                  if(nowTime>endTime){
                      while(flag){
                        endTime+=week;
                        if(nowTime<endTime){
                            flag = true;
                        }
                      }
                  }
                  let t = endTime - nowTime;
                  if(t>0){
                    let day = Math.floor(t/86400000);
                    let hour=Math.floor((t/3600000)%24);
                    let min=Math.floor((t/60000)%60);
                    let sec=Math.floor((t/1000)%60);
                    _this.day = day;
                    _this.hours = hour < 10 ? "0" + hour : hour;
                    _this.minute = min < 10 ? "0" + min : min;
                    _this.second = sec < 10 ? "0" + sec : sec;
                  }

               },1000)
           }
        },
        components: {
            swiperThree
        }
    }
</script>

<style>
   .fridaySell{
     width: 1280px;
     margin:20px auto;
   }
  .p_fridaySell_header{
     padding: 27px 0 30px 0;
     width: 1280px;
     background: #EBFFE8;
     border-bottom:1px solid #498E3D;
     overflow: hidden;
  }
  .p_fridaySell_headerLeft{
    float: left;
    padding-left: 27px;
  }
  .p_fridaySell_headerLeft img{
      width: 40px;
      height: 40px;
      vertical-align: bottom;
      padding-right: 20px;
  }
   .p_fridaySell_headerLeft span:nth-child(2){
     font-size: 30px;
     color: #498e3d;
     padding-right: 17px;
   }
   .p_fridaySell_headerLeft span:nth-child(3){
     font-size: 20px;
     color: #9ea09e;
   }
  .p_firdaySell_headerRight{
    float: right;
    padding-right: 27px;
  }
   .p_firdaySell_headerRight span {
     font-size: 20px;
     color: #4B943D;
     line-height: 40px;
   }
   .p_firdaySell_headerRight em{
     border-radius: 5px;
     font-size: 20px;
     line-height: 40px;
     text-align: center;
     display: inline-block;
     width: 60px;
     height: 40px;
     background: #F08200;
     color: white;
     margin-left: 5px;
     font-style: normal;
   }
  .p_firdaySell_headerRight i{
    font-style: normal;
    margin-left: 5px;
    text-align: center;
    color: #F08200;
    font-size: 20px;
  }
</style>
