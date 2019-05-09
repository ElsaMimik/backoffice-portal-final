<template>
	<div>
		<Maquee />
		<MaqueePopup />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Maquee from "@/components/system/Maquee.vue";
import MaqueePopup from "@/components/system/MaqueePopup.vue";
export default Vue.extend({
	name: "home",
	components: {
		Maquee,
		MaqueePopup
  	},
});
</script>
