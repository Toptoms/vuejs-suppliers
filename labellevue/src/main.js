import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false



import VueRouter from 'vue-router'
import routes from './router/index.js'

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

