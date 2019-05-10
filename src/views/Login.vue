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
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiZDczNzUxNDMtYWNjNS00NzdjLTg4OWYtZjQ5YzkzNTViMjU2IiwiZXhwaXJlZF9hdCI6MTU1NzQ2MzMzOX0.iLv8o5JSHAOtAY3Ayy3RD3XqC4YSn1gcugL89dqvt3H-H-BEZkRdjDC4cNJ5unjM7pQxgpoAJ91KtKTpQkzJNw');
	}
}
</script>