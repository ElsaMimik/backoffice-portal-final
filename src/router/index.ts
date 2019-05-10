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
		path: '/account/transaction',
		name: 'account-transaction', component: () => import('@/views/accounts/transaction/Transaction.vue'),
	},
	{
		path: '/account/game-bet-record',
		name: 'account-game-bet-record', component: () => import('@/views/accounts/gamebetrecord/GameBetRecord.vue'),
	},
	{
		path: '/account/vip-deposit/apply',
		name: 'account-vip-deposit/apply', component: () => import('@/views/accounts/vipdeposit/VipDepositApply.vue'),
	},
	{
		path: '/account/vip-deposit/approval',
		name: 'account-vip-deposit/approval', component: () => import('@/views/accounts/vipdeposit/VipDepositApproval.vue'),
	},
	{
		path: '/account/vip-withdraw/apply',
		name: 'account-vip-withdraw/apply', component: () => import('@/views/accounts/vipwithdraw/VipWithdrawApply.vue'),
	},
	{
		path: '/account/vip-withdraw/approval',
		name: 'account-vip-withdraw-approval', component: () => import('@/views/accounts/vipwithdraw/VipWithdrawApproval.vue'),
	},
	{
		path: '/account/vip-withdraw/bill',
		name: 'account-vip-withdraw-bill', component: () => import('@/views/accounts/vipwithdraw/VipWithdrawBill.vue'),
	},
	{
		path: '/account/modified/abnormal/detail',
		name: 'account-modified-abnormal-detail', component: () => import('@/views/accounts/modified/abnormal/AbnormalDetail.vue'),
	},
	{
		path: '/account/modified/abnormal/apply',
		name: 'account-modified-abnormal-apply', component: () => import('@/views/accounts/modified/abnormal/AbnormalApply.vue'),
	},
	{
		path: '/account/modified/abnormal/approval',
		name: 'account-modified-abnormal-approval', component: () => import('@/views/accounts/modified/abnormal/AbnormalApproval.vue'),
	},
	{
		path: '/account/modified/manual/apply',
		name: 'account-modified-manual-apply', component: () => import('@/views/accounts/modified/manual/ManualApply.vue'),
	},
	{
		path: '/account/modified/manual/approval',
		name: 'account-modified-manual-approval', component: () => import('@/views/accounts/modified/manual/ManualApproval.vue'),
	},
	{
		path: '/account/sacrifice-out',
		name: 'account-sacrifice-out', component: () => import('@/views/accounts/SacrificeOut.vue'),
	},
	{
		path: '/risk-control/approval',
		name: 'risk-control-approval', component: () => import('@/views/riskcontrol/Approval.vue'),
	},
	{
		path: '/risk-control/check-member-status',
		name: 'risk-control-check-member-status', component: () => import('@/views/riskcontrol/CheckMemberStatus.vue'),
	},
	{
		path: '/risk-control/level-setting',
		name: 'risk-control-level-setting', component: () => import('@/views/riskcontrol/LevelSetting.vue'),
	},
	{
		path: '/risk-control/withdraw-limitation-setting',
		name: 'risk-control-withdraw-limitation-setting', component: () => import('@/views/riskcontrol/WithdrawLimitationSetting.vue'),
	},
	{
		path: '/system/maquee',
		name: 'system-maquee', component: () => import('@/views/system/Maquee.vue'),
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
			store.dispatch('Auth/setApiPath', data.roles);
			roleString = data.roles;
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