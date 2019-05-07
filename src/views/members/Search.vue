<template>
  <div>
    <Search @show-update-status="showPopup"/>
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
    };
  },
  mounted() {},
  methods: {
    showPopup(payload: any) {
      this.editMemberData = payload.data;
      if (payload.type === PopupType.Edit) {
        this.editPopup = payload.open;
      } else if (payload.type === PopupType.Record) {
        this.recordPopup = payload.open;
      }
    },
    closePopup(payload: any) {
      this.editMemberData = payload.data;
      if (payload.type === PopupType.Edit) {
        this.editPopup = false;
      } else if (payload.type === PopupType.Record) {
        this.recordPopup = false;
      }
    }
  }
});
</script>
