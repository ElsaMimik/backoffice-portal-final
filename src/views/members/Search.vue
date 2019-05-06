<template>
  <div>
    <Search />
    <SearchEdit />
    <SearchRecord />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Search from '@/components/members/Search.vue'; // @ is an alias to /src
import SearchEdit from '@/components/members/SearchEditPopup.vue';
import SearchRecord from '@/components/members/SearchRecordpopup.vue'; 

export default Vue.extend({
  name: 'home',
  components: {
    Search,
    SearchEdit,
    SearchRecord,
  },
});
</script>
