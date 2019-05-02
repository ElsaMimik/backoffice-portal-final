<template>
  <div class="wrap">Member Detail</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State, Action, Getter, namespace } from "vuex-class";
import * as Model from "@/models/interfaces/member";

const memberModule = namespace('Member');

@Component
export default class Detail extends Vue {

@memberModule.State('memberInfos') members!: Model.IMemberResponse[];
@Action('Member/getMember') private getMember!: any;

  mounted () {
    this.getMember();
    // console.log(this.$route.params.uuid);
  }
}
</script>
