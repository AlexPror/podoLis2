import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue'), name: 'Home' },
  { path: '/about', component: () => import('@/views/AboutView.vue'), name: 'About' },
  { path: '/contacts', component: () => import('@/components/ContactSection.vue'), name: 'Contacts' },
  { path: '/mda', component: () => import('@/views/MdaView.vue'), name: 'Mda' },
  // Support GH Pages direct loads
  { path: '/index.html', redirect: '/' },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
