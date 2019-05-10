<template>
        <div class="wrap">
            <div class="account--abnormal--detail">
                <div class="title">对应各个注单资讯列表</div>
                <table class="list">
                    <tr>
                        <th>完整帐号ID</th>
                        <th>平台交易编号</th>
						<th>局号</th>
                        <th>下注时间</th>
                        <th>下注金额</th>
                        <th>派彩金额</th>
                        <th>有效流水</th>
                        <th>状态</th>
                        <th>类别</th>
                        <th>名称</th>
                    </tr>
                    <tr>
                        <td>75339673967367337533967396736733</td>
                        <td>AKR543985</td>
                        <td>12345678901234</td>
                        <td>2018-12-30 17:00</td>
                        <td>1,000.00</td>
                        <td>1,000.00</td>
                        <td>+1,000.00</td>
                        <td class="success">成功</td>
                        <td>SLOT</td>
                        <td>火龙珠</td>
                    </tr>
                    <tr>
                        <td>75339673967367337533967396736733</td>
                        <td>AKR543985</td>
                        <td>12345678901234</td>
                        <td>2018-12-30 17:00</td>
                        <td>1,000.00</td>
                        <td>1,000.00</td>
                        <td>+1,000.00</td>
                        <td class="success">成功</td>
                        <td>SLOT</td>
                        <td>火龙珠</td>
                        
                    </tr>
                </table>
                <div class="block">
                    <span>&lt;&lt;</span>
                    <span>&lt;</span>
                    <a href="member.html">
                        <span>1</span>
                    </a>
                    <a href="member.html">
                        <span>2</span>
                    </a>
                    <a href="member.html">
                        <span class="active">3</span>
                    </a>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <span>&gt;</span>
                    <span>&gt;&gt;</span>
                    <span>共</span>
                    <span>50</span>
                    <span>頁</span>
                </div>
            </div>
        </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State, Action, Getter, namespace } from "vuex-class";
@Component
export default class AbnormalApproval extends Vue {
}
</script>

<style lang="scss" scoped>
.account--abnormal--detail {

	.block {
		text-align: center;
		color: #525252;
		span {
			margin: 0 5px;
		}
		a {
			color: #525252;
			&:hover {
				color: #a4b656;
			}
		}
		.active {
			color: #a4b656;
			text-decoration: underline;
		}
	}
}
</style>