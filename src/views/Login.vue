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
    Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiMWI2NTJlYjEtOGM1ZC00NGZkLWFhZDQtNmE1MzVhYzU4NmExIiwiZXhwaXJlZF9hdCI6MTU1NzIzMDU0MX0.vZMyeKU_nGKEEcegBaw6ngH_fXLrLzVkpN-UOjbicZgXBxeDx3snF-VPmy08N8DicXw6GuYvktMpS3bNad1CBw');
  }
}
</script>