import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import daybookRouter from '../modules/daybook/router';//index.js

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/daybook',
    ...daybookRouter
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
