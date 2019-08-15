import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from "mint-ui"
import axios from "axios"

axios.defaults.withCredentials=true
Vue.prototype.axios=axios;
Vue.use(MintUI)
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
