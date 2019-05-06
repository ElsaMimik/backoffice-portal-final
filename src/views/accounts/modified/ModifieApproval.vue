<template>
	<div>
		<VipWithdrawApproval />
		<VipWithdrawApprovalPopup />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import VipWithdrawApproval from '@/components/accounts/vipwithdraw/VipWithdrawApproval.vue';
import VipWithdrawApprovalPopup from '@/components/accounts/vipwithdraw/VipWithdrawApprovalPopup.vue';

export default Vue.extend({
  name: 'home',
  components: {
	VipWithdrawApproval,
	VipWithdrawApprovalPopup
  },
});
</script>
