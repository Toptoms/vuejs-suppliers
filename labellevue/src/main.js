import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false



import VueRouter from 'vue-router'
import routes from './router/index.js'

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})


import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDf43lPdwlF98RCBsJOFNKOkoEjkwxb5Sc',
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");