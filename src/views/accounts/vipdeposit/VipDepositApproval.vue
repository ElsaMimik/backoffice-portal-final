<template>
	<div>
		<VipDepositApproval />
		<VipDepositApprovalPopup />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import VipDepositApproval from '@/components/accounts/vipdeposit/VipDepositApproval.vue';
import VipDepositApprovalPopup from '@/components/accounts/vipdeposit/VipDepositApprovalPopup.vue';

export default Vue.extend({
  name: 'home',
  components: {
	VipDepositApproval,
	VipDepositApprovalPopup
  },
});
</script>
<style lang="scss" scoped>

</style>