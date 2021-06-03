import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI, { Message } from 'element-ui'
import VueParticles from 'vue-particles'
import axios from './axios'
import store from './store'
import qs from 'qs'


Vue.use(VueParticles)

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios=axios
Vue.prototype.$message=Message


router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/login') {
   return next();
  } 
  let token = localStorage.getItem('Authorization');
  const tokenStr=window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
