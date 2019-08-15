import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Login from './views/login.vue'
import Reg from './views/reg.vue'
import Myself from './views/myself.vue'
import Test from './views/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',component: Index},
    {path:'/login',component:Login},
    {path:'/reg',component:Reg},
    {path:'/myself',component:Myself},
    {path:'/test',component:Test},
    
  ]
})
