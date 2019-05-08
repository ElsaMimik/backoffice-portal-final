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
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiYjk1M2VlZjEtNjFhMS00MTI2LWI4NzctMTQ4NDk5YWYwNDU2IiwiZXhwaXJlZF9hdCI6MTU1NzMwODgwOX0.kVczPt96MIseVxfUw_ddi1qbiG__AMd_NM4jxrIB4_WlvNFHxlMwyz85Nd3FA3YoDDO1SA9OosmCPeerYDhXWQ');
	}
}
</script>