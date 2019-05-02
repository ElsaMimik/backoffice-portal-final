<template>
  <Detail />
</template>

<script lang="ts">
import Vue from 'vue';
import Detail from '@/components/members/Detail.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    Detail,
  },
});
</script>
