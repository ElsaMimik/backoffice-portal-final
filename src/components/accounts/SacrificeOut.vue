<template>
	<div class="wrap">
		<div class="account--sacrifice-out">
			<div class="title">帐务 - 调帐 - 注单异常调帐</div>
			<div class="search">
				<div class="search-title">▼依ID查询</div>
				<div class="search-form">
					<div class="search-items">
						<label>交易ID</label>
						<input type="text" required>
						<input class="radio" type="radio" value="">平台
						<input class="radio" type="radio" value="">第三方
					</div>
					<div class="search-items">
						<button class="btns__green">查找</button>
					</div>
				</div>
				<div class="search-title">▼依纪录查询</div>
				<div class="search-form">
					<div class="search-items">
						<label>帐号ID</label>
						<input type="text" required>
					</div>
					<div class="search-items">
						<label>操作人员</label>
						<input type="text" required>
					</div>
					<div class="search-items">
						<label>开始日期</label>
						<input type="date">
					</div>
					<div class="search-items">
						<label>结束日期</label>
						<input type="date">
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
						</tr>
						<tr>
							<td>30</td>
						</tr>
					</table>
				</div>
			</div>
			<table class="list">
				<tr>
					<th>发起对象</th>
					<th>接收对象</th>
					<th>交易时间</th>
					<th>钱包金额</th>
					<th>币别</th>
					<th>类别</th>
					<th>状态</th>
					<th>平台交易编号
						<p>第三方交易编号</p>
					</th>
					<th> </th>
				</tr>
				<tr>
					<td>AKR543985</td>
					<td>百家乐</td>
					<td>2018-12-30 17:00</td>
					<td>1,000.00</td>
					<td>CNY</td>
					<td>滑出</td>
					<td>—</td>
					<td>
						<p>gm20181206101063455</p>
						<p>ZHY123991</p>
					</td>
					<td>
						<button class="btns__green" v-on:click="open">强制滑入平台</button>
					</td>
				</tr>
				<tr>
					<td>AKR543985</td>
					<td>百家乐</td>
					<td>2018-12-30 17:00</td>
					<td>1,000.00</td>
					<td>CNY</td>
					<td>滑出</td>
					<td>—</td>
					<td>
						<p>gm20181206101063455</p>
						<p>ZHY123991</p>
					</td>
					<td>
						<button class="btns__green" v-on:click="open">强制滑入平台</button>
					</td>
				</tr>
				<tr>
					<td>AKR543985</td>
					<td>百家乐</td>
					<td>2018-12-30 17:00</td>
					<td>1,000.00</td>
					<td>CNY</td>
					<td>滑出</td>
					<td>—</td>
					<td>
						<p>gm20181206101063455</p>
						<p>ZHY123991</p>
					</td>
					<td>
						<button class="btns__green" v-on:click="open">强制滑入平台</button>
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
.account--sacrifice-out{
	table.list {
		text-align: inherit;
		th {
			text-align: inherit;
			padding: 0 20px;
			&:nth-child(7) {
				text-align: center;
			}
		}
		td {
			padding: 0 20px;
			max-width: inherit;
			&:nth-child(7) {
				text-align: center;
			}
		}
	}
}
</style>