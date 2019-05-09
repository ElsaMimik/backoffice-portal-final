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
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiN2RmOTY5NzMtODIzYy00OTlhLWEwYTUtYTU3YWI5ZGFmODc4IiwiZXhwaXJlZF9hdCI6MTU1NzM4MjM5OH0._sHx_VVmT0SqYAb69fkTNzmg8cCX9fsBI93dCWYkiLpVGSS7AWWgjOA4RPBZP3p-AMLKYu64B6O1uZmzYjWc0A');
	}
}
</script>