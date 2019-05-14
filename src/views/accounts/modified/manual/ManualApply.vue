<template>
	<div class="wrap">
		<div class="accounts--modified--manual--apply">
			<div class="title">帐务 - 调帐 - 手动调帐</div>
			<ManualApplySearch />
			<ManualApply />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import ManualApply from '@/components/accounts/modified/manual/ManualApply.vue';
import ManualApplySearch from '@/components/accounts/modified/manual/ManualApplySearch.vue';
export default Vue.extend({
  name: 'home',
  components: {
		ManualApply,
		ManualApplySearch
  },
});
</script>
<style lang="scss" scoped>

</style>