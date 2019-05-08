<template>
	<div class="popup">
		<div class="popup__view">
			<div class="popup__close">
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
						<td>今日累积提款总额</td>
						<td>100.00</td>
						<td>100.00</td>
						<td>100.00</td>
						<td>100.00</td>
					</tr>
					<tr>
						<td>本次提款金额</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
					</tr>
					<tr>
						<td>昨日流水</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
					</tr>
					<tr>
						<td>今日盈利</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
					</tr>
					<tr>
						<td>七日盈利</td>
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
						<td>今日累积提款总额</td>
						<td>100.00</td>
						<td>100.00</td>
						<td>100.00</td>
						<td>100.00</td>
					</tr>
					<tr>
						<td>本次提款金额</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
					</tr>
					<tr>
						<td>昨日流水</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
					</tr>
					<tr>
						<td>今日盈利</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
					</tr>
					<tr>
						<td>七日盈利</td>
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
.popup {
	&__view {
		width: 1280px;
	}
}
</style>
