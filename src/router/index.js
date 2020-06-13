import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Test from '@/views/test/test'
import About from '@/views/about/About';

import userRouter from '@/router/modules/user'
import productRouter from '@/router/modules/product'

Vue.use(VueRouter)

const routes = [
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...routes, ...userRouter, ...productRouter]
})

export default router
