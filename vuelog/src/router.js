import Vue from 'vue'
import Router from 'vue-router'
// import Index from './views/index.vue'
// import Login from './views/login.vue'
// import Reg from './views/reg.vue'
import Home from './views/Home.vue'
import Myorder from './views/Myorder.vue'
import Myprofile from './views/Myprofile.vue'



Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/',component: Index},
    // {path:'/login',component:Login},
    // {path:'/reg',component:Reg},
    {path:'/Home',component:Home},
    {path:'/Myorder',component:Myorder},
    {path:'/Myprofile',component:Myprofile}
  ]
})
