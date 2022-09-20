import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViewDemo from '../views/ViewDemo01.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/demo01',
    // name: 'VIewDemo01',
    component: () => import('../views/ViewDemo01.vue'),
  },
  {
    path: '/demo02',
    // name: 'VIewDemo02',
    component: () => import('../views/ViewDemo02.vue'),
  },
  {
    path: '/demo03',
    // name: 'VIewDemo03',
    component: () => import('../views/ViewDemo03.vue'),
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
