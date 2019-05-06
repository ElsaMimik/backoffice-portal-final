import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router/index';
import store from '@/store/index';
require('@/assets/css/base/_reset.scss');
require('@/assets/css/layout/_layout.scss');
require('@/assets/css/components/_components.scss');
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
