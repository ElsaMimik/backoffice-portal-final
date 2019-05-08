<template>
	<div class="wrap">
		<div class="risk-control--withdraw-limitation-setting">	
			<div class="title">风控 - 当前风控条件</div>
			<div class="popup__info-title">最新修改人员</div>
			<p>AMY</p>
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
					<td>1,000,000.00</td>
					<td>5,000.00</td>
					<td>5,000.00</td>
					<td>1,000,000.00</td>
				</tr>
				<tr>
					<td>本次提款金额</td>
					<td>1,000,000.00</td>
					<td>1,000,000.00</td>
					<td>1,000,000.00</td>
					<td>1,000,000.00</td>
				</tr>
				<tr>
					<td>昨日流水</td>
					<td>1,000,000.00</td>
					<td>1,000,000.00</td>
					<td>1,000,000.00</td>
					<td>1,000,000.00</td>
				</tr>
				<tr>
					<td>今日盈利</td>
					<td>1,000,000.00</td>
					<td>1,000,000.00</td>
					<td>1,000,000.00</td>
					<td>1,000,000.00</td>
				</tr>
				<tr>
					<td>七日盈利</td>
					<td>1,000,000.00</td>
					<td>1,000,000.00</td>
					<td>1,000,000.00</td>
					<td>1,000,000.00</td>
				</tr>
			</table>
			<div class="btns">
				<button class="btns__green" v-on:click="open">更新参数值</button>
				<button class="btns__green" v-on:click="open">修改纪录</button>
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
		float: right;
	}
}
</style>
