import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import { checkPageAuth } from '@/router/auth';
import AuthApi from "@/api/auth";

Vue.use(Router);
Vue.use(Vuex);

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
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
  }
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  next();
  let roleString: string[] = [];
  const store = router.app.$options.store;
  if (store) {
    AuthApi.getMenu().then(data => {
      store.dispatch('Auth/setApiPath', data.menu);
      roleString = data.menu;
      store.dispatch('Auth/setCurrentPath', to.name);

      checkPageAuth(to.name, roleString).then(res => {
        // console.log(roleString)
        // console.log(to.name)
        console.log('是否有權限', res);
        if (res) {
          next();
        } else {
          // window.location.href = 'http://www.google.com';
        }
      });
    });
  }
});

export default router;