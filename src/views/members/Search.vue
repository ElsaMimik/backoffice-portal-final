<template>
  <div>
    <Search @show-update-status="showPopup" :reload="reload" />
    <SearchEdit v-if="editPopup" @close-popup="closePopup" :edit-member-data="editMemberData"/>
    <SearchRecord v-if="recordPopup" @close-popup="closePopup" :edit-member-data="editMemberData"/>
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
      recordPopup: false,
      editMemberData: {},
      reload: 0,
    };
  },
  mounted() {},
  methods: {
    showPopup(payload: any) {
      this.editMemberData = payload.data;
      switch(payload.type) {
        case PopupType.Edit:
          this.editPopup = payload.open;
          break;
        case PopupType.Record:
          this.recordPopup = payload.open;
          break;
      }
    },
    closePopup(payload: any) {
      this.editMemberData = payload.data;
      switch(payload.type) {
        case PopupType.Edit:
          this.editPopup = false;
          break;
        case PopupType.Record:
          this.recordPopup = false;
          break;
        case PopupType.Reload:
          this.editPopup = false;
          this.recordPopup = false;
          this.reload ++;
          break;
      }
    }
  }
});
</script>
