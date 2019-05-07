<template>
  <div>
    <Search @show-update-status="showPopup"/>
    <SearchEdit v-if="editPopup" @close-popup="closePopup"/>
    <SearchRecord v-if="recordPopup" @close-popup="closePopup"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Search from "@/components/members/Search.vue";
import SearchEdit from "@/components/members/SearchEditPopup.vue";
import SearchRecord from "@/components/members/SearchRecordpopup.vue";
import { PopupType } from "@/models/status/member";

export default Vue.extend({
  name: "home",
  components: {
    Search,
    SearchEdit,
    SearchRecord
  },
  data: () => {
    return {
      editPopup: false,
      recordPopup: false
    };
  },
  mounted() {},
  methods: {
    showPopup(payload: any) {
      if (payload.type === PopupType.Edit) {
        this.editPopup = payload.open;
      } else if (payload.type === PopupType.Record) {
        this.recordPopup = payload.open;
      }
    },
    closePopup(payload: any) {
      if (payload.type === PopupType.Edit) {
        this.editPopup = false;
      } else if (payload.type === PopupType.Record) {
        this.recordPopup = false;
      }
    }
  }
});
</script>
