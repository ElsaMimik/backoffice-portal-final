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
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiOWZlMTc2ZmQtOTQ2ZC00YzVhLTk3MDQtYzgxNDVlMzM3NDY0IiwiZXhwaXJlZF9hdCI6MTU1NzQwNzY3M30.IYGubk6VkWd85_2kk4C9goR02SlEac8F2F1dFrXZCYHOgdRxqhLWCOzd9mhlp1KR2p9iXTpdmFhjinjUdkMIUg');
	}
}
</script>