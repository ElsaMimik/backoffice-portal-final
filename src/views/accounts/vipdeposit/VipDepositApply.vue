<template>
	<div>
		<VipDepositApply />
		<VipDepositApplyDetail />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import VipDepositApply from '@/components/accounts/vipdeposit/VipDepositApply.vue';
import VipDepositApplyDetail from '@/components/accounts/vipdeposit/VipDepositApplyDetailPopup.vue';

export default Vue.extend({
  name: 'home',
  components: {
	VipDepositApply,
	VipDepositApplyDetail
  },
});
</script>
<style lang="scss" scoped>

</style>