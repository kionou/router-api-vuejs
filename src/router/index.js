import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: () => import( '../views/jobs/jobs.vue')
  },
  {
    path: '/jobs/:id',
    name: 'jobsDetail',
    component: () => import( '../views/jobs/jobsdetail.vue'),
    props:true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import( '../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
