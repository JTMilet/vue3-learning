<!--
 * @Author: 杜康
 * @Date: 2023-05-04 17:02:07
 * @LastEditors: 杜康
 * @LastEditTime: 2023-05-04 18:43:42
 * @FilePath: /晓羿V3/src/components/home/home-header.vue
-->
<template>
  <header class="px-4 w-full h-16 flex justify-center items-center space-x-16 shadow">
    <section class="flex-none">
      <img class="block w-36 h-full" :src="imgHref" :draggable="false">
    </section>
    <section class="flex-1">
      <ul class="w-full h-full flex justify-start items-center space-x-8">
        <li class="text-gray-900 hover:text-blue-400 cursor-pointer transition-colors" v-for="(menu, index) in menus"
          :key="index">
          <router-link :to="{ name: menu.name }">{{ menu.label }}</router-link>
        </li>
      </ul>
    </section>
    <section class="flex-none">
      <v-btn color="blue-darken-1" @click="login">登 录</v-btn>
    </section>
  </header>
</template>

<script lang="ts" setup>
import { getImageUrl } from '@/utils/image'
import { useRouter } from 'vue-router'
const router = useRouter()
const imgHref = getImageUrl('/src/assets/img/logo.png')
// 菜单
const menus: { label: string, path: string, name?: string }[] = [
  { label: '首页', path: '/home/index', name: 'HomeIndex' },
  { label: '资源中心', path: '/bussiness' },
  { label: '企业服务', path: '/bussiness' },
  { label: '定价', path: '/bussiness' },
  { label: '下载', path: '/bussiness' },
  { label: '帮助中心', path: '/bussiness' }
]
// 前往登录
const login = (): void => {
  router.push({ name: 'Login' })
}
</script>

<style lang="scss" scoped></style>