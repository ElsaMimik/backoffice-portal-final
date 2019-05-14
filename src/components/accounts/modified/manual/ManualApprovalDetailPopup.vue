<template>
	<div class="popup">
		<div class="popup__view">
			<div class="popup__close">
				<div class="btns">
				<button class="btns__close"></button>
				</div>
			</div>
			<div class="popup__title">手动调帐</div>
			<div class="popup__info dottedline-top">
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
						钱包金额
						<div class="popup__info-items notice">-1,000.00</div>
					</div>
					<div class="popup__info-title">
						提款限额
						<div class="popup__info-items">0</div>
					</div>
					<div class="popup__info-title">
						有效流水
						<div class="popup__info-items">0</div>
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
						<div class="popup__info-items">已送审</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">
						附注
						<div class="popup__info-items">2019-01-01 进行 注单有误 进行调帐 申请</div>
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
				</div>
			</div>
			<div class="popup__note">
				<div class="popup__note-title">附注</div>
				<textarea required></textarea>
			</div>
			<div class="popup__btn">
				<div class="btns">
					<button class="btns__submit">通过</button>
					<button class="btns__reject">拒绝</button>
				</div>
			</div>
			<div class="popup__upload"> 
				<div class="popup__upload-title">附件</div>
				<div class="popup__upload-items">
					Type something.jpg
					<div class="btns">
						<button class="btns__close"></button>
					</div>
				</div>
				<div class="popup__upload-items">
					Type something.jpg
					<div class="btns">
						<button class="btns__close"></button>
					</div>
				</div>
				<div class="popup-list">
					<input type="file" name="">
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State, Action, Getter, namespace } from "vuex-class";

@Component
export default class ManualApprovalDetailPopup extends Vue {
}
</script>
<style lang="scss" scoped>
.popup__upload-items {
	cursor: pointer;
}
</style>