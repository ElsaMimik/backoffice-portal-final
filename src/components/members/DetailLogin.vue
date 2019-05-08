<template>
	<div class="member__detail-logindata">
        <div class="member__detail-list dottedline-bottom">
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
                        <option value="">成功</option>
                        <option value="">成功</option>
                    </select>
                </div>
                <div class="search-items">
                    <button class="btns__green" @click="search">查找</button>
                </div>
            </div>
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
</template>


<script lang="ts">

import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class DetailLogin extends Vue {
	startDate: string = '';
	endDate: string = '';

	search() {
		// console.log(new Date(this.startDate).getTime())
	}
}

</script>