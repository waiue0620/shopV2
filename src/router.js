import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: 'index'
    },
    {
      path: '/',
      name: 'home',
      redirect: 'index',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('./components/Index')
        },
        {
          path: 'shopping',
          name: 'shopping',
          component: () => import('./components/Shopping')
        }
      ]
    },
    {
      path: '/detailed/:productId',
      name: 'detailed',
      component: () => import('./views/Detailed.vue')
    },
    {
      path: '/check_order/:orderId',
      name: 'checkOrder',
      component: () => import('./views/CheckOrder.vue')
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('./views/Customer.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('./views/admin/Dashboard'),
      children: [
        {
          path: 'products',
          name: 'products',
          component: () => import('./components/admin/Products'),
          meta: { requiresAuth: true }
        },
        {
          path: 'orders',
          name: 'orders',
          component: () => import('./components/admin/Orders'),
          meta: { requiresAuth: true }
        },
        {
          path: 'coupons',
          name: 'coupons',
          component: () => import('./components/admin/Coupons'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('./views/admin/Dashboard'),
      children: [
        {
          path: 'customer_order',
          name: 'customerOrder',
          component: () => import('./components/admin/CustomerOrder')
        },
        {
          path: 'Customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: () => import('./components/admin/CustomerCheckout')
        }
      ]
    }
  ]
})
