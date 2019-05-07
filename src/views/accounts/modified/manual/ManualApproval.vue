<template>
	<div>
		<ManualApproval />
		<ManualApprovalDetial />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import ManualApproval from '@/components/accounts/modified/manual/ManualApproval.vue';
import ManualApprovalDetial from '@/components/accounts/modified/manual/ManualApprovalDetailPopup.vue';
export default Vue.extend({
  name: 'home',
  components: {
		ManualApproval,
		ManualApprovalDetial
  },
});
</script>
