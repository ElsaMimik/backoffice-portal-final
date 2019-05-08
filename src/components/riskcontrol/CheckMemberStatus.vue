<template>
	<div class="wrap">
		<div class="risk-control--check-member-status">
			<div class="title">风控 - 会员风控状态</div>
			<div class="search">
				<div class="search-form">
					<div class="search-items">
						<label>帐号ID</label>
						<input type="text">
					</div>
					<div class="search-items">
						<button class="btns__green">查找</button>
					</div>
				</div>
				<div class="search__result">
					<div class="title">查询结果</div>
					<table class="search__result-list">
						<tr>
							<th>笔数</th>
							<th>转出钱包</th>
						</tr>
						<tr>
							<td>30</td>
							<td>80,000.00</td>
						</tr>
					</table>
				</div>
			</div>
			<table class="list">
				<tr>
					<th>帐号ID</th>
					<th>风控等级</th>
					<th>钱包金额</th>
					<th>游戏冻结金额</th>
					<th>帐号状态</th>
					<th>提现状态</th>
					<th>建立日期</th>
					<th>风控黑名单</th>
					<th>角色</th>
					<th>完整帐号ID</th>
					<th> </th>
					<th></th>
				</tr>
				<tr>
					<td>75339673</td>
					<td>C</td>
					<td>1,000.0000</td>
					<td>1,000.0000</td>
					<td>
						<p>不可登入</p>
						<p>(E2)</p>
					</td>
					<td>自动</td>
					<td>2019-01-03</td>
					<td>Ｙ</td>
					<td>直客</td>
					<td>75339673967367337533967396736733</td>
					<td>
						<button class="btns__green">执行</button>
					</td>
					<td>
						<button class="btns__green">风控异动纪录</button>
					</td>
				</tr>
				<tr>
					<td>75339673</td>
					<td>C</td>
					<td>1,000.0000</td>
					<td>1,000.0000</td>
					<td>正常</td>
					<td>不可提现</td>
					<td>2019-01-03</td>
					<td>Ｙ</td>
					<td>直客</td>
					<td>75339673967367337533967396736733</td>
					<td>
						<button class="btns__green">执行</button>
					</td>
					<td>
						<button class="btns__green">风控异动纪录</button>
					</td>
				</tr>
			</table>
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
.risk-control--check-member-status {
	table.list {
		td {
			max-width: inherit;
			&:first-child {
				max-width: 125px;
				text-align: left;
			}
			&:nth-child(10) {
				text-align: left;
				max-width: 125px;
			}
		}
	}
}
</style>