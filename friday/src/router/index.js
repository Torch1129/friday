import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index/index.vue'
import login from '../components/login/login.vue'
import register from '../components/register/register.vue'
import sameCity from '../components/index/sameCity/sameCity.vue'
import scoreShop from '../components/index/scoreShop/scoreShop.vue'
import friday from '../components/index/friday/friday.vue'
import homePage from "../components/index/homePage/homePage.vue"
import personalCenter from '../components/index/personalCenter/personalCenter.vue'
import addressManage from '../components/index/personalCenter/addressManage/addressManage.vue'
import coupon from '../components/index/personalCenter/coupon/coupon.vue'
import feedback from '../components/index/personalCenter/feedback/feedback.vue'
import myAccount from '../components/index/personalCenter/myAccount/myAccount.vue'
import myCllect from '../components/index/personalCenter/myCllect/myCllect.vue'
import myInformation from '../components/index/personalCenter/myInformation/myInformation.vue'
import myOrder from '../components/index/personalCenter/myOrder/myOrder.vue'
import myScore from '../components/index/personalCenter/myScore/myScore.vue'
import myWallet from '../components/index/personalCenter/myWallet/myWallet.vue'
import personalProfile from '../components/index/personalCenter/personalProfile/personalProfile.vue'
import recentBrowser from '../components/index/personalCenter/recentBrowser/recentBrowser.vue'
import revisePassword from '../components/index/personalCenter/revisePassword/revisePassword.vue'
import scoreAccount from '../components/index/personalCenter/scoreAccount/scoreAccount.vue'
import goods from '../components/index/goods/goods.vue'
import shoppingCar from  '../components/shoppingCar/shoppingCar.vue'
import ensureOrder from '../components/shoppingCar/ensureOrder/ensureOrder.vue'
import myShoppingCar from '../components/shoppingCar/myShoppingCar/myShoppingCar.vue'
import orderSuccess from '../components/shoppingCar/orderSuccess/orderSuccess.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'index',
      component: index,
      children: [{
        path: '',
        name: 'homePage',
        component: homePage
      }]
    },
    {
      path: "/index",
      // name:'index',
      component: index,
      children: [
        {
          path: '/',
          // name:'homePage',
          component: homePage

        },
        {
          path: '/index/homePage',
          // name:'homePage',
          component: homePage

        },
        {
          path: '/index/sameCity/',
          name: 'sameCity',
          component: sameCity

        },
        {
          path: '/index/scoreShop',
          name: 'scoreShop',
          component: scoreShop
        },
        {
          path: '/index/friday',
          name: 'friday',
          component: friday
        },
        {
          path: '/index/goods',
          name: 'goods',
          component: goods
        },
        {
          path: "/index/personalCenter",
          name: 'personalCenter',
          component: personalCenter,
          children:[
            {
              path: "/index/personalCenter/addressManage",
              name: 'addressManage',
              component: addressManage,
            },
            {
              path: "/index/personalCenter/coupon",
              name: 'coupon',
              component: coupon,
            },
            {
              path: "/index/personalCenter/feedback",
              name: 'feedback',
              component: feedback,
            },
            {
              path: "/index/personalCenter/myAccount",
              name: 'myAccount',
              component: myAccount,
            },
            {
              path: "/index/personalCenter/myCllect",
              name: 'myCllect',
              component: myCllect,
            },
            {
              path: "/index/personalCenter/myInformation",
              name: 'myInformation',
              component: myInformation,
            },
            {
              path: "/index/personalCenter/myOrder",
              name: 'myOrder',
              component: myOrder,
            },
            {
              path: "/index/personalCenter/myScore",
              name: 'myScore',
              component: myScore,
            },
            {
              path: "/index/personalCenter/myWallet",
              name: 'myWallet',
              component: myWallet,
            },
            {
              path: "/index/personalCenter/personalProfile",
              name: 'personalProfile',
              component: personalProfile,
            },
            {
              path: "/index/personalCenter/recentBrowser",
              name: 'recentBrowser',
              component: recentBrowser,
            },
            {
              path: "/index/personalCenter/revisePassword",
              name: 'revisePassword',
              component: revisePassword,
            },
            {
              path: "/index/personalCenter/scoreAccount",
              name: 'scoreAccount',
              component: scoreAccount,
            },
          ]
        }
      ]
    },
    {
      path: '/shoppingCar',
      name: 'shoppingCar',
      component: shoppingCar,
      children:[
        {
          path: '/',
          name: 'myShoppingCar',
          component: myShoppingCar,
        },
        {
          path: '/shoppingCar/ensureOrder',
          name: 'ensureOrder',
          component: ensureOrder,
        },
        {
          path: '/shoppingCar/myShoppingCar',
          name: 'myShoppingCar',
          component: myShoppingCar,
        },
        {
          path: '/shoppingCar/orderSuccess',
          name: 'orderSuccess',
          component: orderSuccess,
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
