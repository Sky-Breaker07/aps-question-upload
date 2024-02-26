import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue')
    },
    {
      path: '/uploadquestion',
      name: 'uploadquestion',
      component: () => import('../views/Uploadquestion.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/Notfound.vue')
    },
    {
      path: '/unauthorized',
      name: 'unauthorized',
      component: () => import('../views/Unauthorized.vue')
    }
  ]
})

export default router
