<template>
	<div class="wrap">
		<div class="title">会员状态修改</div>
		<div class="member__detail">
			<div class="member__detail__info">
				<div class="member__detail-list dottedline">
					<div class="member__detail-title">帐号ID
						<div class="member__detail-items"> 
							<p>7533967396736733</p>
							<p>7533967396736733</p>
						</div>
					</div>
					<div class="member__detail-title">角色
						<div class="member__detail-items">直客</div>
					</div>
					<div class="member__detail-title">提现状态
						<div class="member__detail-items">正常</div>
					</div>
					<div class="member__detail-title">帐号状态
						<div class="member__detail-items">正常</div>
					</div>
					<div class="member__detail-title">风控黑名单
						<div class="member__detail-items">是</div>
					</div>
					<div class="member__detail-title">风控等级
						<div class="member__detail-items">C</div>
					</div>
				</div>
				<div class="member__detail-list dottedline">
					<div class="member__detail-title">钱包金额
						<div class="member__detail-items">34,234.23</div>
					</div>
					<div class="member__detail-title">保险箱金额
						<div class="member__detail-items">5,000.00</div>
					</div>
					<div class="member__detail-title">游戏冻结金额
						<div class="member__detail-items">0</div>
					</div>
					<div class="member__detail-title">提款限额
						<div class="member__detail-items">200.00</div>
					</div>
					<div class="member__detail-title">有效流水
						<div class="member__detail-items">200.00</div>
					</div>
					<div class="member__detail-title">会员注单
						<div class="member__detail-items">已结算</div>
					</div>
					<div class="member__detail-title">注单结算金额
						<div class="member__detail-items notice">異常</div>
					</div>
					<div class="member__detail-title">可提领金额
						<div class="member__detail-items">43,549.00</div>
					</div>
					<div class="member__detail-title">会员中大奖
						<div class="member__detail-items notice">是</div>
					</div>
				</div>
				<button class="btns__green">查询交易纪录</button>
			</div>
			<div class="member__detail-btns">
				<div class="member__detail-list">
					<div class="btns">
						<button class="btns__green active">基本资料</button>
						<button class="btns__green">交易资料</button>
						<button class="btns__green">登入资料</button>
						<button class="btns__green">关联资料</button>
						<button class="btns__green">风控条件</button>
					</div>
				</div>
			</div>
			<div class="member__detail-memberdata">
				<div class="member__detail-list">
					<div class="member__detail-title">会员昵称
						<div class="member__detail-items">Peter</div>
					</div>
					<div class="member__detail-title">创建时间
						<div class="member__detail-items">2019-01-01 12:00</div>
					</div>
					<div class="member__detail-title">使用币别
						<div class="member__detail-items">人民币</div>
					</div>
					<div class="member__detail-title">手机号
						<div class="member__detail-items">＊＊＊＊3453</div>
					</div>
				</div>
			</div>
			<div class="member__detail-transactiondata">
				<div class="member__detail-list">
					<div class="member__detail-title">最新提现成功交易时间
						<div class="member__detail-items">2019-01-01 12:00</div>
					</div>
					<div class="member__detail-title">最新充值成功交易时间
						<div class="member__detail-items">2019-01-01 12:00</div>
					</div>
					<div class="member__detail-title">充值 - 审核中
						<div class="member__detail-items">300.00</div>
					</div>
					<div class="member__detail-title">提现 - 审核中
						<div class="member__detail-items">300.00</div>
					</div>
				</div>
				<div class="member__detail-list">
					<table>
						<tr>
							<th> </th>
							<th>本日累积</th>
							<th>7日累积</th>
						</tr>
						<tr>
							<td>充值</td>
							<td>5,000.00</td>
							<td>5,000.00</td>
						</tr>
						<tr>
							<td>提现</td>
							<td>5,000.00</td>
							<td>5,000.00</td>
						</tr>
						<tr>
							<td>有效流水</td>
							<td>5,000.00</td>
							<td>5,000.00</td>
						</tr>
					</table>
				</div>
			</div>
			<div class="member__detail-logindata">
				<div class="member__detail-list dottedline">
					<div class="member__detail-title">最新登入时间
						<div class="member__detail-items">2019-01-01 12:00</div>
					</div>
					<div class="member__detail-title">IP
						<div class="member__detail-items">127.0.0.1</div>
					</div>
					<div class="member__detail-title">登入状态
						<div class="member__detail-items">成功</div>
					</div>
					<div class="member__detail-title">登入方式
						<div class="member__detail-items">APP</div>
					</div>
				</div>
				<div class="search">
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
							<label>类别</label>
							<select name="">
								<option value="">成功</option>
								<option value="">成功</option>
							</select>
						</div>
						<button class="btns__green">查找</button>
					</form>
					<table class="list">
						<tr>
							<th>登入时间</th>
							<th>IP</th>
							<th>登入状态</th>
							<th>登入方式</th>
						</tr>
						<tr>
							<td>2019-01-01 12:00</td>
							<td>127.0.0.1</td>
							<td>成功</td>
							<td>APP</td>
						</tr>
						<tr>
							<td>2019-01-01 12:00</td>
							<td>127.0.0.1</td>
							<td class="notice">失败</td>
							<td>APP</td>
						</tr>
					</table>
				</div>
			</div>
			<div class="member__detail-associationdata">
				<div class="search">
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
							<label>类别</label>
							<select name="">
								<option value="">成功</option>
								<option value="">成功</option>
							</select>
						</div>
						<button class="btns__green">查找</button>
					</form>
				</div>
				<table class="list">
					<tr>
						<th>登入时间</th>
						<th>登入IP</th>
						<th>登入方式</th>
						<th>角色</th>
					</tr>
					<tr>
						<td>2019-01-01 12:00</td>
						<td>127.0.0.1</td>
						<td>APP</td>
						<td>直客</td>
					</tr>
					<tr>
						<td>2019-01-01 12:00</td>
						<td>127.0.0.1</td>
						<td>APP</td>
						<td>直客</td>
					</tr>
				</table>
			</div>
			<div class="member__detail-riskcontrol">
				<div class="title">▼会员风控资料</div>
				<div class="member__detail-list">
					<div class="member__detail-title">风控等级
						<div class="member__detail-items">Ｃ</div>
					</div>
					<div class="member__detail-title">累积充值金额
						<div class="member__detail-items">100.00</div>
					</div>
					<div class="member__detail-title">累积充值成功次数
						<div class="member__detail-items">6</div>
					</div>
					<div class="member__detail-title">本日累积贡献度
						<div class="member__detail-items">+100.00</div>
					</div>
				</div>
				<div class="title">▼会员有无违反提现风控条件</div>
				<div class="member__detail-list">
					<table>
						<tr>
							<th></th>
							<th> </th>
							<th>本日累积</th>
							<th>7日累积</th>
						</tr>
						<tr>
							<td></td>
							<td>本日提款</td>
							<td>5,000.00</td>
							<td>5,000.00</td>
						</tr>
						<tr>
							<td></td>
							<td>本日有效流水</td>
							<td>5,000.00</td>
							<td>5,000.00</td>
						</tr>
						<tr>
							<td class="notice">違反</td>
							<td>本日贡献度</td>
							<td>5,000.00</td>
							<td>5,000.00</td>
						</tr>
						<tr>
							<td></td>
							<td>七日贡献度</td>
							<td>5,000.00</td>
							<td>5,000.00</td>
						</tr>
					</table>
					<table>
						<tr>
							<th></th>
							<th>申请提现的金额</th>
							<th>对应风控条件</th>
						</tr>
						<tr>
							<td class="notice">違反</td>
							<td class="notice">5,000.00</td>
							<td>5,000.00</td>
						</tr>
						<tr>
							<td> </td>
							<td>5,000.00</td>
							<td>5,000.00</td>
						</tr>
					</table>
				</div>
				<div class="title">▼会员最新风控等级更新资讯</div>
				<div class="member__detail-list">
					<div class="member__detail-title">最新风控等级更新时间
						<div class="member__detail-items">Ｃ2019-01-03 04:31</div>
					</div>
					<div class="member__detail-title">会员存流比
						<div class="member__detail-items">5.3</div>
					</div>
					<div class="member__detail-title">更新人员
						<div class="member__detail-items">系统 CS_09</div>
					</div>
				</div>
				<div class="member__detail-list">
					<div class="member__detail-title">原因
						<div class="member__detail-items">上次調整原因, 因為OOOOO經過評估確認後 進行調整.</div>
					</div>
				</div>
			</div>
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
.member__detail {
	line-height: 200%;
	&-list {
		vertical-align: top;
		display: flex;
		flex-direction: row;
		justify-content:flex-start;
		align-content: flex-start;
		flex-wrap: wrap;
		padding: 5px 0 0 0;
		margin: 10px 0;
		table {
			width: 56%;
			margin: 0 100px 50px 0 ;
			&:nth-child(2) {
				width: 30%;
				margin: 0 0 0 0 ;
			}
			th {
				vertical-align: middle;
				color: #687826;
				font-weight: 600;
			}
			tr {
				height: 50px;
				border-bottom: 1px dotted #687826;
			}
			td {
				vertical-align: middle;
				&:first-child {
					color: #687826;
					font-weight: 600;
				}
			}
		}
		.btns__green {
			margin: 10px 10px 10px 0;
		}
	}
	table.list {
		width: 580px;
		text-align: left;
		th {
			text-align: left;
			padding: 0 20px;
		}
		td {
			height: 50px;
			padding: 0 20px;
		}
	}
	.dottedline {
		border-bottom: 1px dotted #687826;
	}
	.title {
		font-weight: 600;
		font-size: 20px;
		text-align: left;
	}
}
</style>