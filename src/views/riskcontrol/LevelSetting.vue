<template>
	<div>
		<LevelSetting />
		<LevelSettingUpdate />
		<LevelSettingRecord />
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import LevelSetting from "@/components/riskcontrol/LevelSetting.vue";
	import LevelSettingUpdate from "@/components/riskcontrol/LevelSettingUpdatePopup.vue";
	import LevelSettingRecord from "@/components/riskcontrol/LevelSettingRecordPopup.vue";

	export default Vue.extend({
		name: "home",
		components: {
			LevelSetting ,
			LevelSettingUpdate,
			LevelSettingRecord
		},
	});
</script>
