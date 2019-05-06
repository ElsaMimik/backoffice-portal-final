<template>
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
</template>


<script lang="ts">

import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class DetailTransaction extends Vue {
}

</script>