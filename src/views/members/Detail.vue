<template>
  <div class="wrap">
		<div class="title">会员状态修改</div>
		<div class="member__detail">
			<Detail @change-tab="changeTab"/>
			<DetailBasic v-if="currentTab==='Basic'"/>
			<DetailTransaction v-if="currentTab==='Transaction'"/>
			<DetailLogin v-if="currentTab==='Login'"/>
			<DetailRelations v-if="currentTab==='Relations'"/>
			<DetailRiskControl v-if="currentTab==='RiskControl'"/>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Detail from '@/components/members/Detail.vue';
import DetailBasic from '@/components/members/DetailBasic.vue';
import DetailLogin from '@/components/members/DetailLogin.vue';
import DetailRelations from '@/components/members/DetailRelations.vue';
import DetailRiskControl from '@/components/members/DetailRiskControl.vue';
import DetailTransaction from '@/components/members/DetailTransaction.vue';

export default Vue.extend({
  name: 'home',
  components: {
    Detail,
    DetailBasic,
    DetailLogin,
    DetailRelations,
    DetailRiskControl,
    DetailTransaction,
  },
  data: () => {
    return {
      currentTab: 'Basic'
    };
  },
  methods: {
	  changeTab(tab: string) {
		  this.currentTab = tab;
	  }
  }
});
</script>

<style lang="scss">
</style>