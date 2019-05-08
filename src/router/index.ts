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
		name: 'accounts-sacrificeout', component: () => import('@/views/accounts/SacrificeOut.vue'),
	},
	{
		path: '/riskcontrol/approval',
		name: 'riskcontrol-approval', component: () => import('@/views/riskcontrol/Approval.vue'),
	},
	{
		path: '/riskcontrol/checkmemberstatus',
		name: 'riskcontrol-checkmemberstatus', component: () => import('@/views/riskcontrol/CheckMemberStatus.vue'),
	},
	{
		path: '/riskcontrol/levelsetting',
		name: 'riskcontrol-levelsetting', component: () => import('@/views/riskcontrol/LevelSetting.vue'),
	},
	{
		path: '/riskcontrol/withdrawlimitationsetting',
		name: 'riskcontrol-withdrawlimitationsetting', component: () => import('@/views/riskcontrol/WithdrawLimitationSetting.vue'),
	},
	{
		path: '/accounts/vipdeposit/apply',
		name: 'accounts-vipdeposit/apply', component: () => import('@/views/accounts/vipdeposit/VipDepositApply.vue'),
	},
	{
		path: '/accounts/vipdeposit/approval',
		name: 'accounts-vipdeposit/approval', component: () => import('@/views/accounts/vipdeposit/VipDepositApproval.vue'),
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
				// console.log('是否有權限', res);
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