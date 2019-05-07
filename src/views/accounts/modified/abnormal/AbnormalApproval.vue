<template>
	<div>
		<AbnormalApproval />
		<AbnormalApprovalPopup />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import AbnormalApproval from '@/components/accounts/modified/abnormal/AbnormalApproval.vue';
import AbnormalApprovalPopup from '@/components/accounts/modified/abnormal/AbnormalApprovalPopup.vue';
export default Vue.extend({
  name: 'home',
  components: {
		AbnormalApproval,
		AbnormalApprovalPopup
  },
});
</script>
