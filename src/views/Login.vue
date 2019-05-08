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
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiZDM3NTRkZWYtMzIxNC00MGU1LWI1NjUtOGExZmFiMDNjZTNlIiwiZXhwaXJlZF9hdCI6MTU1NzMxNzM1Mn0.p4UxSi9hwmT5Xp47bwA6sZ5INmyJs1KjHWwZYT8d1hze-8wtmw2ReNzGCIq7dIvnQFZxvk0h6Dr9Ox5ncZqa_w');
	}
}
</script>