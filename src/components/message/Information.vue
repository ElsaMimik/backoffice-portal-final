<template>
	<section id="informationpopup">
		<div class="popup">
			<div class="popup__view">
				<div class="popup__close">
				</div>
				<div class="popup__title notice" v-if="type==='Warning'">
					系统警告
				</div>
				<div class="popup__title notice" v-if="type==='Error'">
					错误
				</div>
				<div class="popup__title"  v-if="type==='Information'">
					系统提示
				</div>
				<div class="popup__info dottedline-top"></div>
				<div class="popup-list">
					<div class="popup-text">
						{{ text }}
					</div>
				</div>
				<div class="btns">
					<button class="btns__submit" @click="close">确定</button>
				</div>
			</div>
		</div>
	</section>
</template>


<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { MsgPopupType } from '@/models/status/message';

@Component
export default class InformationPopup extends Vue {
	@Prop(String) readonly type!: MsgPopupType;
	@Prop(String) readonly text!: string;

	close() {
		this.$emit('close');
	}
}
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

