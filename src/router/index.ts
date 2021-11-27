import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'hello',
    component: HelloWorld,
    meta: {
      title: '首页',
    },
    children: [],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/components/About.vue'),
    meta: {
      title: '关于',
    },
    children: [],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
