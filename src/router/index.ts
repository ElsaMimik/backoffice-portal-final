import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex'
import { checkPageAuth } from '@/router/auth';

Vue.use(Router)
Vue.use(Vuex)

const routes = [
  {
    path: '/member',
    name: 'member', component: () => import('@/views/members/Search.vue'),
  },
  {
    path: '/member/detail/:uuid?',
    name: 'member-detail', component: () => import('@/views/members/Detail.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
]

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});

router.beforeEach((to, from, next) => {

  let apiPaths = [];
  if (router.app.$options.store) {
    router.app.$options.store.dispatch('Auth/getApiPath');
    apiPaths = router.app.$options.store.state.Auth.apiPaths;
  }
  checkPageAuth(to.name, apiPaths).then(res => {
    console.log('是否有權限', res);
    if (res) {
      next();
    } else {
      // window.location.href = 'http://www.google.com';
    }
  })
});

export default router