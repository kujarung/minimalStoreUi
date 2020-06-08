import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Test from '@/views/test/test'
import SignUp from '@/views/login/SignUp'

import ProductList from '@/views/product/ProductList'
import ProductDetail from '@/views/product/ProductDetail'
import ProductReg from '@/views/product/ProductReg'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/example',
      name: 'Test',
      component: Test
    },    
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    },    
    {
      path : '/product',
      component : ProductList,
    },
    {
      path: '/product/detail/:productCode',
      component: ProductDetail,
      props : true
    },            
    {
      path : '/product/reg',
      component : ProductReg,
    },
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
