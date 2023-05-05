/*
 * @Author: 杜康
 * @Date: 2023-05-04 16:22:59
 * @LastEditors: 杜康
 * @LastEditTime: 2023-05-04 18:47:48
 * @FilePath: /晓羿V3/src/router/modules/noAuth.ts
 */
export default [
  {
    path: '/',
    name: 'Home',
    alias: '/home',
    redirect: '/home/index',
    component: () => import('@/components/home/index.vue'),
    meta: {
      requiresAuth: false
    },
    children: [
      {
        path: '/home/index',
        name: 'HomeIndex',
        component: () => import('@/components/home/home-index.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/login/index.vue'),
    meta: {
      requiresAuth: false
    }
  }
]