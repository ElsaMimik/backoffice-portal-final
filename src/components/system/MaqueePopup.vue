<template>
	<div class="popup">
		<div class="popup__view">
			<div class="popup__close">
				<div class="btns">
					<button class="btns__close"></button>
				</div>
			</div>
			<div class="popup__title">跑马灯讯息</div>
			<div class="popup__info dottedline-top">
				<div class="popup-list">
					<div class="popup__info-title">跑马灯讯息编号
						<div class="popup__info-items">brocast_0001</div>
					</div>
					<div class="popup__info-title">目前状态
						<div class="popup__info-items">上架中</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">讯息说明
						<div class="popup__info-items">中大奖讯息</div>
					</div>
				</div>
			</div>
			<div class="popup__title">更新纪录</div>
			<div class="popup__info dottedline-top">
				<div class="popup-list">
					<div class="popup__info-title">时间
						<div class="popup__info-items">2018-12-30 17:00</div>
					</div>
					<div class="popup__info-title">操作人员
						<div class="popup__info-items">LEE</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">Log说明
						<div class="popup__info-items">因為OOO中大獎 故建立訊息發布因為OOO中大獎 故建立訊息發布因為OOO中大獎 故建立訊息發布因為OOO中大獎 故建立訊息發布</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">附件
						<div class="popup__upload-items">Type something.jpg</div>
						<div class="popup__upload-items">Type something.jpg</div>
					</div>
				</div>
			</div>
			<div class="popup__title">更新</div>
			<div class="popup__info dottedline-top">
				<div class="popup-list">
					<div class="popup__info-title">时间
						<div class="popup__info-items">2019-01-01 17:00</div>
					</div>
					<div class="popup__info-title">操作人员
						<div class="popup__info-items">DAVID</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">设定上下架
						<div class="popup__info-items">
							<input class="radio" name="on" type="radio" value="">
							<label>上架</label>
							<input class="radio" name="on" type="radio" value="">
							<label>下架</label>
						</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">开始时间
						<div class="popup__info-items">
							<input class="radio" name="date" type="radio" value="">
							<label>立刻</label>
						</div>
						<div class="popup__info-items">
							<input class="radio" name="date" type="radio" value="">
							<label>设定未来时间：</label>
							<input type="date" value="">
						</div>
					</div>
					<div class="popup__info-title">结束时间
						<div class="popup__info-items">
							<input type="date" value="">
						</div>
					</div>
				</div>
			</div>
			<div class="popup__note">
				<div class="popup__note-title">Log说明</div>
				<textarea required></textarea>
			</div>
			<div class="popup__note">
				<div class="popup__note-title">跑马灯讯息内容</div>
				<textarea required></textarea>
			</div>
			<div class="popup__btn">
				<div class="btns">
					<button class="btns__submit">进行更新</button>
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
export default class MaqueePopup extends Vue {
}
</script>

<style lang="scss" scoped>
.risk-control--withdraw-limitation-setting {
	table {
		width: 100%;
		margin: 0 100px 50px 0 ;
		text-align: center;
		th {
			vertical-align: middle;
			color: #687826;
			font-weight: 600;
			text-align: center;
		}
		tr {
			height: 50px;
			border-bottom: 1px dotted #687826;
		}
		td {
			vertical-align: middle;
			&:first-child {
				color: #687826;
				font-weight: 600;
				text-align: right;
				width: 200px;
			}
		}
	}
	.btns {
		text-align:right;
	}
}
</style>
