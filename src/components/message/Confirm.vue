<template>
	<section id="informationpopup">
		<div class="popup">
			<div class="popup__view">
				<div class="popup__close">
				</div>
				<div class="popup__title">Warning</div>
				<div class="popup__info dottedline-top"></div>
				<div class="popup-list">
					<div class="popup-text">確定要嗎</div>
				</div>
				<div class="btns">
					<button class="btns__submit">确定</button>
					<button class="btns__cancel">取消</button>
				</div>
			</div>
		</div>
	</section>
</template>


<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class ConfirmPopup extends Vue {}
</script>

<style lang="scss" scoped>
#informationpopup {
	text-align: center;
	.popup {
		z-index:9999;
		&-list {
			flex-direction: row;
			justify-content: center;
			align-items: center;
			min-height: 200px;
		}
		&-text {
			font-size: 30px;
		}
	}
}
</style>
