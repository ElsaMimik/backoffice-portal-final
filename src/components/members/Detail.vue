<template>
	<div class="member__detail">
		<div class="member__detail__info">
			<div class="member__detail-list dottedline-bottom">
				<div class="member__detail-title">帐号ID
					<div class="member__detail-items">
						<p>7533967396736733</p>
						<p>7533967396736733</p>
					</div>
				</div>
				<div class="member__detail-title">角色
					<div class="member__detail-items">直客</div>
				</div>
				<div class="member__detail-title">提现状态
					<div class="member__detail-items">正常</div>
				</div>
				<div class="member__detail-title">帐号状态
					<div class="member__detail-items">正常</div>
				</div>
				<div class="member__detail-title">风控黑名单
					<div class="member__detail-items">是</div>
				</div>
				<div class="member__detail-title">风控等级
					<div class="member__detail-items">C</div>
				</div>
			</div>
			<div class="member__detail-list dottedline-bottom">
				<div class="member__detail-title">钱包金额
					<div class="member__detail-items">34,234.23</div>
				</div>
				<div class="member__detail-title">保险箱金额
					<div class="member__detail-items">5,000.00</div>
				</div>
				<div class="member__detail-title">游戏冻结金额
					<div class="member__detail-items">0</div>
				</div>
				<div class="member__detail-title">提款限额
					<div class="member__detail-items">200.00</div>
				</div>
				<div class="member__detail-title">有效流水
					<div class="member__detail-items">200.00</div>
				</div>
				<div class="member__detail-title">会员注单
					<div class="member__detail-items">已结算</div>
				</div>
				<div class="member__detail-title">注单结算金额
					<div class="member__detail-items notice">異常</div>
				</div>
				<div class="member__detail-title">可提领金额
					<div class="member__detail-items">43,549.00</div>
				</div>
				<div class="member__detail-title">会员中大奖
					<div class="member__detail-items notice">是</div>
				</div>
			</div>
			<button class="btns__green">查询交易纪录</button>
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

const memberModule = namespace("Member");

@Component
export default class Detail extends Vue {
  @memberModule.State("memberInfos") members!: Model.ITestMemberResponse[];
  @Action("Member/getMember") private getMember!: any;
  mounted() {
    this.getMember();
    // console.log(this.$route.params.uuid);
  }

  changeTab(tab: string) {
	this.init();
	this.$emit("change-tab", tab);
  }
  init() {
	//   console.log(this.$route.params.uuid);
  }
}
</script>