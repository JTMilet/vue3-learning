<!--
 * @Author: 杜康
 * @Date: 2023-05-04 16:20:21
 * @LastEditors: 杜康
 * @LastEditTime: 2023-05-04 18:41:06
 * @FilePath: /晓羿V3/src/components/home/index.vue
-->
<script setup lang="ts">
import HomeHeader from './home-header.vue'
// import { useDark, useToggle } from '@vueuse/core'
// const isDark = useDark({
//   selector: 'body',
//   attribute: 'color-scheme',
//   valueDark: 'dark',
//   valueLight: 'light'
// })
// console.log('🚀 ~ file: Login.vue:11 ~ isDark:', isDark)
// const toggleDark = useToggle(isDark)
// console.log('🚀 ~ file: Login.vue:13 ~ toggleDark:', toggleDark)
</script>

<template>
  <HomeHeader class="fixed bg-white" />
  <main class="pt-16">
    <router-view></router-view>
  </main>
  <footer>this is footer</footer>
  <!-- <button @click="toggleDark()"></button>
  <div class="w-screen h-screen bg-white dark:bg-black">
    this is Home!
  </div> -->
</template>

<style scoped lang="scss"></style>