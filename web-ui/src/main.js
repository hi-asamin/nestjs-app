import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Axiosのカスタマイズ
import http from './http'
Vue.prototype.$axios = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')