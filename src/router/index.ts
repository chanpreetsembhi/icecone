import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Detail from '@/views/Detail.vue'
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Detail,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router
