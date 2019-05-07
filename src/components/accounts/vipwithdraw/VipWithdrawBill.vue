<template>
	<div class="wrap">
			<div class="account--vip-withdraw--bill">
					<div class="title">帐务 - 人工提現 - 出帳</div>
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
							</form>
					</div>
					<div class="search__result">
							<div class="title">交易查询结果</div>
							<table class="search__result-list">
									<tr>
											<th>笔数</th>
											<th>总有效流水</th>
											<th>总贡献度</th>
											<th>总派彩</th>
											<th>总下注</th>
									</tr>
									<tr>
											<td>30</td>
											<td>80,000.00</td>
											<td>+50,000.00</td>
											<td>30,000.00</td>
											<td>30,000.00</td>
									</tr>
							</table>
					</div>
					<table class="list">
							<tr>
									<th>发起对象</th>
									<th>接收对象</th>
									<th>交易时间</th>
									<th>钱包金额</th>
									<th>提款限额</th>
									<th>有效流水</th>
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
									<td>75339673967367337533967396736733</td>
									<td>AKR543985</td>
									<td>2018-12-31 18:00</td>
									<td>100.00</td>
									<td>100.00</td>
									<td>+100.00</td>
									<td>人工提現</td>
									<td>
											<p class="settle">出帐中</p>
									</td>
									<td>
											<p>gm20181206101063455</p>
											<p>ZHY123991</p>
									</td>
									<td>CNY</td>
									<td>John</td>
									<td>
											<div class="btns__right"></div>
									</td>
							</tr>
							<tr>
									<td>75339673967367337533967396736733</td>
									<td>AKR543985</td>
									<td>2018-12-31 18:00</td>
									<td>100.00</td>
									<td>100.00</td>
									<td>+100.00</td>
									<td>人工提現</td>
									<td>
											<p class="settle">出帐中</p>
									</td>
									<td>
											<p>gm20181206101063455</p>
											<p>ZHY123991</p>
									</td>
									<td>CNY</td>
									<td>John</td>
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
