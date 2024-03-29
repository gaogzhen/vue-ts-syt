import { createRouter, createWebHistory } from "vue-router";
// 用于创建路由器实例，可以管理多个路由

export default createRouter({
  // 路由的模式
  history: createWebHistory(),
  // 管理路由
  routes: [
    {
      path: '/home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/hospital',
      component: () => import('@/views/hospital/index.vue'),
      children: [
        {
          path: 'register',
          component: () => import('@/views/hospital/register/index.vue')
        },
        {
          path: 'detail',
          component: () => import('@/views/hospital/detail/index.vue')
        },
        {
          path: 'notice',
          component: () => import('@/views/hospital/notice/index.vue')
        },
        {
          path: 'close',
          component: () => import('@/views/hospital/close/index.vue')
        },
        {
          path: 'search',
          component: () => import('@/views/hospital/search/index.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})