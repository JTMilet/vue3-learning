/*
 * @Author: 杜康
 * @Date: 2023-05-04 17:32:22
 * @LastEditors: 杜康
 * @LastEditTime: 2023-05-04 17:37:30
 * @FilePath: /晓羿V3/src/utils/image.ts
 */
/**
 * @description: 获取静态图片路径
 * @param {string} path 开发中的绝对路径
 * @return {string} 图片转换后的路径
 */
export const getImageUrl = (path: string): string => {
  return new URL(path, import.meta.url).href
}