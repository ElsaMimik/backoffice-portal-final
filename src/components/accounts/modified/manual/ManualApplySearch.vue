<template>
	<div class="search">
		<div class="search-form">
			<div class="search-items">
				<label>帐号ID</label>
				<input type="text" required>
			</div>
			<div class="search-items">
				<button class="btns__green">查找</button>
			</div>
			<div class="search-notice">
				<p class="notice">有重覆帐号ID</p>
				<p class="notice">请输入完整32码帐号ID！</p>
				<p class="notice">查无此帐号！</p>
				<p class="success">有此帐号</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State, Action, Getter, namespace } from "vuex-class";

@Component
export default class ManualApplySearch extends Vue {
}
</script>

<style lang="scss" scoped>


</style>