<template>
	<div class="popup">
		<div class="popup__view">
			<div class="popup__close">
				<div class="btns">
					<button class="btns__close"></button>
				</div>
			</div>
			<div class="popup__title">更新</div>
			<div class="popup__info dottedline-top">
				<div class="popup-list">
					<div class="popup__info-title">操作人员
						<div class="popup__info-items">LEE</div>
					</div>
				</div>
			</div>
			<div class="popup__note">
				<div class="popup__note-title">第1则文字</div>
				<textarea>這是第1個文字跑馬燈</textarea>
			</div>
			<div class="popup__note">
				<div class="popup__note-title">第2则文字</div>
				<textarea>這是第2個文字跑馬燈</textarea>
			</div>
			<div class="popup__note">
				<div class="popup__note-title">第3则文字</div>
				<textarea>這是第3個文字跑馬燈</textarea>
			</div>
			<div class="popup__note">
				<div class="popup__note-title">第4则文字</div>
				<textarea>這是第4個文字跑馬燈</textarea>
			</div>
			<div class="popup__note">
				<div class="popup__note-title">第5则文字</div>
				<textarea>這是第5個文字跑馬燈</textarea>
			</div>
			<div class="popup__note">
				<div class="popup__note-title">说明</div>
				<textarea>暫定大贏或是大輸設定皆為10倍.  有效流水倍率為0.75.</textarea>
			</div>
			<div class="popup__btn">
				<div class="btns">
					<button class="btns__submit">更新</button>
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
export default class MaqueePopup extends Vue {
}
</script>

<style lang="scss" scoped>
.risk-control--withdraw-limitation-setting {
	table {
		width: 100%;
		margin: 0 100px 50px 0 ;
		text-align: center;
		th {
			vertical-align: middle;
			color: #687826;
			font-weight: 600;
			text-align: center;
		}
		tr {
			height: 50px;
			border-bottom: 1px dotted #687826;
		}
		td {
			vertical-align: middle;
			&:first-child {
				color: #687826;
				font-weight: 600;
				text-align: right;
				width: 200px;
			}
		}
	}
	.btns {
		text-align:right;
	}
}
</style>
