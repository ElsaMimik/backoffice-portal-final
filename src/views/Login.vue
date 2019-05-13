<template>
	<div class="login">
		<h1>This is an login page</h1>
		<button class="btns__green" @click="login">login</button>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Cookies from 'js-cookie';
import { Component } from "vue-property-decorator";

@Component
export default class Login extends Vue {

	login() {
		Cookies.remove('token');
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiOTg4YTljNjAtZmU4NC00MWNlLWIwNTUtOGRiMzQ1Y2UwZDI5IiwiZXhwaXJlZF9hdCI6MTU1NzczMjIyNn0.QDUnNdKdcll9hS7hIK59OtNjCQmAUasAazc-jifToo4Ypr6Td46UrPjoOjYJvJUiazJ0zxv42-HPWDA95iyhcw');
		window.location.href = '/';
	}
}
</script>

<style lang="scss">
</style>