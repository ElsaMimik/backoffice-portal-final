<template>
	<div class="account--modified--manual--apply">
		<div class="popup__info dottedline-top">
			<div class="popup-list">
				<div class="popup__info-title">
					操作人员
					<div class="popup__info-items">DAVID</div>
				</div>
				<div class="popup__info-title">
					目前金额
					<div class="popup__info-items">1,000.00</div>
				</div>
				<div class="popup__info-title">
					目前提款限额
					<div class="popup__info-items">1,000.00</div>
				</div>
				<div class="popup__info-title">
					游戏冻结金额
					<div class="popup__info-items">1,000.00</div>
				</div>
				<div class="popup__info-title">
					保险箱金额
					<div class="popup__info-items">1,000.00</div>
				</div>
			</div>
		</div>
		<div class="select__money">
			<div class="select__money-items">
				<label>调整金额</label>
				<button class="btns__green">增加</button>
				<button class="btns__grey">扣除</button>
				<input type="number" step="0.01" value="0.00" min="0.00" max="100000.00">
			</div>
			<div class="select__money-items">
				<label>提款限额</label>
				<button class="btns__green btn-active">增加</button>
				<button class="btns__grey">扣除</button>
				<input type="number" step="0.01" value="0.00" min="0.00" max="100000.00">
			</div>
			<div class="select__money-items">
				<label>有效流水</label>
				<button class="btns__green">增加</button>
				<button class="btns__grey">扣除</button>
				<input type="number" step="0.01" value="0.00" min="0.00" max="100000.00">
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
			<div class="popup__upload-items">
				Type something.jpg
				<div class="btns">
					<button class="btns__close"></button>
				</div>
			</div>
			<div class="popup__upload-items">
				Type something.jpg
				<div class="btns">
					<button class="btns__close"></button>
				</div>
			</div>
			<div class="popup-list">
				<input type="file" name="">
			</div>
		</div>
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
		width: 950px;
		line-height: 180%;
	.popup {
		&__info {
			border: 0px;
			justify-content: flex-start;
			&-title {
				min-width: 160px;
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
			text-align: right;
		}
	}
}
.btn-active {
	background:red;
}
</style>