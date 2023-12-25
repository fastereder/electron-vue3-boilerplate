import { createRouter, createWebHashHistory } from 'vue-router'

import StartScreen from '@/views/StartScreen.vue'
import AboutScreen from '@/views/AboutScreen.vue'

const routes = [
  { path: '/', component: StartScreen },
  { path: '/about', component: AboutScreen },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
