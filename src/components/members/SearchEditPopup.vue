<template>
	<div class="popup">
		<div class="popup__view">
			<div class="popup__close">
				<div class="btns">
					<button class="btns__close" @click="close"></button>
				</div>
			</div>
			<div class="popup__title">会员状态修改</div>
				<div class="popup__info dottedline-top">
					<div class="popup__info-title">
						帐号ID
						<div class="popup__info-items">
							<p>{{ editData.uuid }}</p>
						</div>
					</div>
				</div>
				<div class="popup__info dottedline-top">
					<div class="popup-list">
						<div class="popup__info-title">
							操作人员
							<div class="popup__info-items">DAVID</div>
						</div>
					</div>
				</div>
				<div class="popup__action">
					<div class="popup__action-title">
						更改帐号状态
						<select v-model="editData.accountStatus">
							<option value="Normal">正常</option>
							<option value="E2">不可登入(E2)</option>
						</select>
					</div>
					<div class="popup__action-title">
						更改提现状态
						<select v-model="editData.withdrawalStatus">
							<option value="Normal">自动</option>
							<option value="E1">不可提現(E1)</option>
						</select>
					</div>
				</div>
				<div class="popup__note">
					<div class="popup__note-title">附注</div>
					<textarea v-model="reason" required></textarea>
				</div>
				<div class="popup__btn">
					<div class="btns">
						<button class="btns__submit" @click="confirm">确定</button>
					</div>
				</div>
				<div class="popup__upload">
					<div class="popup__upload-title">附件</div>
					<div v-for="(item, index) in uploadedFiles" :key="random(index)" 
					class="popup__upload-items">
						{{ item.fileName }}
						<div class="btns">
							<button class="btns__close"></button>
						</div>
					</div>
					<div class="popup-list">
						<input type="file" id="file" @change="selectFile">
					</div>
				</div>
		</div>
	</div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import * as Model from "@/models/interfaces/member";
import FileHandlerMixin from '@/utilities/file-handler';
import MemberApi from "@/api/member";
import * as Status from '@/models/status/member';
import EventBus from "@/utilities/event-bus";
import { MsgPopupType } from '@/models/status/message';

@Component

export default class SearchEditPopup extends FileHandlerMixin {
	[x: string]: any;
	@Prop(Object) readonly editMemberData!: Model.IMember;

	editData: Model.IMember = {} as Model.IMember;
	reason: string = '';


	close() {
		this.$emit("close-popup", {
			type: Status.PopupType.Edit
		});
	}

	confirm() {
		const data: Model.IMemberStatusRequest = {
			accountAction: this.editData.accountStatus,
			withdrawalAction: this.editData.withdrawalStatus,
			reason: this.reason,
			files: this.uploadedFiles.map((item) => { return item.fileId; }),
		};
		if(data.reason === '') {
			EventBus.$emit('information', {
				type: MsgPopupType.Warning,
				message: '请填写原因'
			});
			return;
		}
		if(data.files.length === 0) {
			EventBus.$emit('information', {
				type: MsgPopupType.Warning,
				message: '请上传档案'
			});
			return;
		}
		MemberApi.updateMemberStatus(data, this.editMemberData.uuid).then((res) => {
			this.$emit("close-popup", {
				type: Status.PopupType.Reload
			});
		});
	}

	selectFile(evt: any) {
		this.uploadFile(evt);
	}

	mounted() {
		this.editData = { ...this.editMemberData };
	}

	random(data: string) {
		return Math.random();
	}
}
</script>