<template>
	<div class="wrap">
		<div class="account-modified-abnormal-approval">
			<div class="title">帐务 - 调帐 - 注单异常调帐</div>
			<div class="search">
			<div class="search-title">▼依编号查询</div>
			<form class="search-form">
				<div class="search-items">
				<label>交易编号</label>
				<input type="text" required>
				<input class="radio" type="radio" value="">平台
				<input class="radio" type="radio" value="">第三方
				</div>
				<div class="search-items">
				<button class="btns__green">查找</button>
				</div>
			</form>
			<div class="search-title">▼依纪录查询</div>
			<form class="search-form">
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
			</form>
			</div>
			<table class="list">
			<tr>
				<th>完整帐号ID</th>
				<th>平台交易编号
				<p>第三方交易编号</p>
				</th>
				<th>滑入时间</th>
				<th>滑入平台金额</th>
				<th>之前滑出金额</th>
				<th>滑帐异动金额</th>
				<th>注单结算金额</th>
				<th>币别</th>
				<th>游戏名称</th>
				<th> </th>
				<th> </th>
			</tr>
			<tr>
				<td>75339673967367337533967396736733</td>
				<td> 
				<p>gm20181206101063455</p>
				<p>ZHY123991</p>
				</td>
				<td>2018-12-30 17:00</td>
				<td>+100.00</td>
				<td>-100.00</td>
				<td class="notice">-100.00</td>
				<td class="notice">-100.00</td>
				<td>CNY</td>
				<td>火龙珠</td>
				<td>
				<button class="btns__green" v-on:click="open">审核</button>
				</td>
				<td> <a href="./account--modified--manual--record.html">
					<div class="btns__right"></div></a></td>
			</tr>
			<tr>
				<td>75339673967367337533967396736733</td>
				<td> 
				<p>gm20181206101063455</p>
				<p>ZHY123991</p>
				</td>
				<td>2018-12-30 17:00</td>
				<td>+100.00</td>
				<td>-100.00</td>
				<td class="notice">-100.00</td>
				<td class="notice">-100.00</td>
				<td>CNY</td>
				<td>火龙珠</td>
				<td>
				<button class="btns__green" v-on:click="open">审核</button>
				</td>
				<td> <a href="./account--modified--manual--record.html">
					<div class="btns__right"></div></a></td>
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
.account-modified-abnormal-approval {
	table.list {
		text-align: left;
		td {
			max-width: inherit;
			&:first-child {
				max-width: 128px;
			}
		}
	}
}
</style>