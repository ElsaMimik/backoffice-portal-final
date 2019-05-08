<template>
	<div class="popup">
		<div class="popup__view">
			<div class="popup__close">
				<div class="btns">
					<button class="btns__close"></button>
				</div>
			</div>
			<div class="popup__title">查询风控纪录</div>
			<div class="popup__info dottedline-top">
				<div class="popup__info-title">帐号ID
					<div class="popup__info-items"> 
						<p>7533967396736733</p>
						<p>7533967396736733</p>
					</div>
				</div>
			</div>
			<div class="popup__info dottedline-top">
				<div class="popup-list">
					<div class="popup__info-title">时间
						<div class="popup__info-items">2019-01-01 17:00</div>
					</div>
					<div class="popup__info-title">操作人员
						<div class="popup__info-items">DAVID</div>
					</div>
					<div class="popup__info-title">更改风控等级
						<div class="popup__info-items">D</div>
					</div>
					<div class="popup__info-title">更改黑名单状态
						<div class="popup__info-items notice">是</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">附注
						<div class="popup__info-items">此会员违反平台规定, 设定成黑名单.</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">附件
						<div class="popup__upload-items">Type something.jpg</div>
						<div class="popup__upload-items">Type something.jpg</div>
					</div>
				</div>
			</div>
			<div class="popup__info dottedline-top">
				<div class="popup-list">
					<div class="popup__info-title">时间
						<div class="popup__info-items">2019-01-01 17:00</div>
					</div>
					<div class="popup__info-title">操作人员
						<div class="popup__info-items">DAVID</div>
					</div>
					<div class="popup__info-title">更改风控等级
						<div class="popup__info-items notice">D</div>
					</div>
					<div class="popup__info-title">更改黑名单状态
						<div class="popup__info-items">不是</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">附注
						<div class="popup__info-items">此会员违反平台规定, 设定成黑名单.</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">附件
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

</style>