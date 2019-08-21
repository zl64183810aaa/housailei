import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from "mint-ui"

// 单独引入mint-ui中的样式文件
import "mint-ui/lib/style.css"
// 将mint-ui注册到vue实例中
Vue.use(MintUI)
// 将字体图标引入到当前项目中
import "./font/iconfont.css"
// 引入axios第三方ajax模块
import axios from "axios"
// 配置axios基础路径
// axios.defaults.baseURL="http://127.0.0.1:3000/"
//配置axios保存session信息
axios.defaults.withCredentials=true
// 将axios注册到vue实例中
// 由于axios不支持use  将实例添加vue原型
Vue.prototype.axios=axios;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
