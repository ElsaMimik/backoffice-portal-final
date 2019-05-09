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
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiZjM1NDIyOWItMzI5NC00NDY4LTljODItYTM3ZGRkMzA3MTJkIiwiZXhwaXJlZF9hdCI6MTU1NzM5OTMwNX0.yUFKC2mW7hPsMBw1ikKNXtNEDwEt1FIeF6zzEVpMIzhj27zv8kvC2jWylbkE10PwfRBWuaruLCgWBPl2aq806A');
	}
}
</script>