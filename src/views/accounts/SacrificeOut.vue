<template>
	<div>
		<SacrificeOut />
		<SacrificeOutPopup />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import SacrificeOut from '@/components/accounts/SacrificeOut.vue';
import SacrificeOutPopup from '@/components/accounts/SacrificeOutPopup.vue';

export default Vue.extend({
  name: 'home',
  components: {
		SacrificeOut,
		SacrificeOutPopup
  },
});
</script>
<style lang="scss" scoped>

</style>