<template>
	<div class="member__detail-associationdata">
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
                    <select name="">
                        <option value="SameIP">相同IP</option>
                    </select>
                </div>
                <div class="search-items">
                    <button class="btns__green" @click="search">查找</button>
                </div>
            </div>
        </div>
        <table class="list">
            <tr>
                <th>用戶名稱</th>
                <th>登入时间</th>
                <th>登入IP</th>
                <th>登入方式</th>
                <th>角色</th>
            </tr>
            <tr v-for="(item, index) in relationsData" :key="random(index)">
                <td> {{ item.uuid | firstEightYards }} </td>
                <td> {{ item.createDate | timestampToDateAndTime }} </td>
                <td> {{ item.ip }} </td>
                <td> {{ item.loginType }} </td>
                <td> {{ item.roleCode | roleCodeStatusDisplay }} </td>
            </tr>
        </table>
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
export default class DetailRelations extends Vue {
    startDate: string = '';
    endDate: string = '';
    relationsData: Model.IRelationLogin[] = [];
    
    search() {
        if(this.startDate === '' || this.endDate === '') {
            EventBus.SystemAlert(MsgPopupType.Warning, '请选择日期');
			return;
        }
        const startDate = DatetimeConvert.dateToTimeStamp(this.startDate);
        const endDate = DatetimeConvert.dateToTimeStamp(this.endDate);
        MemberApi.getMemberRelationLoginHistory(
            this.$route.params.uuid,
            startDate,
            endDate)
        .then(res => {
            this.relationsData = res.relations;
        });
    }

    random(data: string) {
		return Math.random();
	}
}

</script>