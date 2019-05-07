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

<style lang="scss" scoped>
	.account--vip-withdraw--bill {
		table.list {
			text-align: left;
			td {
				max-width: inherit;
				&:first-child {
					max-width: 120px;
				}
			}
		}
	}
</style>