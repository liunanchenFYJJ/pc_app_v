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
          name: 'Home',
          meta: {
            title: 'home'
          },
          component: () => import('@/views/Home.vue')
        }
      ]
    }
  ]
})
