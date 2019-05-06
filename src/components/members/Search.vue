<template>
	<div class="wrap">
		<div class="member">
			<div class="title">会员</div>
			<div class="search">
				<form class="search-form">
					<div class="search-items">
						<label>帐号ID</label>
						<input type="text">
					</div>
					<div class="search-items">
						<button class="btns__green">查找</button>
					</div>
				</form>
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
					<th> </th>
				</tr>
				<tr>
					<td class="notice">75339673</td>
					<td>C</td>
					<td>1,000.0000</td>
					<td>1,000.0000</td>
					<td class="notice"> 
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
						<button class="btns__green" >查询异动纪录</button>
					</td>
					<td> 
						<div class="btns__right"></div>
					</td>
				</tr>
				<tr>
					<td class="notice">75339673</td>
					<td>C</td>
					<td>1,000.0000</td>
					<td>1,000.0000</td>
					<td>正常</td>
					<td class="notice">不可提现</td>
					<td>2019-01-03</td>
					<td class="notice">Ｙ</td>
					<td>直客</td>
					<td>75339673967367337533967396736733</td>
					<td class="notice">
						<button class="btns__green">执行</button>
					</td>
					<td>
						<button class="btns__green">查询异动纪录</button>
					</td>
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
// import { mapState } from 'vuex'
import { Component } from "vue-property-decorator";
import { State, Action, Getter, namespace } from "vuex-class";
import * as Model from "@/models/interfaces/member";

const memberModule = namespace('Member');

@Component
export default class Search extends Vue {

@memberModule.State('memberInfos') members!: Model.ITestMemberResponse[];

@Action('Member/getMember') private getMember!: any;

  mounted () {
    this.getMember();
    // console.log(this.members)
  }
}
</script>
