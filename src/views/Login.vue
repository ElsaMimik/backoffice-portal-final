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
    Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiOTI2NjQ3ZjQtM2QxYy00ZjdkLWI3YTEtMTk3NmUyMjEzZWFmIiwiZXhwaXJlZF9hdCI6MTU1NzEzMTc5NX0.6c6SEqAd8r2gAD7lqW0yVdt1DT7enxYtXbafkoAN9h2qmTxrsKwcOcEqTQODKjijBds5oR6yOJoM45Uvg26S6A');
  }
}
</script>