import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from "mint-ui"
import axios from "axios"

axios.defaults.withCredentials=true

  axios.jsonp=function(url,data){
    return new Promise(
      function(resolve,reject){
        var script=null;
        var ms=new Date().getTime();
        var r=parseInt(Math.random()*9000+1000);
        var fname=`doit${ms}${r}`;
        window[fname]=function(res){
          resolve(res);
          document.head.removeChild(script);
          delete window[fname];
        }
        script=document.createElement("script");
        script.src=`${url}?${data}&&callback=${fname}`;
        document.head.appendChild(script);
      }
    )   
  }


Vue.prototype.axios=axios;
Vue.use(MintUI)

import Vuex from "vuex"
Vue.use(Vuex)
// var store=new Vuex.Store({
//     state:{cartCount:0},//共享数据
//     mutations:{//添加修改数据的函数
//       increment(state){

//       },
//       clear(state){
        
//       }
//     },
//     getters:{//添加获取数据的函数
//       getCartCount(state){

//       }
//     },
//     actions:{}  //添加异步操作数据的函数

// })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
