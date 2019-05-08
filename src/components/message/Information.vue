<template>
	<section id="informationpopup">
		<div class="popup">
			<div class="popup__view">
				<div class="popup__close">
					<div class="btns">
						<button class="btns__close"></button>
					</div>
				</div>
				<div class="popup__title">Information</div>
				<form>
					<div class="popup__info dottedline-top"></div>
					<div class="popup-list">
						<div class="popup-text">詳述錯誤<</div>
					</div>
					<div class="btns">
						<button class="btns__submit">确定</button>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>


<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class InformationPopup extends Vue {}
</script>

<style lang="scss" scoped>
#informationpopup {
	text-align: center;
	.popup {
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

