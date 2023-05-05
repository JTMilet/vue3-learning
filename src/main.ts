/*
 * @Author: 杜康
 * @Date: 2023-04-14 14:25:48
 * @LastEditors: 杜康
 * @LastEditTime: 2023-05-04 16:24:18
 * @FilePath: /晓羿V3/src/main.ts
 */
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import 'normalize.css'
import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)
app.use(vuetify)
app.use(pinia)
app.use(router)

app.mount('#app')
