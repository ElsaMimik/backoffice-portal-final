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

</style>