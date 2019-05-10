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
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiYzc2MTc2NDUtMjgyZS00ZTE1LTljOTYtZDk3ZGFiY2QzYWI2IiwiZXhwaXJlZF9hdCI6MTU1NzQxOTE3N30.JhIeF-vuKngkV8py30eZpnUlOxniNjJnBlkGzWq_YSiTo61gzY1wSEQUZ4Xl0syDo1OfjPpAJk2wxZxAePUeOg');
	}
}
</script>