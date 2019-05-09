<template>
	<div class="member__detail-logindata">
        <div v-if="!isMounted" class="member__detail-list dottedline-bottom">
            <div class="member__detail-title">
                最新登入时间
                <div class="member__detail-items">{{ firstDta.createDate | timestampToDateAndTime }}</div>
            </div>
            <div class="member__detail-title">
                IP
                <div class="member__detail-items">{{ firstDta.ip }}</div>
            </div>
            <div class="member__detail-title">
                登入状态
                <div class="member__detail-items">{{ firstDta.isSuccess | isSuccessDisplay }}</div>
            </div>
            <div class="member__detail-title">
                登入方式
                <div class="member__detail-items">{{ firstDta.loginType }}</div>
            </div>
        </div>
        <div class="search">
            <div class="search-form">
                <div class="search-items">
                    <label>开始日期</label>
                    <input type="date" v-model="startDate">
                </div>
                <div class="search-items">
                    <label>结束日期</label>
                    <input type="date" v-model="endDate">
                </div>
                <div class="search-items">
                    <label>类别</label>
                    <select v-model="isSuccess">
                        <option value="all">---</option>
                        <option value="true">成功</option>
                        <option value="false">失敗</option>
                    </select>
                </div>
                <div class="search-items">
                    <button class="btns__green" @click="search">查找</button>
                </div>
            </div>
            <table v-if="!isMounted" class="list">
                <tr>
                    <th>登入时间</th>
                    <th>IP</th>
                    <th>登入状态</th>
                    <th>登入方式</th>
                </tr>
                <tr v-for="(itme, index) in loginData" :key="random(index)">
                    <td>{{ itme.createDate | timestampToDateAndTime }}</td>
                    <td>{{ itme.ip }}</td>
                    <td>{{ itme.isSuccess | isSuccessDisplay }}</td>
                    <td>{{ itme.loginType }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>


<script lang="ts">

import Vue from "vue";
import { Component } from "vue-property-decorator";
import MemberApi from "@/api/member";
import * as DatetimeConvert from '@/utilities/datetime-format';
import * as Model from "@/models/interfaces/member";
import { datetimeMixin } from '@/utilities/datetime-format';
import { displayFiltersMixin } from '@/utilities/display-filters';
import * as EventBus from "@/utilities/event-bus";
import { MsgPopupType } from '@/models/status/message';

@Component({
	mixins: [datetimeMixin, displayFiltersMixin]
})
export default class DetailLogin extends Vue {
    firstDta: Model.ILoginHistory = {} as Model.ILoginHistory;
    loginData: Model.ILoginHistory[] = [];
	startDate: string = '';
    endDate: string = '';
    isSuccess: string = 'all';
    isMounted: boolean = true;

	search() {
        if(this.startDate === '' || this.endDate === '') {
            EventBus.SystemAlert(MsgPopupType.Warning, '请选择日期');
			return;
        }
		const startDate = DatetimeConvert.dateToTimeStamp(this.startDate);
        const endDate = DatetimeConvert.dateToTimeStamp(this.endDate);
        const isSuccess = this.filterType(this.isSuccess);
        MemberApi.getMemberLoginHistory(
            this.$route.params.uuid,
            startDate,
            endDate,
            isSuccess)
        .then(res => {
            this.loginData = res.histories;
            if(res.histories && res.histories.length > 0 && this.isMounted ) {
                this.isMounted = false;
                this.firstDta = res.histories[0];
            }
        });
    }

    filterType(select: string): boolean|null {
        return select === 'true' ? true : select === 'false' ? false : null;
    }

    init() {
        this.startDate = DatetimeConvert.daysAgo(7);
        this.endDate = DatetimeConvert.daysAgo(0);
        this.search();
    }
    
    mounted() {
        this.init();
    }

    random(data: string) {
		return Math.random();
	}
}

</script>