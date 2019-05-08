<template>
	<div>
		<Approval />
		<ApprovalPopup />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Approval from "@/components/riskcontrol/Approval.vue";
import ApprovalPopup from "@/components/riskcontrol/ApprovalPopup.vue";
export default Vue.extend({
	name: "home",
	components: {
		Approval ,
		ApprovalPopup
  	},
});
</script>
