<template>
	<div class="wrap">
		<div class="account--modified--manual--approval">
			<div class="title">帐务 - 调帐 - 手动调帐</div>
			<div class="search">
			<div class="search-title">▼依交易編號查询</div>
			<div class="search-form">
				<div class="search-items">
				<label>交易編號</label>
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
				<label>类别</label>
				<select name="">
					<option value="">审核中</option>
					<option value="">审核中</option>
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
			</div>
			<table class="list">
			<tr>
				<th>发起对象</th>
				<th>接收对象</th>
				<th>申请时间</th>
				<th>钱包金额</th>
				<th>提款限额</th>
				<th>有效流水</th>
				<th>类别</th>
				<th>状态</th>
				<th>调帐申请编号</th>
				<th>币别</th>
				<th>操作人员</th>
				<th></th>
			</tr>
			<tr>
				<td>AKR543985</td>
				<td>75339673967367337533967396736733</td>
				<td>2018-12-30 17:00</td>
				<td>1,000.00</td>
				<td>1,000.00</td>
				<td>+123</td>
				<td>调帐</td>
				<td class="notice">审核中</td>
				<td>gm20181206101063455</td>
				<td>CNY</td>
				<td>Peter</td>
				<td>
				<div class="btns__right" v-on:click="open"></div>
				</td>
			</tr>
			<tr>
				<td>AKR543985</td>
				<td>75339673967367337533967396736733</td>
				<td>2018-12-30 17:00</td>
				<td>1,000.00</td>
				<td>1,000.00</td>
				<td class="notice">-123</td>
				<td>调帐</td>
				<td class="notice">审核中</td>
				<td>gm20181206101063455</td>
				<td>CNY</td>
				<td>Peter</td>
				<td>
				<div class="btns__right" v-on:click="open"></div>
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
export default class ManualApproval extends Vue {
}
</script>

<style lang="scss" scoped>

</style>