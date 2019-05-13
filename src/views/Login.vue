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
		Cookies.remove('token');
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiOTg2MjFkMTItOTg1Zi00OGY4LThkZDctYjk3NzMyY2JmNTM1IiwiZXhwaXJlZF9hdCI6MTU1NzcyMDEzM30.NuEUwNxlnpEOT1yYL_xcvaEAwSQCRwWT9eq--oSm9zzGa_EhoPZ6ZkuinYor9Y3G_9uoaprCGuYX6gO_BKs4kg');
		// window.location.href = '/';
	}
}
</script>