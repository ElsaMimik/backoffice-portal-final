<template>
  <div class="about">
    <h1>This is an login page</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Cookies from 'js-cookie';
import { Component } from "vue-property-decorator";

@Component
export default class Login extends Vue {

  mounted() {
    Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiYWI5NDQyNmEtZDMwZi00ZDhiLWE1YzMtZjczYTViYjM5ZDhhIiwiZXhwaXJlZF9hdCI6MTU1NzIxNjI3NH0.km_WSrw_OhCG9ClCCGS5s2vahgUGpuxcQbI-G8WnGrndNSitHhkM-LvG53y3RfvCDW0SabW7P7L4NlArk6tKkQ');
  }
}
</script>