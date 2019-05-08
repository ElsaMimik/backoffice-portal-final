<template>
	<div class="popup">
		<div class="popup__view">
			<div class="popup__close">
				<div class="btns">
					<button class="btns__close"></button>
				</div>
			</div>
			<div class="popup__title">会员风控状态</div>
			<div class="popup__info dottedline-top">
				<div class="popup__info-title">帐号ID
					<div class="popup__info-items"> 
						<p>7533967396736733</p>
						<p>7533967396736733</p>
					</div>
				</div>
			</div>
			<div class="popup__info dottedline-top">
				<div class="popup__info-title">操作人员
					<div class="popup__info-items">DAVID</div>
				</div>
			</div>
			<div class="popup__action">
				<div class="popup__action-title">更改帐号状态
					<select name="">
						<option value="">正常</option>
						<option value="">不可登入(E2)</option>
					</select>
				</div>
				<div class="popup__action-title">更改提现状态
					<select name="">
						<option value="">自动</option>
						<option value="">不可提現(E1)</option>
					</select>
				</div>
			</div>
			<div class="popup__note">
				<div class="popup__note-title">附注</div>
				<textarea required></textarea>
			</div>
			<div class="popup__btn">
				<div class="btns">
					<button class="btns__submit">确定</button>
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

</style>