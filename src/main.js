import Vue from 'vue'
import App from './App.vue'
import router from './router'
import common from '@/assets/js/ui';
import '@/assets/scss/style.scss'
import '@/assets/scss/guide/_reset.scss'
import '@/plugins/highlight'

Vue.config.productionTip = false
Vue.use(common)

new Vue({  
  render: h => h(App),
  router,
}).$mount('#app')
