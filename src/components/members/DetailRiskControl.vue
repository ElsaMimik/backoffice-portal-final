<template>
	<div class="member__detail-riskcontrol">
        <div class="title">▼会员风控资料</div>
        <div class="member__detail-list">
            <div class="member__detail-title">
                风控等级
                <div class="member__detail-items">
                    {{ riskControlData.riskControlRule.riskControlLevel}}
                </div>
            </div>
            <div class="member__detail-title">
                累积充值金额
                <div class="member__detail-items">
                    {{ riskControlData.depositAmount }}
                </div>
            </div>
            <div class="member__detail-title">
                累积充值成功次数
                <div class="member__detail-items">
                    {{ riskControlData.depositCount }}
                </div>
            </div>
            <div class="member__detail-title">
                本日累积贡献度
                <div class="member__detail-items">
                    {{ riskControlData.dailyContributionAmount }}
                </div>
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
                    <td :class="{ 'notice': !riskControlData.dailyWithdrawal.isLegal }">
                        {{ !riskControlData.dailyWithdrawal.isLegal? '違反' : '' }}
                    </td>
                    <td :class="{ 'notice': !riskControlData.dailyWithdrawal.isLegal }">本日提款</td>
                    <td :class="{ 'notice': !riskControlData.dailyWithdrawal.isLegal }">
                        {{ riskControlData.dailyWithdrawal.amount }}
                    </td>
                    <td>{{ riskControlData.riskControlRule.dailyWithdrawalAmount }}</td>
                </tr>
                <tr>
                    <td :class="{ 'notice': !riskControlData.dailyTurnover.isLegal }">
                        {{ !riskControlData.dailyTurnover.isLegal? '違反' : '' }}
                    </td>
                    <td :class="{ 'notice': !riskControlData.dailyTurnover.isLegal }">本日有效流水</td>
                    <td :class="{ 'notice': !riskControlData.dailyTurnover.isLegal }">
                        {{ riskControlData.dailyTurnover.amount }}
                    </td>
                    <td>{{ riskControlData.riskControlRule.dailyTurnoverAmount }}</td>
                </tr>
                <tr>
                    <td :class="{ 'notice': !riskControlData.dailyContribution.isLegal }">
                        {{ !riskControlData.dailyContribution.isLegal? '違反' : '' }}
                    </td>
                    <td :class="{ 'notice': !riskControlData.dailyContribution.isLegal }">本日贡献度</td>
                    <td :class="{ 'notice': !riskControlData.dailyContribution.isLegal }">
                        {{ riskControlData.dailyContribution.amount }}
                    </td>
                    <td>
                        {{ riskControlData.riskControlRule.dailyContributionAmount }}
                    </td>
                </tr>
                <tr>
                    <td :class="{ 'notice': !riskControlData.sevenDaysContribution.isLegal }">
                        {{ !riskControlData.sevenDaysContribution.isLegal? '違反' : '' }}
                    </td>
                    <td :class="{ 'notice': !riskControlData.sevenDaysContribution.isLegal }">七日贡献度</td>
                    <td :class="{ 'notice': !riskControlData.sevenDaysContribution.isLegal }">
                        {{ riskControlData.sevenDaysContribution.amount }}
                    </td>
                    <td>{{ riskControlData.riskControlRule.sevenDaysContributionAmount }}</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th></th>
                    <th>申请提现的金额</th>
                    <th>对应风控条件</th>
                </tr>
                <tr>
                    <td :class="{ 'notice': !riskControlData.riskControlRuleDepositing.isLegal }">
                        {{ !riskControlData.riskControlRuleDepositing.isLegal? '違反' : '' }}
                    </td>
                    <td :class="{ 'notice': !riskControlData.riskControlRuleDepositing.isLegal }">
                        {{ riskControlData.riskControlRuleDepositing.amount }}
                    </td>
                    <td>{{ riskControlData.riskControlRule.depositingAmount }}</td>
                </tr>
            </table>
        </div>
        <div class="title">▼会员最新风控等级更新资讯</div>
        <div class="member__detail-list">
            <div class="member__detail-title">
                最新风控等级更新时间
                <div class="member__detail-items">
                    {{ riskControlData.riskControlLevelCreateDate | timestampToDateAndTime }}
                </div>
            </div>
            <div class="member__detail-title">
                会员存流比
                <div class="member__detail-items">
                    {{ riskControlData.sevenDaysTurnoverRate }}
                </div>
            </div>
            <div class="member__detail-title">
                更新人员
                <div class="member__detail-items">
                    {{ riskControlData.riskControlLevelCreateUser }}
                </div>
            </div>
        </div>
        <div class="member__detail-list">
            <div class="member__detail-title">
                原因
                <div class="member__detail-items">
                    {{ riskControlData.riskControlLevelReason }}
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">

import Vue from "vue";
import { Component } from "vue-property-decorator";
import MemberApi from "@/api/member";
import * as Model from "@/models/interfaces/member";
import { datetimeMixin } from '@/utilities/datetime-format';

@Component({
	mixins: [datetimeMixin]
})
export default class DetailRiskControl extends Vue {
    riskControlData: Model.IRiskControlResponse = {} as Model.IRiskControlResponse;
    mounted() {
        this.riskControlData.riskControlRule = {} as Model.IRiskControlRule;
        // this.riskControlData.riskControlRule.riskControlLevel = {} as Model.RiskControllLevel;
        console.log(this.riskControlData.riskControlRule)
        MemberApi.getMemberRiskControl(this.$route.params.uuid).then(res => {
            this.riskControlData = { ...res };
        });
    }
}

</script>