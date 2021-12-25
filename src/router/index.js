import Vue from 'vue'
import VueRouter from 'vue-router'

import { adminRoutes } from './modules/admin.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: "Login"
    }
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('views/common/login/login.vue')
  },
  ...adminRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由免登陆白名单
const WHITE_LIST = ['Login', '404'];
router.beforeEach((to, from, next) => {
  // 访问免登陆白名单，直接进入
  if (WHITE_LIST.indexOf(to.name) !== -1) {
    next();
    return;
  }
  // const token = store.getters.token

  // if (!token) {
  //   Notification.error({
  //     title: '403',
  //     message: '暂无权限访问该页面，请重新登录',
  //     duration: 2000,
  //     onClose: () => {
  //       next('/login');
  //     }
  //   });
  // } else {
    next();
  // }

});

export default router
