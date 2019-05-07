<template>
	<div>
		<AbnormalApply />
		<AbnormalApplyPopup />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import AbnormalApply from '@/components/accounts/modified/abnormal/AbnormalApply.vue';
import AbnormalApplyPopup from '@/components/accounts/modified/abnormal/AbnormalApplyPopup.vue';
export default Vue.extend({
  name: 'home',
  components: {
		AbnormalApply,
		AbnormalApplyPopup
  },
});
</script>
