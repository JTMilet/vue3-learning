<!--
 * @Author: 杜康
 * @Date: 2023-05-04 15:45:15
 * @LastEditors: 杜康
 * @LastEditTime: 2023-05-05 14:22:10
 * @FilePath: /晓羿V3/src/components/login/index.vue
-->
<template>
  <div class="w-screen h-screen overflow-hidden">
    <section class="w-full h-full flex justify-around items-center">
      <section class="relative">
        <section class="space-y-6 relative z-50">
          <h1 class="text-6xl font-semibold  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            轻量协同
          </h1>
          <h1 class="text-6xl font-semibold  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            用晓羿
          </h1>
          <p class="text-xl mt-8 font-light text-gray-900">今天的工作从这里开始</p>
        </section>
        <section class="absolute z-0 top-0 flex justify-center items-center">
          <div
            class="w-64 h-80 bg-gradient-to-tl from-cyan-600 to-blue-300  absolute -top-24  -left-28 blur-xl rounded-3xl">
          </div>
          <div class="w-72 h-72 bg-gradient-to-tr from-amber-500  absolute -top-16 left-32 blur-xl rounded-full"></div>
          <div
            class="w-64 h-64 bg-gradient-to-br from-red-300 from-30%  to-rose-600 to-90%  absolute top-20 left-0 blur-xl">
          </div>
        </section>
      </section>
      <section>
        <section>
          <v-sheet width="300" class="mx-auto">
            <v-form @submit.prevent>
              <v-text-field color="blue-darken-1" variant="solo" v-model="form.firstName" :rules="form.rules"
                label="手机号"></v-text-field>
              <v-text-field color="blue-darken-1" variant="solo" v-model="form.firstName" :rules="form.rules"
                label="验证码"></v-text-field>
              <v-btn type="submit" block color="blue-darken-1" size="x-large" elevated @click="submit">手机号登录</v-btn>
            </v-form>
          </v-sheet>
        </section>
        <v-divider class="border-opacity-75 mt-6"></v-divider>
        <section class="mt-4 w-full flex justify-around items-center">
          <v-col cols="auto">
            <v-btn icon="mdi-open-in-new"></v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn icon="mdi-open-in-new"></v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn icon="mdi-open-in-new"></v-btn>
          </v-col>
        </section>
      </section>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const form = reactive({
  firstName: '',
  rules: [
    (value: string): string | boolean => {
      if (value) return true
      return '请输入您的手机号'
    },
  ],
})

const submit = () => { }
</script>

<style lang="scss" scoped></style>