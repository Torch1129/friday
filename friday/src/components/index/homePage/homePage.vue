<template>
    <div class="homePage">
        <swiperOne></swiperOne>
        <choice></choice>
        <fridaySell></fridaySell>
        <goodsKinds></goodsKinds>
    </div>
</template>

<script>
import goodsKinds from './goodsKinds/goodsKinds.vue'
import swiperOne from './swiperOne/swiperOne.vue'
import choice from './choice/choice.vue'
import fridaySell from "./fridaySell/fridaySell.vue"
    export default {
        name: 'homePage',
        data(){
            return {}
        },
        components: {
            goodsKinds,
            swiperOne,
            choice,
            fridaySell
        }
    }
</script>

<style>

</style>
