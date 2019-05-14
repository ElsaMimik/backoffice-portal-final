<template>
	<div>
		<AbnormalApply />
		<AbnormalApplyEdit />
		<AbnormalApplyClosing />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import AbnormalApply from '@/components/accounts/modified/abnormal/AbnormalApply.vue';
import AbnormalApplyEdit from '@/components/accounts/modified/abnormal/AbnormalApplyEditPopup.vue';
import AbnormalApplyClosing from '@/components/accounts/modified/abnormal/AbnormalApplyClosingPopup.vue';
export default Vue.extend({
  name: 'home',
  components: {
		AbnormalApply,
		AbnormalApplyEdit,
		AbnormalApplyClosing
  	},
});
</script>
