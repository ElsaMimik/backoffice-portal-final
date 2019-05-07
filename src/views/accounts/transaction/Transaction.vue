<template>
	<div>
		<Transaction />
		<TransactionWithdraw />
		<TransactionDeposit />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Transaction from '@/components/accounts/transaction/Transaction.vue';
import TransactionWithdraw from '@/components/accounts/transaction/TransactionWithdrawPopup.vue';
import TransactionDeposit from '@/components/accounts/transaction/TransactionDepositPopup.vue';

export default Vue.extend({
  name: 'home',
  components: {
	Transaction,
	TransactionWithdraw,
	TransactionDeposit,
  },
});
</script>
<style lang="scss" scoped>
.account-transaction {
	table.list {
		text-align: left;
		td {
			height: 100px;
			vertical-align: middle;
			word-break: break-all;
			padding: 0 10px;
			max-width: 160px;
			&:nth-child(2) {
				max-width: 135px;
			}
		}
	}
}
</style>