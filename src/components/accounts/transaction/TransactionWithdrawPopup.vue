<template>
	<div class="popup">
		<div class="popup__view">
			<div class="popup__close">
				<div class="btns">
				<button class="btns__close"></button>
				</div>
			</div>
			<div class="popup__title">交易 - 人工提现</div>
			<div class=" dottedline-top">
			<div class="popup__info-title">
				帐号ID
				<div class="popup__info-items"> 
				<p>7533967396736733</p>
				<p>7533967396736733</p>
				</div>
			</div>
			</div>
			<div class="popup__title">建单</div>
			<div class="popup__info dottedline-top">
				<div class="popup-list">
					<div class="popup__info-title">
						充值金额
						<div class="popup__info-items">1,000.00</div>
					</div>
					<div class="popup__info-title">
						提款限额
						<div class="popup__info-items notice">-300.00</div>
					</div>
					<div class="popup__info-title">
						转换比例
						<div class="popup__info-items">100%</div>
					</div>
					<div class="popup__info-title">
						时间
						<div class="popup__info-items">2019-01-01 17:00</div>
					</div>
					<div class="popup__info-title">
						操作人员
						<div class="popup__info-items">DAVID</div>
					</div>
					<div class="popup__info-title">
						状态
						<div class="popup__info-items">已送審</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">
						附注
						<div class="popup__info-items">
							玩家充值申请入账帐号 蔡小虎 XXXX-6789
							确认玩家进行5,000汇款动作 进行送审
						</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">
						附件
						<div class="popup__upload-items">Type something.jpg</div>
						<div class="popup__upload-items">Type something.jpg</div>
					</div>
				</div>
			</div>
			<div class="popup__title">审核</div>
			<div class="popup__info dottedline-top">
				<div class="popup-list">
					<div class="popup__info-title">
						时间
						<div class="popup__info-items">2019-01-01 17:00</div>
					</div>
					<div class="popup__info-title">
						操作人员
						<div class="popup__info-items">DAVID</div>
					</div>
					<div class="popup__info-title">
						状态
						<div class="popup__info-items">通過</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">
						附注
						<div class="popup__info-items">
							同意，请进行出帐
						</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">
						附件
						<div class="popup__upload-items">Type something.jpg</div>
						<div class="popup__upload-items">Type something.jpg</div>
					</div>
				</div>
			</div>
			<div class="popup__title">风控审核</div>
			<div class="popup__info dottedline-top">
				<div class="popup-list">
					<div class="popup__info-title">
						时间
						<div class="popup__info-items">2019-01-01 17:00</div>
					</div>
					<div class="popup__info-title">
						操作人员
						<div class="popup__info-items">DAVID</div>
					</div>
					<div class="popup__info-title">
						状态
						<div class="popup__info-items">通過</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">
						附注
						<div class="popup__info-items">
							风控状态正常
						</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">
						附件
						<div class="popup__upload-items">Type something.jpg</div>
						<div class="popup__upload-items">Type something.jpg</div>
					</div>
				</div>
			</div>
			<div class="popup__title">出帐作业</div>
			<div class="popup__info dottedline-top">
				<div class="popup-list">
					<div class="popup__info-title">
						时间
						<div class="popup__info-items">2019-01-01 17:00</div>
					</div>
					<div class="popup__info-title">
						操作人员
						<div class="popup__info-items">DAVID</div>
					</div>
					<div class="popup__info-title">
						状态
						<div class="popup__info-items">出帐完成</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">
						附注
						<div class="popup__info-items">已完成出帐作业，附上汇款截图</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">
						附件
						<div class="popup__upload-items">Type something.jpg</div>
						<div class="popup__upload-items">Type something.jpg</div>
					</div>
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
}
</script>
<style lang="scss" scoped>
.popup__upload-items {
	cursor: pointer;
}
</style>