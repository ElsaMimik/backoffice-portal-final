<template>
	<div class="popup">
		<div class="popup__view">
			<div class="popup__close" v-on:click="open">
				<div class="btns">
					<button class="btns__close"></button>
				</div>
			</div>
			<div class="popup__title">修改纪录</div>
			<div class="popup__info dottedline-top"></div>
			<div class="popup-editrecord">
				<table>
					<tr>
						<th></th>
						<th>等级A</th>
						<th>等级B</th>
						<th>等级C</th>
						<th>等级D</th>
					</tr>
					<tr>
						<td>累积充值额度</td>
						<td>100.00</td>
						<td>100.00</td>
						<td>100.00</td>
						<td>100.00</td>
					</tr>
					<tr>
						<td>累積充值次數</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
					</tr>
				</table>
				<div class="popup__info dottedline-top"></div>
				<div class="popup-list">
					<div class="popup__info-title">时间
						<div class="popup__info-items">2019-01-01 17:00</div>
					</div>
					<div class="popup__info-title">操作人员
						<div class="popup__info-items">DAVID</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">附注
						<div class="popup__info-items">更新参数值更新参数值更新参数值更新参数值更新参数值更新参数值更新参数值更新</div>
					</div>
				</div>
			</div>
			<div class="popup-editrecord">
				<table>
					<tr>
						<th></th>
						<th>等级A</th>
						<th>等级B</th>
						<th>等级C</th>
						<th>等级D</th>
					</tr>
					<tr>
						<td>累积充值额度</td>
						<td>100.00</td>
						<td>100.00</td>
						<td>100.00</td>
						<td>100.00</td>
					</tr>
					<tr>
						<td>累積充值次數</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
					</tr>
				</table>
				<div class="popup__info dottedline-top"></div>
				<div class="popup-list">
					<div class="popup__info-title">操作人员
						<div class="popup__info-items">DAVID</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">附注
						<div class="popup__info-items">更新参数值更新参数值更新参数值更新参数值更新参数值更新参数值更新参数值更新</div>
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
export default class LevelSettingRecordPopup extends Vue {
}
</script>

<style lang="scss" scoped>
.popup {
	&__view {
		width: 1280px;
	}
}
</style>