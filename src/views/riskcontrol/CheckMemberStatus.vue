<template>
  <div>
    <CheckMemberStatus />
    <CheckMemberStatusEdit />
    <CheckMemberStatusRecord />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CheckMemberStatus from "@/components/riskcontrol/CheckMemberStatus.vue";
import CheckMemberStatusEdit from "@/components/riskcontrol/CheckMemberStatusEditPopup.vue";
import CheckMemberStatusRecord from "@/components/riskcontrol/CheckMemberStatusRecordPopup.vue";
export default Vue.extend({
  name: "home",
  components: {
    CheckMemberStatus,
    CheckMemberStatusEdit,
    CheckMemberStatusRecord
  },
})
</script>
