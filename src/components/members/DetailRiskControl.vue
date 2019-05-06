<template>
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
</template>


<script lang="ts">

import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class DetailRiskControl extends Vue {
}

</script>