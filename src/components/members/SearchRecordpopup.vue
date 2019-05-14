<template>
	<div class="popup">
		<div class="popup__view">
			<div class="popup__close">
				<div class="btns">
					<button class="btns__close" @click="close"></button>
				</div>
			</div>
			<div class="popup__title">查询异动纪录</div>
			<div class="popup__info dottedline-top">
				<div class="popup__info-title">
					帐号ID
					<div class="popup__info-items">
						<p> {{ uuid }}</p>
					</div>
				</div>
			</div>
			<div v-for="(item, index) in histories" :key="random(index)" class="popup__info dottedline-top">
				<div class="popup-list">
					<div class="popup__info-title">
						时间
						<div class="popup__info-items">
							{{ item.createDate | timestampToDateAndTime }}
						</div>
					</div>
					<div class="popup__info-title">
						操作人员
						<div class="popup__info-items">
							{{ item.csName }} ( {{ item.csID }} )
						</div>
					</div>
					<div class="popup__info-title">
						更新帐号状态
						<div :class="{ 'popup__info-items notice': item.accountAction !== 'Normal',
									'popup__info-items': item.accountAction === 'Normal' }">
							{{ item.accountAction | accountStatusDisplay }}
						</div>
					</div>
					<div class="popup__info-title">
						更新提现状态
						<div :class="{ 'popup__info-items notice': item.withdrawalAction !== 'Normal',
									'popup__info-items': item.withdrawalAction === 'Normal' }">
							{{ item.withdrawalAction | withdrawalStatusDisplay }}
						</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">
						附注
						<div class="popup__info-items">
							{{ item.reason }}
						</div>
					</div>
				</div>
				<div class="popup-list">
					<div class="popup__info-title">
						附件
						<div v-for="(file, fileIndex) in item.files" :key="random(fileIndex)" 
							class="popup__upload-items" @click="downloadFile(file.fileID)"> {{ file.fileName }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { PopupType } from "@/models/status/member";
import * as Model from "@/models/interfaces/member";
import MemberApi from "@/api/member";
import FileApi from "@/api/file";
import { datetimeMixin } from '@/utilities/datetime-format';
import { displayFiltersMixin } from '@/utilities/display-filters';
import { downloadMixin } from '@/utilities/file-handler';

@Component({
	mixins: [datetimeMixin, displayFiltersMixin, downloadMixin]
})
export default class SearchRecordpopup extends Vue {
	@Prop(Object) readonly editMemberData!: Model.IMember;

	uuid: string = this.editMemberData.uuid;
	histories: Model.IMemberStatusHistory[] = [];
	close() {
		this.$emit("close-popup", {
			type: PopupType.Record
		});
	}

	mounted() {
		MemberApi.getMemberStatusHistoryList(this.uuid).then((res) => {
			this.histories = res.histories;
		});
	}

	random(data: string) {
		return Math.random();
	}
}
</script>

<style lang="scss" scoped>
.popup__upload-items {
	cursor: pointer;
}
</style>