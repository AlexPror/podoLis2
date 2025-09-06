import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue'), name: 'Home' },
  { path: '/about', component: () => import('@/views/AboutView.vue'), name: 'About' },
  { path: '/contacts', component: () => import('@/components/ContactSection.vue'), name: 'Contacts' },
  { path: '/mda', component: () => import('@/views/MdaView.vue'), name: 'Mda' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  },
})

export default router
