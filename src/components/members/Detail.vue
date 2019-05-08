<template>
	<div class="member__detail">
		<div class="member__detail__info">
			<div class="member__detail-list dottedline-bottom">
				<div class="member__detail-title">
					帐号ID
					<div class="member__detail-items">
						<p>321312312</p>
					</div>
				</div>
				<div class="member__detail-title">
					角色
					<div :class="{ 'member__detail-items notice': memberData.roleCode !== 'Normal',
								'member__detail-items': memberData.roleCode === 'Normal' }">
				{{ memberData.roleCode | roleCodeStatusDisplay }}
					</div>
				</div>
				<div class="member__detail-title">
					提现状态
					<div class="member__detail-items">正常</div>
				</div>
				<div class="member__detail-title">
					帐号状态
					<div class="member__detail-items">正常</div>
				</div>
				<div class="member__detail-title">
					风控黑名单
					<span>2019-01-01 17:00 更新</span>
					<div :class="{ 'member__detail-items notice': memberData.isBlackListing,
								'member__detail-items': !memberData.isBlackListing }">
				{{ memberData.isBlackListing | isBlacklistingDisplay }}
					</div>
				</div>
				<div class="member__detail-title">
					风控等级
					<span>2019-01-01 17:00 更新</span>
					<div class="member__detail-items">
				{{ memberData.riskControlLevel }}
					</div>
				</div>
			</div>
			<div class="member__detail-list dottedline-bottom">
				<div class="member__detail-title">
					钱包金额
					<div class="member__detail-items">34,234.23</div>
				</div>
				<div class="member__detail-title">
					保险箱金额
					<div class="member__detail-items">5,000.00</div>
				</div>
				<div class="member__detail-title">
					游戏冻结金额
					<div class="member__detail-items">0</div>
				</div>
				<div class="member__detail-title">
					提款限额
					<div class="member__detail-items">200.00</div>
				</div>
				<div class="member__detail-title">
					有效流水
					<span>2019-01-01 17:00 更新</span>
					<div class="member__detail-items">200.00</div>
				</div>
				<div class="member__detail-title">
					会员注单
					<div class="member__detail-items">已结算</div>
				</div>
				<div class="member__detail-title">
					注单结算金额
					<div class="member__detail-items notice">異常</div>
				</div>
				<div class="member__detail-title">
					可提领金额
					<div class="member__detail-items">43,549.00</div>
				</div>
				<div class="member__detail-title">
					会员中大奖
					<div class="member__detail-items notice">是</div>
				</div>
			</div>
			<div class="btns">
				<button class="btns__green">頁面更新</button>
				<button class="btns__green">查询交易纪录</button>
			</div>
		</div>
		
		<div class="member__detail-btns">
			<div class="member__detail-list">
				<div class="btns">
					<button class="btns__green active" @click="changeTab('Basic')">基本资料</button>
					<button class="btns__green" @click="changeTab('Transaction')">交易资料</button>
					<button class="btns__green" @click="changeTab('Login')">登入资料</button>
					<button class="btns__green" @click="changeTab('Relations')">关联资料</button>
					<button class="btns__green" @click="changeTab('RiskControl')">风控条件</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State, Action, Getter, namespace } from "vuex-class";
import * as Model from "@/models/interfaces/member";
import MemberApi from "@/api/member";
import * as Status from '@/models/status/member';
import { datetimeMixin } from '@/utilities/datetime-format';
import { displayFiltersMixin } from '@/utilities/display-filters';

const memberModule = namespace("Member");

@Component({
	mixins: [datetimeMixin, displayFiltersMixin]
})

export default class Detail extends Vue {
	memberData: Model.IMemberDetailResponse = {
		uuid: '',
		nickName: '',
		createDate: '',
		currencyCode: Status.CurrencyCode.CNY,
		roleCode: Status.RoleCode.Normal,
		phoneNumber: '',
		riskControlLevel: Status.RiskControllLevel.D,
		isBlacklisting: true,
		riskControlLevelCreateDate: 0,
		blacklistingCreateDate: 0,
		amount: 0,
		freezeAmount: 0,
		securityBoxAmount: 0,
		withdrawalLimitAmount: 0,
		availableWithdrawalLimitAmount: 0,
		turnoverAmount: 0,
		turnoverAmountCreateDate: 0,
		accountStatus: Status.AccountStatus.E2,
		withdrawalStatus: Status.WithdrawalStatus.E1,
		isBigWin: false,
		bigWinCreateDate: 0,
		isSettled: false,
		settleStatus: Status.SettleStatus.Abnormal,
	};
	mounted() {
		this.init();
		// console.log(this.$route.params.uuid);
	}

	changeTab(tab: string) {
		this.init();
		this.$emit("change-tab", tab);
	}
	init() {
		MemberApi.getMemberDetail(this.$route.params.uuid).then(res => {
			this.memberData = res;
		});
		//   console.log(this.$route.params.uuid);
	}
}
</script>