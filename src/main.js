import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI, { Message } from 'element-ui'
import VueParticles from 'vue-particles'
import axios from './axios'

Vue.use(VueParticles)

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios=axios
Vue.prototype.$message=Message

router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    console.log("我是浏览器本地缓存的token:"+token);
    if (token === null || token === '') {
      next({path:"/"});
      alert("尚未登录!!");
    } else {
      next();
    }
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
