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
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiYTZlZjkzYzctMjUyMi00ZWVmLWE5ZTMtNjM3MWUyY2RlZDllIiwiZXhwaXJlZF9hdCI6MTU1NzQ3NzAwMH0.i3wGbKT8i3AUtx3AfDPYB96pFNZucodQfHSeGdU_ZKkXYHuSH8NMLZmXOeScWt0CQtTtBsGaS6EYDAIZCUgC2w');
	}
}
</script>