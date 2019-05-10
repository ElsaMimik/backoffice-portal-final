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
		Cookies.set('token','eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIyMjIyMjIiLCJ1c2VyX2lkIjoiMTI3YTNjNmMtNGUzYS00NGExLTljY2ItNjZlNDRkOTA3MjQzIiwiZXhwaXJlZF9hdCI6MTU1NzQ4ODQ3MH0.4srDNCfo9VEOnC0hujoCO1AbYz6UCY2m7ovWIz4I8-b-mlpfOrNsCENmfGIus3PnYo_EQEP2_ZVCoxy9q-fe5g');
	}
}
</script>