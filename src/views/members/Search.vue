<template>
  <Search />
</template>

<script lang="ts">
import Vue from 'vue';
import Search from '@/components/members/Search.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    Search,
  },
});
</script>
