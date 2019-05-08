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
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiY2ExZjIzODEtMzI0Yy00MTlkLWFkZDUtNzgwMmE3YmMyZDJmIiwiZXhwaXJlZF9hdCI6MTU1NzMzODM0OH0.bPJhw5fJZYOEU-U1Y58h8jMuMuaGSSJrn319aJZb1Nmt-R6KUKI8W8MPaCFr10AQDT59MCbjV1jirDoNKjWq2w');
	}
}
</script>