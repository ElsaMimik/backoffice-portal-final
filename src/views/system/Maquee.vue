<template>
	<div>
		<Maquee />
		<MaqueeEdit />
		<MaqueeRecord />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Maquee from "@/components/system/Maquee.vue";
import MaqueeEdit from "@/components/system/MaqueeEditPopup.vue";
import MaqueeRecord from "@/components/system/MaqueeRecordPopup.vue";
export default Vue.extend({
	name: "home",
	components: {
		Maquee,
		MaqueeEdit,
		MaqueeRecord
  	},
});
</script>
