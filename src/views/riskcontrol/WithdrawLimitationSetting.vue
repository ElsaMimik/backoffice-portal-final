<template>
	<div>
		<WithdrawLimitationSetting />
		<WithdrawLimitationSettingUpdate/>
		<WithdrawLimitationSettingRecord />
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import WithdrawLimitationSetting from "@/components/riskcontrol/WithdrawLimitationSetting.vue";
	import WithdrawLimitationSettingUpdate from "@/components/riskcontrol/WithdrawLimitationSettingUpdatePopup.vue";
	import WithdrawLimitationSettingRecord from "@/components/riskcontrol/WithdrawLimitationSettingRecordPopup.vue";

	export default Vue.extend({
		name: "home",
		components: {
			WithdrawLimitationSetting ,
			WithdrawLimitationSettingUpdate,
			WithdrawLimitationSettingRecord,
		},
	});
</script>