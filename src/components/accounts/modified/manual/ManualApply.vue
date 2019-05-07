<template>
	<form>
		<div class="popup__info dottedline-top">
			<div class="popup-list">
				<div class="popup__info-title">操作人员
					<div class="popup__info-items">DAVID</div>
				</div>
				<div class="popup__info-title">目前金额
					<div class="popup__info-items">1,000.00</div>
				</div>
				<div class="popup__info-title">目前提款限额
					<div class="popup__info-items">1,000.00</div>
				</div>
				<div class="popup__info-title">游戏冻结金额
					<div class="popup__info-items">1,000.00</div>
				</div>
				<div class="popup__info-title">保险箱金额
					<div class="popup__info-items">1,000.00</div>
				</div>
			</div>
		</div>
		<div class="select__money">
			<div class="select__money-items">
			<label>调整金额</label>
				<input type="number" step="0.01" value="1000.00" min="1000.00" max="100000.00">
			</div>
			<div class="select__money-items">
			<label>提款限额</label>
				<input type="number" step="0.01" value="1000.00" min="1000.00" max="100000.00">
			</div>
			<div class="select__money-items">
				<label>有效流水</label>
				<input type="number" step="0.01" value="1000.00" min="1000.00" max="100000.00">
			</div>
		</div>
		<div class="popup__note">
			<div class="popup__note-title">附注</div>
			<textarea required></textarea>
		</div>
		<div class="popup__btn">
			<div class="btns">
			<button class="btns__submit">送审</button>
			</div>
		</div>
		<div class="popup__upload"> 
			<div class="popup__upload-title">附件</div>
			<div class="popup__upload-items">Type something.jpg
				<div class="btns">
					<button class="btns__close"></button>
				</div>
			</div>
			<div class="popup__upload-items">Type something.jpg
				<div class="btns">
					<button class="btns__close"></button>
				</div>
			</div>
			<div class="btns">
				<button class="btns__green">上传</button>
			</div>
		</div>
	</form>
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
			background-image: url("../../../../assets/image/plus-green.svg"),url("../../../../assets/image/minus-red.svg");
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