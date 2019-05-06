<template>
  <div class="wrap">
		<div class="title">会员状态修改</div>
		<div class="member__detail">
			<Detail />
			<DetailBasic />
			<DetailLogin />
			<DetailRelations />
			<DetailRiskControl />
			<DetailTransaction />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Detail from '@/components/members/Detail.vue';
import DetailBasic from '@/components/members/DetailBasic.vue';
import DetailLogin from '@/components/members/DetailLogin.vue';
import DetailRelations from '@/components/members/DetailRelations.vue';
import DetailRiskControl from '@/components/members/DetailRiskControl.vue';
import DetailTransaction from '@/components/members/DetailTransaction.vue';

export default Vue.extend({
  name: 'home',
  components: {
    Detail,
    DetailBasic,
    DetailLogin,
    DetailRelations,
    DetailRiskControl,
    DetailTransaction,
  },
});
</script>

<style lang="scss">
.member__detail {
	line-height: 200%;
	&-list {
		vertical-align: top;
		display: flex;
		flex-direction: row;
		justify-content:flex-start;
		align-content: flex-start;
		flex-wrap: wrap;
		padding: 5px 0 0 0;
		margin: 10px 0;
		table {
			width: 56%;
			margin: 0 100px 50px 0 ;
			&:nth-child(2) {
				width: 30%;
				margin: 0 0 0 0 ;
			}
			th {
				vertical-align: middle;
				color: #687826;
				font-weight: 600;
			}
			tr {
				height: 50px;
				border-bottom: 1px dotted #687826;
			}
			td {
				vertical-align: middle;
				&:first-child {
					color: #687826;
					font-weight: 600;
				}
			}
		}
		.btns__green {
			margin: 10px 10px 10px 0;
		}
	}
	table.list {
		width: 580px;
		text-align: left;
		th {
			text-align: left;
			padding: 0 20px;
		}
		td {
			height: 50px;
			padding: 0 20px;
		}
	}
	.dottedline {
		border-bottom: 1px dotted #687826;
	}
	.title {
		font-weight: 600;
		font-size: 20px;
		text-align: left;
	}
}
</style>