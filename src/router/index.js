import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import projectsView from '../views/projectsView.vue'
import workView from '../views/workView.vue'
import aboutView from '../views/aboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/experience',
      name: 'experience',
      component: workView
    },
    {
      path: '/projects',
      name: 'projects',
      component: projectsView
    },
    {
      path: '/about',
      name: 'about',
      component: aboutView
    },
  ]
})

export default router
