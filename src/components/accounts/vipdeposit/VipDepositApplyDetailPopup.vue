<template>
	<div class="popup">
		<div class="popup__view">
			<div class="popup__close">
				<div class="btns">
					<button class="btns__close" v-on:click="open"></button>
				</div>
			</div>
			<div class="popup__title">建单</div>
			<form>
				<div class="popup__info dottedline-top">
					<div class="popup__info-title">帐号ID
						<div class="popup__info-items"> 
							<p>75339673967367337533967396736733</p>
						</div>
					</div>
				</div>
				<div class="popup__info dottedline-top">
					<div class="popup-list">
						<div class="popup__info-title">提款限额
							<div class="popup__info-items">-300.00</div>
						</div>
						<div class="popup__info-title">轉換比例
							<div class="popup__info-items">10%</div>
						</div>
						<div class="popup__info-title">操作人员
							<div class="popup__info-items">DAVID</div>
						</div>
					</div>
				</div>
				<div class="popup__input">
					<label>充值金額</label>
					<input type="text" required>
				</div>
				<div class="popup__note">
					<div class="popup__note-title">附注</div>
					<textarea required></textarea>
				</div>
				<div class="popup__btn">
					<div class="btns">
						<button class="btns__submit">送审</button>
						<button class="btns__reject">取消</button>
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
					<div class="popup-list">
						<input type="file" name="">
					</div>
				</div>
			</form>
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