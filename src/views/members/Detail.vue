<template>
  <div class="wrap">
		<div class="title">会员状态修改</div>
		<div class="member__detail">
			<Detail />
			<DetailBasic />
			<DetailTransaction />
			<DetailLogin />
			<DetailRelations />
			
			<DetailRiskControl />
			
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Detail from '@/components/members/Detail.vue'; // @ is an alias to /src
import DetailBasic from '@/components/members/DetailBasic.vue'; // @ is an alias to /src
import DetailLogin from '@/components/members/DetailLogin.vue'; // @ is an alias to /src
import DetailRelations from '@/components/members/DetailRelations.vue'; // @ is an alias to /src
import DetailRiskControl from '@/components/members/DetailRiskControl.vue'; // @ is an alias to /src
import DetailTransaction from '@/components/members/DetailTransaction.vue'; // @ is an alias to /src

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
/* ----- member detail ----- */
.member__detail {
	line-height: 200%;
	&-title {
		color: #979797;
		min-width: 200px;
		margin: 5px 0;
	}
	&-items {
		color: #000;
		margin: 6px 0;
		line-height: 120%;
	}
	&-block {
		border-bottom: 1px dotted #687826;
		display: flex;
		flex-direction: row;
		justify-content:flex-start;
		align-content: flex-start;
		flex-wrap: wrap;
		padding: 5px 0 0 0;
		margin: 10px 0;
	}
	&-btns {
		margin: 0 0 20px 0;
	}
	&__info {
		position: relative;
		.btns__green {
			position: absolute;
			right: 0;
			bottom: 10px;
		}
	}
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