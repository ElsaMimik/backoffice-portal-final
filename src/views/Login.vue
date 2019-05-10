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
		if(!Cookies.get('token')) {
			Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiYjdmMGVkMTgtMWVjOS00NDU0LWFmNjEtOGQxNjZmMzAwYWJhIiwiZXhwaXJlZF9hdCI6MTU1NzUxMTMyMH0.IDeD_sFKzqRlnZA9Ld-bjTSqHXFZgdEZ8zqpF--VP3AbPH7ArcNl63yHiUYYXtYY_Z7z9A8CrCb4d-vwZqHNKQ');
			window.location.href = '/';
		}
	}
}
</script>