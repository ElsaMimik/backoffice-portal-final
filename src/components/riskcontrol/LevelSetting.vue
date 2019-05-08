<template>
	<div class="wrap">
		<div class="risk-control--level-setting">
			<div class="title">风控 - 当前风控等级</div>
			<div class="member__detail-list">
				<div class="member__detail-title">最新修改人员
					<div class="member__detail-items">AMY</div>
				</div>
			</div>
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
					<td>1,000,000.00</td>
					<td>5,000.00</td>
					<td>5,000.00</td>
					<td>1,000,000.00</td>
				</tr>
				<tr>
					<td>累積充值次數</td>
					<td>10</td>
					<td>2</td>
					<td>5</td>
					<td>1</td>
				</tr>
			</table>
			<div class="btns">
				<button class="btns__green">更新参数值</button>
				<button class="btns__green">修改纪录</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State, Action, Getter, namespace } from "vuex-class";

@Component
export default class LevelSetting extends Vue {
}
</script>

<style lang="scss" scoped>
.risk-control--level-setting {
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
			}
		}
	}
	.btns {
		float: right;
	}
}
</style>