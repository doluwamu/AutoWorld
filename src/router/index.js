import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarDetailsView from '../views/CarDetailsView.vue'
import SupportView from '../views/SupportView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/car/:id',
      name: 'carDetails',
      component: CarDetailsView
    },
    {
      path: '/cars',
      name: 'cars',
      // route level code-splitting
      // this generates a separate chunk (Car.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CarsView.vue')
    },
    {
      path: '/support',
      name: 'support',
      component: SupportView
    }
  ]
})

export default router
