<template>
	<div class="wrap">
		<div class="account--game-bet-record">
			<div class="title">帐务 - 抄單</div>
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
			</div>
			<div class="search">
				<div class="search-title">▼依局号 / 注单编号查询</div>
				<div class="search-form">
					<div class="search-items">
						<label>局号 / 注单编号</label>
						<input type="text" required>
						<input class="radio" type="radio" value="">局号
						<input class="radio" type="radio" value="">注单编号
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
						<label>游戏类别</label>
						<select name="">
							<option value=""></option>
						</select>
					</div>
					<div class="search-items">
						<label>游戏名称</label>
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
					<th>完整帐号ID</th>
					<th>平台交易编号</th>
					<th>局号</th>
					<th>下注时间</th>
					<th>下注金额</th>
					<th>派彩金额</th>
					<th>有效流水</th>
					<th>状态</th>
					<th>类别</th>
					<th>名称</th>
					<th> </th>
				</tr>
				<tr>
					<td>75339673967367337533967396736733</td>
					<td>KD5349589589</td>
					<td>12345678901234</td>
					<td>2018-12-31 18:00</td>
					<td>100.00</td>
					<td>100.00</td>
					<td>+100.00</td>
					<td>
						<p class="success">成功</p>
						<p class="settle">待结算</p>
					</td>
					<td>SLOT</td>
					<td>火龙珠</td>
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

