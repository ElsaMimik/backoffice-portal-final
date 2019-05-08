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
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiMTIzY2NmM2EtNzE2ZC00MDg3LTk5ZTgtNzNjYzIwYTk4NDg1IiwiZXhwaXJlZF9hdCI6MTU1NzI5MjcxNH0.56tppPuG-RKeXzpAI4ZdfRyveUI_j7BsSeccUIJ_Bc8s0bzKG2YZ7dja75SbQNVsyY_TPFgC54UQLEyTHwC_7Q');
	}
}
</script>