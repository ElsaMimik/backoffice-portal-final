<template>
	<div class="wrap">
		<div class="member">
			<div class="title">会员</div>
			<div class="search">
				<div class="search-form">
					<div class="search-items">
						<label>帐号ID</label>
						<input type="text" v-model="shortUuid">
					</div>
					<div class="search-items">
						<button class="btns__green" @click="searchClick">查找</button>
					</div>
				</div>
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
					<th></th>
					<th></th>
					<th></th>
				</tr>
				<tr v-for="(item, index) in searchResult" :key="random(index)">
					<td class="notice">{{ item.uuid | firstEightYards }}</td>
					<td> {{ item.riskControlLevel }} </td>
					<td> {{ item.amount | amountDisplay }} </td>
					<td> {{ item.freezeAmount | amountDisplay }} </td>
					<td :class="{ 'notice': item.accountStatus !== 'Normal' }">{{ item.accountStatus | accountStatusDisplay }}</td>
					<td :class="{ 'notice': item.withdrawalStatus !== 'Normal' }">{{ item.withdrawalStatus | withdrawalStatusDisplay }}</td>
					<td> {{ item.createDate | timestampToDate }} </td>
					<td :class="{ 'notice': item.isBlacklisting }"> {{ item.isBlacklisting | isBlacklistingDisplay }} </td>
					<td> {{ item.roleCode | roleCodeStatusDisplay }} </td>
					<td>
						<p>{{ item.uuid | firstUuidYards }}</p>
						<p>{{ item.uuid | lastUuidYards }}</p>
					<td>
						<button class="btns__green" @click="showUpdateStatusPopup(item)">执行</button>
					</td>
					<td>
						<button class="btns__green" @click="showStatusRecordPopup(item)">查询异动纪录</button>
					</td>
					<td>
						<a :href="`/member/detail/${ item.uuid }`" target="_blank" title="Detail">
							<div class="btns__right"/>
						</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Emit, Mixins, Watch } from "vue-property-decorator";
import { State, Action, Getter, namespace } from "vuex-class";
import * as Model from "@/models/interfaces/member";
import { PopupType } from "@/models/status/member";
import MemberApi from "@/api/member";
import { datetimeMixin } from '@/utilities/datetime-format';
import { displayFiltersMixin } from '@/utilities/display-filters';

const memberModule = namespace("Member");

@Component({
	mixins: [datetimeMixin, displayFiltersMixin]
})

export default class Search extends Vue {
	shortUuid: string = "";
	searchResult: Model.IMember[] = [];
	@Prop(Number) readonly reload!: number;
	
	@Watch('reload')
	onReloadChange() {
		this.searchClick();
	}
	
	searchClick() {
		MemberApi.getMemberListAsync(this.shortUuid).then(res => {
			this.searchResult = res.members;
		});
	}

	showUpdateStatusPopup(data: any) {
		this.$emit("show-update-status", {
			type: PopupType.Edit,
			open: true,
			data
		});
	}
	showStatusRecordPopup(data: any) {
		this.$emit("show-update-status", {
			type: PopupType.Record,
			open: true,
			data
		});
	}
	random(data: string) {
		return Math.random();
	}
}
</script>
