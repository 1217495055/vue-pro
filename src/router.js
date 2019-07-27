import Vue from 'vue'
import Router from 'vue-router'


// 为 Exam01.vue组件指定访问路径
// 1 在 router.js 引入组件
import Index from "@/components/exam/index.vue"
import Exam02 from '@/components/exam/Exam02.vue'
Vue.use(Router)
// 2 为组件指定访问的路径  /Exam01
export default new Router({
  routes: [
    {path:'/',component:Index},
    {path:'/Exam02',component:Exam02}
  ]
})
