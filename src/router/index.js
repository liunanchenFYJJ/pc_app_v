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
          path: '/cardpurchase',
          name: 'CardPurchase',
          meta: {
            title: '购卡'
          },
          component: () => import('@/views/CardPurchase.vue')
        },
        {
          path: '/sitereservation',
          name: 'SiteReservation',
          meta: {
            title: '场地预定'
          },
          component: () => import('@/views/SiteReservation.vue')
        },
        {
          path: '/myorders',
          name: 'MyOrders',
          meta: {
            title: '我的订单'
          },
          component: () => import('@/views/MyOrders.vue')
        },
        {
          path: '/mycards',
          name: 'MyCards',
          meta: {
            title: '我的卡'
          },
          component: () => import('@/views/MyCards.vue')
        },
        {
          path: '/mytickets',
          name: 'MyTickets',
          meta: {
            title: '我的票'
          },
          component: () => import('@/views/MyTickets.vue')
        },
        {
          path: '/mycourt',
          name: 'MyCourt',
          meta: {
            title: '我的场地'
          },
          component: () => import('@/views/MyCourt.vue')
        },
      ]
    }
  ]
})
