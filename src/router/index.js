import { createRouter, createWebHistory } from 'vue-router'
import mainPage from '../pages/mainPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: mainPage
  },
  {
    path: '/404', component: NotFoundPage
  },
  {
    path: '/:catchAll(.*)', redirect: '404'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
