<template>
	<div>
		<VipWithdrawBill />
		<VipWithdrawBillPopup />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import VipWithdrawBill from '@/components/accounts/vipwithdraw/VipWithdrawBill.vue';
import VipWithdrawBillPopup from '@/components/accounts/vipwithdraw/VipWithdrawBillPopup.vue';

export default Vue.extend({
  name: 'home',
  components: {
	VipWithdrawBill,
	VipWithdrawBillPopup
  },
});
</script>
