<template>
	<div class="wrap">
		<div class="system--maquee">
			<div class="title">跑马灯查询条件</div>
			<div class="search">
				<div class="search-title">▼依跑马灯讯息编号查询</div>
				<div class="search-form">
					<div class="search-items">
						<label>跑马灯讯息编号</label>
						<input type="text" required>
					</div>
					<div class="search-items">
						<button class="btns__green">查找</button>
					</div>
				</div>
				<div class="search-title">▼依纪录查询</div>
				<div class="search-form">
					<div class="search-items">
						<label>状态</label>
						<select name="">
							<option value="">全部</option>
							<option value="">上架中</option>
							<option value="">已下架</option>
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
					<th>跑马灯讯息编号</th>
					<th>讯息设定结束时间</th>
					<th>讯息说明</th>
					<th>文字内容</th>
					<th>状态</th>
					<th>最新资料更新时间</th>
					<th>最新更新人员</th>
					<th> </th>
				</tr>
				<tr>
					<td>brocast_0001</td>
					<td>2018-02-20 17:00</td>
					<td>中大奖讯息</td>
					<td>恭喜!! OOO已經中大獎了! 祝賀</td>
					<td> 
						<p class="success">上架</p>
						<p class="settle">下架</p>
					</td>
					<td>2018-12-30 17:00</td>
					<td>LEE</td>
					<td> 
						<div class="btns__right"></div>
					</td>
				</tr>
				<tr>
					<td>brocast_0001</td>
					<td>2018-02-20 17:00</td>
					<td>中大奖讯息</td>
					<td>恭喜!! OOO已經中大獎了! 祝賀</td>
					<td> 
						<p class="success">上架</p>
						<p class="settle">下架</p>
					</td>
					<td>2018-12-30 17:00</td>
					<td>LEE</td>
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

@Component
export default class Maquee extends Vue {
}
</script>

<style lang="scss" scoped>
.system--maquee {
	table.list {
		td {
			&:nth-child(4) {
				max-width: 120px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}	
}
</style>
