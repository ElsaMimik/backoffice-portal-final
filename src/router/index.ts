import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import { checkPageAuth } from '@/router/auth';

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
		path: '/detail',
		name: 'detail', component: () => import('@/views/members/Detail.vue'),
	},
	{
		path: '/accounts/transaction',
		name: 'accounts-transaction', component: () => import('@/views/accounts/transaction/Transaction.vue'),
	},
	{
		path: '/accounts/gamebetrecord',
		name: 'accounts-gamebetrecord', component: () => import('@/views/accounts/gamebetrecord/GameBetRecord.vue'),
	},
	{
		path: '/accounts/vipwithdraw/apply',
		name: 'accounts-vipwithdraw/apply', component: () => import('@/views/accounts/vipwithdraw/VipWithdrawApply.vue'),
	},
	{
		path: '/accounts/vipwithdraw/approval',
		name: 'accounts-vipwithdraw/approval', component: () => import('@/views/accounts/vipwithdraw/VipWithdrawApproval.vue'),
	},
	{
		path: '/accounts/vipwithdraw/bill',
		name: 'accounts-vipwithdraw/bill', component: () => import('@/views/accounts/vipwithdraw/VipWithdrawBill.vue'),
	},
	{
		path: '/accounts/modified/abnormal/apply',
		name: 'accounts-modified-abnormal/apply', component: () => import('@/views/accounts/modified/abnormal/AbnormalApply.vue'),
	},
	{
		path: '/accounts/modified/abnormal/approval',
		name: 'accounts-modified-abnormal/approval', component: () => import('@/views/accounts/modified/abnormal/AbnormalApproval.vue'),
	},
	{
		path: '/accounts/modified/manual/apply',
		name: 'accounts-modified-manual/apply', component: () => import('@/views/accounts/modified/manual/ManualApply.vue'),
	},
	{
		path: '/accounts/modified/manual/approval',
		name: 'accounts-modified-manual/approval', component: () => import('@/views/accounts/modified/manual/ManualApproval.vue'),
	},
	{
		path: '/accounts/sacrificeout',
		name: 'accounts-acrificeout', component: () => import('@/views/accounts/SacrificeOut.vue'),
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
	let apiPaths = [];
	if (router.app.$options.store) {
		// router.app.$options.store.dispatch('Auth/getApiPath');
		apiPaths = router.app.$options.store.state.Auth.apiPaths;
	}
	checkPageAuth(to.name, apiPaths).then(res => {
		// console.log('是否有權限', res);
		if (res) {
			next();
		} else {
			// window.location.href = 'http://www.google.com';
		}
	});
});

export default router;