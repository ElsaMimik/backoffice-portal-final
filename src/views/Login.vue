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
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiZGY2MDkzNGUtZWQzOC00MTM1LTk3OGQtZTExNzYxZTQ2NzM2IiwiZXhwaXJlZF9hdCI6MTU1NzM5MDA4M30.dMOYWSPBAvE_FB4TJjbbdgpYNIcYF-72_ZiS5mbHOFKKhmu4HgJC5i_edZMkV1BzF6wqMDuPxCVZFGBZPN-qug');
	}
}
</script>