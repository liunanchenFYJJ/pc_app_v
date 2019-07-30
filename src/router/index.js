import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: {
        title: '首页'
      },
      component: Layout,
      children: [
        {
          path: '/',
          name: 'TicketPurchase',
          meta: {
            title: '购票'
          },
          component: () => import('@/views/TicketPurchase.vue')
        },
        {
          path: '/CardPurchase',
          name: 'CardPurchase',
          meta: {
            title: '购卡'
          },
          component: () => import('@/views/CardPurchase.vue')
        },
        {
          path: '/SiteReservation',
          name: 'SiteReservation',
          meta: {
            title: '场地预定'
          },
          component: () => import('@/views/SiteReservation.vue')
        },
      ]
    }
  ]
})
