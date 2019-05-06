<template>
  <div>
    <Layout />
    <!-- <Login /> -->
  </div>
</template>


<script lang="ts">
import Layout from "@/views/Layout.vue";
import Login from "@/views/Login.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State, Action, Getter, namespace } from "vuex-class";
import { getMenu } from "@/router/menu";
import { checkPageAuth } from "@/router/auth";
import { IError } from "@/models/interfaces/error";
import EventBus from "@/utilities/event-bus";
const memberModule = namespace("Auth");
const errorModule = namespace("Error");
import AuthApi from "@/api/auth";

@Component({
  components: {
    Layout,
    Login
  }
})
export default class App extends Vue {
  menu: object = [];
  isLogin: boolean = false;
  @memberModule.State("apiPaths") apiPaths!: string[];
  @errorModule.State("errorHistory") errorHistory!: IError[];

  @Action("Auth/setApiPath") private setApiPath!: any;
  @Action("Error/getError") private getError!: any;
  mounted() {
    // this.getApiPath();
    AuthApi.getMenu().then(data => {
      // context.commit(GET_AUTH_ROLE_STRING, data);
      this.setApiPath(["/member", "/account/modified/abnormal/approval"]);
    });
    const apiPaths = this.apiPaths;
    this.isLogin = this.apiPaths.length > 0;
    // console.log(this.isLogin);
    const menu = getMenu(apiPaths).then(res => {
      this.menu = res;
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