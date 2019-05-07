<template>
	<div class="search">
		<form class="search-form">
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
		</form>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State, Action, Getter, namespace } from "vuex-class";
import * as Model from "@/models/interfaces/member";

const memberModule = namespace("Member");

@Component
export default class Detail extends Vue {
	@memberModule.State("memberInfos") members!: Model.ITestMemberResponse[];

	@Action("Member/getMember") private getMember!: any;
	mounted() {
	this.getMember();
	// console.log(this.$route.params.uuid);
	}
}
</script>

<style lang="scss" scoped>
.account--modified--manual--apply {
	form {
		width: 800px;
		line-height: 180%;
	}
	.popup {
		&__info {
			border: 0px;
			justify-content: flex-start;
			&-title {
				min-width: 160px;
			}
		}
	}
	input[type="number"] {
		position: relative;
		text-align: right;
		padding: 0 10px;
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			background-image: url("/assets/image/plus-green.svg"),url("/assets/image/minus-red.svg");
			background-repeat: no-repeat,no-repeat;
			background-position: top center, bottom center;
			background-size: contain;
			width: 10%;
			opacity: .6; 
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			margin: 3px 0;
			&:hover,&:active {
				opacity: 1;
			}
		}
	}
	.select__money {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
		margin: 20px 0;
		&-items {
			margin: 0 20px 25px 0;
		}
		label {
			height: 17px;
			font-size: 15px;
			font-weight: 500;
			line-height: 1.13;
			color: #979797;
			margin: 0 0 10px 0;
			display: block;
		}
		input,select {
			width: 180px;
			height: 35px;
			border-radius: 3px;
			border: solid 1px #979797;
			box-sizing: border-box;
			
		}
	}
}

</style>