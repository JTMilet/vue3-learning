/*
 * @Author: 杜康
 * @Date: 2023-05-05 11:06:58
 * @LastEditors: 杜康
 * @LastEditTime: 2023-05-05 14:21:53
 * @FilePath: /晓羿V3/src/utils/request.ts
 */
import axios, { AxiosError, type AxiosPromise, type AxiosResponse } from 'axios'


const instance = axios.create({
  baseURL: './',
  timeout: 12000
})

// 发送请求拦截
instance
  .interceptors
  .request
  .use(config => {
    return config
  }, error => {
    return Promise.reject(error)
  })

// 请求响应拦截
instance
  .interceptors
  .response
  .use((response: AxiosResponse): AxiosPromise => {
    if (response.data.code === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data)
    }
  }, (error: AxiosError) => {
    console.log('🚀 ~ file: request.ts:37 ~ .use ~ error:', error)
  })