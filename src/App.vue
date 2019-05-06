<template>
  <div>
    <Layout v-if="isLogin"/>
    <Login v-if="!isLogin"/>
  </div>
</template>


<script lang="ts">
import Layout from "@/views/Layout.vue";
import Login from "@/views/Login.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State, Action, Getter, namespace } from "vuex-class";
import { checkPageAuth } from "@/router/auth";
import { IError } from "@/models/interfaces/error";
import EventBus from "@/utilities/event-bus";
const authModule = namespace("Auth");
const errorModule = namespace("Error");
import AuthApi from "@/api/auth";

@Component({
  components: {
    Layout,
    Login
  }
})
export default class App extends Vue {
  
  isLogin: boolean = false;
  @authModule.State("apiPaths") apiPaths!: string[];
  @errorModule.State("errorHistory") errorHistory!: IError[];

  @Action("Auth/setApiPath") private setApiPath!: any;
  @Action("Error/getError") private getError!: any;
  mounted() {
    AuthApi.getMenu().then(data => {
      // context.commit(GET_AUTH_ROLE_STRING, data);
      this.setApiPath(["/member", "/account/modified/abnormal/approval"]);
      this.isLogin = this.apiPaths.length > 0;
    });
    
    EventBus.$on("api-error", (err: any) => {
      this.getError(err);
      // console.log('api-error', err);
    });
  }
}
</script>

<style lang="scss">
</style>