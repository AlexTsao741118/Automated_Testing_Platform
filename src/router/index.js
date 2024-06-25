import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../views/IndexView.vue')
  },
  // 登录页面的路由
  {
    path: '/users/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
