<template>
	<div class="member__detail">
		<div class="member__detail__info">
			<div class="member__detail-list dottedline-bottom">
				<div class="member__detail-title">
					帐号ID
					<div class="member__detail-items">
						<p>{{ memberData.uuid | firstUuidYards }}</p>
						<p>{{ memberData.uuid | lastUuidYards }}</p>
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
					<div :class="{ 'member__detail-items notice': memberData.withdrawalStatus !== 'Normal',
										'member__detail-items': memberData.withdrawalStatus === 'Normal' }">
						{{ memberData.withdrawalStatus | withdrawalStatusDisplay }}
					</div>
				</div>
				<div class="member__detail-title">
					帐号状态
					<div :class="{ 'member__detail-items notice': memberData.accountStatus !== 'Normal',
										'member__detail-items': memberData.accountStatus === 'Normal' }">
						{{ memberData.accountStatus | accountStatusDisplay }}
					</div>
				</div>
				<div class="member__detail-title">
					风控黑名单
					<span>{{ memberData.blackListingCreateDate | timestampToDateAndTime }}更新</span>
					<div :class="{ 'member__detail-items notice': memberData.isBlackListing,
										'member__detail-items': !memberData.isBlackListing }">
						{{ memberData.isBlackListing | isBlacklistingDisplay }}
					</div>
				</div>
				<div class="member__detail-title">
					风控等级
					<span>{{ memberData.riskControlLevelCreateDate | timestampToDateAndTime }}更新</span>
					<div class="member__detail-items">
						{{ memberData.riskControlLevel }}
					</div>
				</div>
			</div>
			<div class="member__detail-list">
				<div class="member__detail-title">
					钱包金额
					<div class="member__detail-items">
						{{ memberData.amount | amountDisplay }}
					</div>
				</div>
				<div class="member__detail-title">
					保险箱金额
					<div class="member__detail-items">
						{{ memberData.securityBoxAmount | amountDisplay }}
					</div>
				</div>
				<div class="member__detail-title">
					游戏冻结金额
					<div class="member__detail-items">
						{{ memberData.freezeAmount | amountDisplay }}
					</div>
				</div>
				<div class="member__detail-title">
					提款限额
					<div class="member__detail-items">
						{{ memberData.availableWithdrawalLimitAmount | amountDisplay }}
					</div>
				</div>
				<div class="member__detail-title">
					有效流水
					<span>{{ memberData.turnoverAmountCreateDate | timestampToDateAndTime }}更新</span>
					<div class="member__detail-items">
						{{ memberData.turnoverAmount | amountDisplay }}
					</div>
				</div>
				<div class="member__detail-title">
					会员注单
					<div class="member__detail-items">
						{{ memberData.isSettled | isSettledDisplay }}
					</div>
				</div>
				<div class="member__detail-title">
					注单结算金额
					<div :class="{ 'member__detail-items notice': memberData.settleStatus !== 'Normal',
										'member__detail-items': memberData.settleStatus === 'Normal' }">
						{{ memberData.settleStatus | settleStatusDisplay }}
					</div>
				</div>
				<div class="member__detail-title">
					可提领金额
					<div class="member__detail-items">
						{{ memberData.availableWithdrawalLimitAmount | amountDisplay }}
					</div>
				</div>
				<div class="member__detail-title">
					会员中大奖
					<span v-if="memberData.isBidWin">{{ memberData.bigWinCreateDate | timestampToDateAndTime }}更新</span>
					<div :class="{ 'member__detail-items notice': memberData.isBidWin,
										'member__detail-items': !memberData.isBidWin }">
						{{ memberData.isBidWin | isBidWinDisplay }}
					</div>
				</div>
			</div>
			<div class="btns">
				<button class="btns__green">更新</button>
				<button class="btns__green">查询交易纪录</button>
			</div>
			<div class="member__detail-list dottedline-bottom">
			</div>
		</div>
		<div class="member__detail-btns">
			<div class="member__detail-list">
				<div class="btns">
					<button :class="{ 'btns__green active': tab === 'Basic',
								'btns__green': tab !== 'Basic'}" 
								@click="changeTab('Basic')">
						基本资料
					</button>
					<button :class="{ 'btns__green active': tab === 'Transaction',
											'btns__green': tab !== 'Transaction'}" 
											@click="changeTab('Transaction')">
						交易资料
					</button>
					<button :class="{ 'btns__green active': tab === 'Login',
								'btns__green': tab !== 'Login'}" 
								@click="changeTab('Login')">
						登入资料
					</button>
					<button :class="{ 'btns__green active': tab === 'Relations',
								'btns__green': tab !== 'Relations'}" 
								@click="changeTab('Relations')">
						关联资料
					</button>
					<button :class="{ 'btns__green active': tab === 'RiskControl',
								'btns__green': tab !== 'RiskControl'}" 
								@click="changeTab('RiskControl')">
						风控条件
					</button>
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
	memberData: Model.IMemberDetailResponse = {} as Model.IMemberDetailResponse;
	tab: string = 'Basic';

	@Action("Member/setMember") private setMember!: any;
	mounted() {
		this.init();
	}

	changeTab(tab: string) {
		this.tab = tab;
		this.init();
		this.$emit("change-tab", tab);
	}
	init() {
		MemberApi.getMemberDetail(this.$route.params.uuid).then(res => {
			this.setMember(res);
			this.memberData = res;
		});
	}
}
</script>
<style lang="scss" scoped>
	.btns {
		text-align:right;
	}
</style>
