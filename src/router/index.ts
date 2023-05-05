/*
 * @Author: 杜康
 * @Date: 2023-04-14 14:25:48
 * @LastEditors: 杜康
 * @LastEditTime: 2023-05-04 16:55:31
 * @FilePath: /晓羿V3/src/router/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'
// import { store } from '@/stores'
// import { useUserStore } from '@/stores/index'
import noAuth from './modules/noAuth'

// const user = useUserStore()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...noAuth
  ]
})


// 前置路由守卫
router.beforeEach((to, from, next) => {
  console.log('🚀 ~ file: index.ts:24 ~ router.beforeEach ~ next:', next)
  console.log('🚀 ~ file: index.ts:24 ~ router.beforeEach ~ from:', from)
  console.log('🚀 ~ file: index.ts:24 ~ router.beforeEach ~ to:', to)
  // 目标页面是否需要权限确认
  if (to.meta.requiresAuth) {
    // 判断用户是否已经登录
    // if (user.isAuthenticated) {
    //   // 
    // } else {
    //   // 用户未登录
    //   next({ name: 'Login' })
    // }
    next()
  } else {
    // 不需要确认权限直接访问
    next()
  }
  // if (to.meta.requiresAuth && !user.isAuthenticated) next({ name: 'Login' })
  // else next()
})

export default router
