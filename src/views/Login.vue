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
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiYzJlZjcwZjgtOTBlZS00MjY0LTkyZDQtZTA2NTI5MmQ3YmE5IiwiZXhwaXJlZF9hdCI6MTU1NzM5NzQ3MX0.OchnVutVVcP-pWOgEWk275buIxet1G-fIIMNF7DKm9AakC6STyuK1XQB2-I3Kgcau1LiFqqgtjodvFfzr8KVkA');
	}
}
</script>