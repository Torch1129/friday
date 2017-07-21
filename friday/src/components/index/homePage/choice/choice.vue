<template>
  <div class="choice">
    <router-link :to="item.to" v-for="item in goods" :key="item.id"><img v-bind:src="item.img" alt=""></router-link>
  </div>
</template>

<script>
    export default {
        name: 'choice',
        data(){
            return {
                goods:[
                  {
                      to: "/index",
                      img:require("./img/choice1.jpg")
                  },
                  {
                      to: "/index",
                      img:require("./img/choice2.jpg")
                  },
                  {
                      to: "/index",
                      img:require("./img/choice3.jpg")
                  },
                  {
                      to: "/index",
                      img:require("./img/choice4.jpg")
                  }
                ]
            }
        },
        components: {}
    }
</script>

<style scoped>
    .choice{
      width: 1280px;
      margin: 20px auto;
      display: flex;
      justify-content: space-around;
    }
    .choice img{
      width: 300px;
      height: 140px;
    }
</style>
