<template>
	<div>
		<GameBetRecord />
		<GameBetRecordDetail />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import GameBetRecord from '@/components/accounts/gamebetrecord/GameBetRecord.vue';
import GameBetRecordDetail from '@/components/accounts/gamebetrecord/GameBetRecordDetailPopup.vue';


export default Vue.extend({
  name: 'home',
  components: {
	GameBetRecord,
	GameBetRecordDetail,

  },
});
</script>
<style lang="scss" scoped>
.account--game-bet-record {
	table.list {
		td {
			&:first-child {
				max-width: 110px;
			}
		}
	}
}
</style>