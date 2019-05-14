<template>
	<div class="wrap">
		<div class="account--vip-withdrawt--apply">
			<div class="title">帐务 - 人工充值 - 审核 </div>
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
			</div>
			<table class="list">
				<tr>
					<th>发起对象</th>
					<th>接收对象</th>
					<th>交易时间</th>
					<th>钱包金额</th>
					<th>提款限额</th>
					<th>类别</th>
					<th>状态</th>
					<th>平台交易编号
						<p>第三方交易编号</p>
					</th>
					<th>币别</th>
					<th>操作人员</th>
					<th> </th>
				</tr>
				<tr>
					<td>SYSTEM</td>
					<td>87654321</td>
					<td>2018-12-31 18:00</td>
					<td>+100.00</td>
					<td>+100.00</td>
					<td>人工充值</td>
					<td> 
						<p class="success">申请中</p>
					</td>
					<td> 
						<p>gm20181206101063455</p>
						<p>ZHY123991</p>
					</td>
					<td>CNY</td>
					<td>JORDAN</td>
					<td> 
						<div class="btns__right" ></div>
					</td>
				</tr>
				<tr>
					<td>SYSTEM</td>
					<td>87654321</td>
					<td>2018-12-31 18:00</td>
					<td>+100.00</td>
					<td>+100.00</td>
					<td>人工充值</td>
					<td> 
						<p class="success">申请中</p>
					</td>
					<td> 
						<p>gm20181206101063455</p>
						<p>ZHY123991</p>
					</td>
					<td>CNY</td>
					<td>JORDAN</td>
					<td> 
						<div class="btns__right" ></div>
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

@Component
export default class VipDepositApproval extends Vue {
}
</script>

