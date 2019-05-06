<template>
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
</template>


<script lang="ts">

import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class DetailRelations extends Vue {
}

</script>