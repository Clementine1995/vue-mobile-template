import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: 'home',
        component: () => import('../views/Home.vue'),
        name: 'Home',
        meta: { title: '首页' }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        name: 'About',
        meta: { title: 'About' }
      }
    ]
  }
]

const createRouter = () => new VueRouter({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
