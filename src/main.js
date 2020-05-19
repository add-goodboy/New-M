import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
// 样式引入一定要注意顺序,否则全局样式会被其他组件样式覆盖,出现修改组件样式要加 !important 的尴尬
import 'vant/lib/index.css'
import '@/style/index.less'
// 加载动态设置 rem 基准值
import 'amfe-flexible'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
