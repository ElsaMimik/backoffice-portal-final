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
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiYjEzZDA2MDQtMmY5Ny00YzdiLTg5YjgtMzBlMDM4MTM2YjFkIiwiZXhwaXJlZF9hdCI6MTU1NzQ2Mzc5MX0.wtUEbEcv-PW-UQxnvTzX9G-0SizjdH9b2k7UVM3iJI0Py1xXEtrAFtnnHK3tUl8sfgOspOfGuJuXXqtTw3Oyng');
	}
}
</script>