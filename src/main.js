import Vue from 'vue'
import App from './App.vue'

// router 연결
import router from './router'

// 전역 함수 연결
import common from '@/assets/js/ui';

// 공통 scss 연결
import '@/assets/scss/style.scss' 
import '@/assets/scss/guide/_reset.scss'

// highlight
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/github-dark.css' // 테마 css 파일 연결

// lottie
import "@lottiefiles/lottie-player";

Vue.config.productionTip = false
Vue.use(common)
Vue.use(VueHighlightJS)

new Vue({  
  render: h => h(App),
  router,
}).$mount('#app')
