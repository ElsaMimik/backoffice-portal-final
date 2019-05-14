<template>
	<div class="wrap">
		<div class="system--maquee">
			<div class="title">跑马灯 - 当前设定</div>
			<div class="member__detail-list">
				<div class="member__detail-title">
					最新修改人员
					<div class="member__detail-items">AMY</div>
				</div>
			</div>
			<div class="member__detail-list">
				<table>
					<tr>
						<th></th>
						<th></th>
					</tr>
					<tr>
						<td>第1则文字</td>
						<td>這是第1個文字跑馬燈這是第1個文字跑馬燈這是第1個文字跑馬燈這是第1個文字跑馬燈這是第1個文字跑馬燈這是第1個文字跑馬燈這是第1個文字跑馬燈這是第1個文字跑馬燈這是第1個文字跑馬燈這是第1個文字跑馬燈這是第1個文字跑馬燈這是第1個文字跑馬燈這是第1個文字跑馬燈這是第1個文字跑馬燈</td>
					</tr>
					<tr>
						<td>第2则文字</td>
						<td>這是第2個文字跑馬燈</td>
					</tr>
					<tr>
						<td>第3则文字</td>
						<td>這是第3個文字跑馬燈</td>
					</tr>
					<tr>
						<td>第4则文字</td>
						<td>這是第4個文字跑馬燈</td>
					</tr>
					<tr>
						<td>第5则文字</td>
						<td>這是第5個文字跑馬燈</td>
					</tr>
				</table>
			</div>
			<div class="btns">
				<button class="btns__green">更新</button>
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
export default class Maquee extends Vue {
}
</script>

<style lang="scss" scoped>
.system--maquee {
	.member__detail-list {
		table {
			width: 60%;
			margin:auto;
			td {
				padding:20px;
				&:first-child {
					width: 20%;
				}
			}
		}
	}
	.btns {
		text-align: right;
	}
}
</style>
