<template>
	<div class="wrap">
		<div class="account-transaction">
			<div class="title">帐务 - 交易</div>
			<div class="search">
				<div class="search-title">▼依编号查询</div>
				<div class="search-form">
					<div class="search-items">
						<label>交易编号</label>
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
						<label>类别</label>
						<select name="">
							<option value=""></option>
						</select>
					</div>
					<div class="search-items">
						<label>状态</label>
						<select name="">
							<option value=""> </option>
						</select>
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
				<div class="title">交易查询结果</div>
			</div>
			<div class="search__result">
				<table class="search__result-list">
					<tr>
						<th>交易笔数</th>
						<th>转入钱包</th>
						<th>转出钱包</th>
						<th>结余</th>
					</tr>
					<tr>
						<td>30</td>
						<td>80,000.00</td>
						<td>50,000.00</td>
						<td>+30,000.00</td>
					</tr>
				</table>
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
					<th>操作人员</th>
					<th>有效流水</th>
					<th>提款限额</th>
					<th> </th>
				</tr>
				<tr>
					<td>SYSTEM</td>
					<td>75339673967367337533967396736733</td>
					<td>2018-12-31 18:00</td>
					<td>100.00</td>
					<td>CNY</td>
					<td>人工充值</td>
					<td>
						<p class="success">成功</p>
						<p class="settle">待结算</p>
					</td>
					<td>
						<p>gm20181206101063455</p>
						<p>ZHY123991</p>
					</td>
					<td>JORDAN</td>
					<td class="notice">-353.00</td>
					<td>+500.00</td>
					<td>
						<div class="btns__right"></div>
					</td>
				</tr>
				<tr>
					<td>SYSTEM</td>
					<td>75339673967367337533967396736733</td>
					<td>2018-12-31 18:00</td>
					<td>100.00</td>
					<td>CNY</td>
					<td>人工充值</td>
					<td>
						<p class="settle">待结算</p>
					</td>
					<td>
						<p>gm20181206101063455</p>
						<p>ZHY123991</p>
					</td>
					<td>JORDAN</td>
					<td class="notice">-353.00</td>
					<td>+500.00</td>
					<td>
						<div class="btns__right"></div>
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

