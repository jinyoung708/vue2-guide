import Vue from 'vue'
import App from './App.vue'

// router 연결
import router from './router'

// 전역 함수 연결
import common from '@/assets/js/ui';

// 공통 scss 연결
import '@/assets/scss/style.scss' 
import '@/assets/scss/guide/_reset.scss'

// 플러그인 연결
import '@/plugins/highlight'

Vue.config.productionTip = false
Vue.use(common)

new Vue({  
  render: h => h(App),
  router,
}).$mount('#app')
