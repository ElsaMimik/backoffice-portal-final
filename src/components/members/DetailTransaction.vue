<template>
    <div class="member__detail-transactiondata">
        <div class="member__detail-list">
            <div class="member__detail-title">
                最新提现成功交易时间
                <div class="member__detail-items">{{ turnoverData.lastWithdrawDate | timestampToDateAndTime }}</div>
            </div>
            <div class="member__detail-title">
                最新充值成功交易时间
                <div class="member__detail-items">{{ turnoverData.lastDepositDate | timestampToDateAndTime }}</div>
            </div>
            <div class="member__detail-title">
                充值 - 审核中
                <div class="member__detail-items">{{ turnoverData.depositingAmount | amountDisplay }}</div>
            </div>
            <div class="member__detail-title">
                提现 - 审核中
                <div class="member__detail-items">{{ turnoverData.withdrawingAmount | amountDisplay }}</div>
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
                    <td>{{ turnoverData.dailyDepositAmount | amountDisplay }}</td>
                    <td>{{ turnoverData.sevenDaysAccumulatedDepositAmount | amountDisplay }}</td>
                </tr>
                <tr>
                    <td>提现</td>
                    <td>{{ turnoverData.dailyWithdrawalAmount | amountDisplay }}</td>
                    <td>{{ turnoverData.sevenDaysAccumulatedWithdrawalAmount | amountDisplay }}</td>
                </tr>
                <tr>
                    <td>有效流水</td>
                    <td>{{ turnoverData.dailyTurnoverAmount | amountDisplay }}</td>
                    <td>{{ turnoverData.sevenDaysAccumulatedTurnoverAmount | amountDisplay }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>


<script lang="ts">

import Vue from "vue";
import { Component } from "vue-property-decorator";
import MemberApi from "@/api/member";
import * as Model from "@/models/interfaces/member";
import { datetimeMixin } from '@/utilities/datetime-format';
import { displayFiltersMixin } from '@/utilities/display-filters';

@Component({
	mixins: [datetimeMixin, displayFiltersMixin]
})
export default class DetailTransaction extends Vue {
    turnoverData: Model.ITurnoverResponse = {} as Model.ITurnoverResponse;
    mounted() {
        MemberApi.getMemberTurnover(this.$route.params.uuid,).then(res => {
            this.turnoverData = res;
        });
    }
}

</script>