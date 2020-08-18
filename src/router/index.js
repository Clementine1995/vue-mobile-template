import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/pages/redirect/index')
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
