import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccentAceView from '../views/project-pages/accentAce.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/accent-ace',
      name: 'accentAce',
      component: AccentAceView
    }
  ]
})

export default router
