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
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiOTNiMGVhNWQtMmM5MC00YWE2LWI1MWQtZmY2MmQ1M2M2NTFmIiwiZXhwaXJlZF9hdCI6MTU1NzQwNDc5Nn0.baFmF0x4RVEr1DUM0h7wUvs1uXuPbkXXS5cU2IsncigrvrHh3GRR0khQp7ujtluhFmeC3dph3bKvkOji9Ih2lw');
	}
}
</script>