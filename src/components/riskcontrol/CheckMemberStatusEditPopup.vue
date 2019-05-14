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
				<div class="popup__info-title">
					帐号ID
					<div class="popup__info-items"> 
						<p>7533967396736733</p>
						<p>7533967396736733</p>
					</div>
				</div>
			</div>
			<div class="popup__info dottedline-top">
				<div class="popup__info-title">
					操作人员
					<div class="popup__info-items">DAVID</div>
				</div>
			</div>
			<div class="popup__action">
				<div class="popup__action-title">
					更改帐号状态
					<select name="">
						<option value="">正常</option>
						<option value="">不可登入(E2)</option>
					</select>
				</div>
				<div class="popup__action-title">更
					改提现状态
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
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State, Action, Getter, namespace } from "vuex-class";

@Component
export default class CheckMemberStatusEditPopup extends Vue {
}
</script>

<style lang="scss" scoped>

</style>