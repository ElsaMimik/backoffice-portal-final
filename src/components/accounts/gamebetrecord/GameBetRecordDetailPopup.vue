<template>
	<div class="popup">
		<div class="popup__view">
			<div class="popup__close">
				<div class="btns">
					<button class="btns__close"></button>
				</div>
			</div>
			<div class="popup__title">注单明细</div>
			<div class="popup__info dottedline-top">
				<div class="popup__info-title">
					帐号ID
					<div class="popup__info-items">
						<p>7533967396736733</p>
						<p>7533967396736733</p>
					</div>
				</div>
			</div>
			<div class="popup__title"></div>
			<div class="popup__info dottedline-top">
				<div class="popup-list">
					<div class="popup__info-title">
						名称
						<div class="popup__info-items">火龙珠</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">
						平台交易编号
						<div class="popup__info-items">KD2342351945</div>
					</div>
					<div class="popup__info-title">
						类别
						<div class="popup__info-items">SLOT</div>
					</div>
					<div class="popup__info-title">
						局号
						<div class="popup__info-items">45245251234</div>
					</div>
					<div class="popup__info-title">
						状态
						<div class="popup__info-items">成功 </div>
					</div>
					<div class="popup__info-title">
						下注时间
						<div class="popup__info-items">2019-01-01 17:00</div>
					</div>
					<div class="popup__info-title">
						有效流水
						<div class="popup__info-items">+500.00</div>
					</div>
					<div class="popup__info-title">
						下注金额
						<div class="popup__info-items">500.00</div>
					</div>
					<div class="popup__info-title">
						派彩金额
						<div class="popup__info-items">+500.00</div>
					</div>
				</div>
			</div>
			<div class="popup__title"></div>
			<div class="popup__info dottedline-top">
				<div class="popup-list">
					<div class="popup__info-title">
						派彩时间
						<div class="popup__info-items">2019-01-01 17:00</div>
					</div>
					<div class="popup__info-title">
						贡献度
						<div class="popup__info-items notice">-100.00</div>
					</div>
					<div class="popup__info-title">
						币别
						<div class="popup__info-items">CNY</div>
					</div>
					<div class="popup__info-title">
						此注单是否为大赢
						<div class="popup__info-items">NO</div>
					</div>
					<div class="popup__info-title">
						第三方游戏编号
						<div class="popup__info-items">4524</div>
					</div>
					<div class="popup__info-title">
						第三方交易编号
						<div class="popup__info-items">JA23423425963421</div>
					</div>
					<div class="popup__info-title">
						有效流水
						<div class="popup__info-items">+500.00</div>
					</div>
					<div class="popup__info-title">
						单一注单边号
						<div class="popup__info-items">TI_23523423412</div>
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

@Component
export default class GameBetRecordDetailPopup extends Vue {
}
</script>