import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入第三方的组件库 mint ui
// 1 完整引入mint ui 组件库中的所有组件
import MintUI from 'mint-ui'
// 2 单独引入mint ui 组件库中的样式文件
import 'mint-ui/lib/style.css'
// 3 将 mint ui 注册到Vue 实例中
Vue.use(MintUI)
// 4 将字体图标引入到项目中
import '@/font/iconfont.css'
// 引入axios模块
import axios from 'axios'
Vue.prototype.axios = axios;





Vue.config.productionTip = false


new Vue({
  //挂载路由对象
  router,
  render: h => h(App)
}).$mount('#app')
