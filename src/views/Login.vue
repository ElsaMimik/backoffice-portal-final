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
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiOGQzMjUwZmItOGU3ZS00MDNlLWFjNzYtNTczNWNlYjA5MjFhIiwiZXhwaXJlZF9hdCI6MTU1NzQwNzI1NH0.pTM1QsLAomjTiCiLBwneWWKJQVDQMUCLyl6M49Nq4hky0iMfXp4eKRcXkr-8NHfahYc_Ot2nXB4C0mfFve3-DA');
	}
}
</script>