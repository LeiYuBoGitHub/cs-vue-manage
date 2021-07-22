import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/view/Home'
import Blow from '@/view/device/Blow'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/blow',
        name: 'Blow',
        component: Blow
      }
    ]
  }
]

// createRouter 创建路由实例
const router = createRouter({
  /**
   * hash模式：createWebHashHistory，
   * history模式：createWebHistory
   */
  history: createWebHashHistory(),
  routes
})

// 抛出路由实例, 在 main.js 中引用
export default router
