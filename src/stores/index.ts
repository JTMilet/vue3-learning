/*
 * @Author: 杜康
 * @Date: 2023-05-04 16:27:13
 * @LastEditors: 杜康
 * @LastEditTime: 2023-05-04 17:41:45
 * @FilePath: /晓羿V3/src/stores/index.ts
 */
import { defineStore } from 'pinia'
import { Names } from './store-names'
// 用户信息
export const useUserStore = defineStore(Names.User, {
  state: () => {
    return {
      isAuthenticated: false
    }
  },
  getters: {},
  actions: {}
})