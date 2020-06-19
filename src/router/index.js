import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Test from '@/views/test/test'
import About from '@/views/about/About'
import UserLayout from '@/views/user/UserLayout'
import Callback from '@/views/user/components/Callback'
import pageNotFound from '@/views/pageNotFound'

import userRouter from '@/router/modules/user'
import productRouter from '@/router/modules/product'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'pageNotFound',
    component: pageNotFound
  },  
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/example',
    name: 'Test',
    component: Test
  },
  {
    path: '/user',
    component: UserLayout,
    children: userRouter,
  },
  {
    path: '/callback',
    component: Callback,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...routes, ...productRouter]
})

export default router
