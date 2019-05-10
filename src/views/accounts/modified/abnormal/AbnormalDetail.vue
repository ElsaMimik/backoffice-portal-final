<template>
	<div>
		<AbnormalDetail />
        這是給注單異常調帳查詢共用的，申請跟審核頁面的右邊箭頭會導向的頁面！！
	</div>
   
</template>

<script lang="ts">
import Vue from 'vue';
import AbnormalDetail from '@/components/accounts/modified/abnormal/AbnormalDetail.vue';
export default Vue.extend({
  name: 'home',
  components: {
		AbnormalDetail,
  },
});
</script>
