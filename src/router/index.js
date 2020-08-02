import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '@/components/layout/home.vue'),
      meta: { title: '自述文件' },
      children: [
        {
          path: '/dashboard',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard.vue'),
          meta: { title: '系统首页' }
        },
        {
          path: '/table',
          component: () => import(/* webpackChunkName: "table" */ '@/views/baseTable.vue'),
          meta: { title: '基础表格' }
        },
        {
          path: '/form',
          component: () => import(/* webpackChunkName: "form" */ '@/views/baseForm.vue'),
          meta: { title: '基本表单' }
        },
        {
          path: '/markdown',
          component: () => import(/* webpackChunkName: "markdown" */ '@/views/markdown.vue'),
          meta: { title: 'markdown编辑器' }
        },
        {
          path: '/upload',
          component: () => import(/* webpackChunkName: "upload" */ '@/views/upload.vue'),
          meta: { title: '文件上传' }
        },
        {
          path: '/404',
          component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
          meta: { title: '404' }
        },
        {
          path: '/403',
          component: () => import(/* webpackChunkName: "403" */ '@/views/403.vue'),
          meta: { title: '403' }
        }
      ]
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue'),
      meta: { title: '登录' }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});
