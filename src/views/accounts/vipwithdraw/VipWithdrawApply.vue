<template>
	<div>
		<VipWithdrawApply />
		<VipWithdrawApplyDetail />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import VipWithdrawApply from '@/components/accounts/vipwithdraw/VipWithdrawApply.vue';
import VipWithdrawApplyDetail from '@/components/accounts/vipwithdraw/VipWithdrawApplyDetailPopup.vue';

export default Vue.extend({
  name: 'home',
  components: {
	VipWithdrawApply,
	VipWithdrawApplyDetail
  },
});
</script>
<style lang="scss" scoped>
.account--vip-withdraw--apply {
	table.list {
		text-align: left;
		td {
			max-width: inherit;
			&:first-child {
				max-width: 125px;
			}
		}
	}
}
</style>