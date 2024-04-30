import Vue from 'vue'
import App from './App.vue'

import '@/static/css/reset.css'
// 导入路由
import router from '@/router/index'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
