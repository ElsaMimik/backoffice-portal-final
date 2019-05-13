<template>
	<div>
		<Layout v-if="isLogin && inMounted"/>
		<Login v-if="!isLogin && inMounted"/>
		<Information v-if="isInformation && isLogin" 
		:type="informationType" :text="informationText" @close="closeInform" />
		<!-- <Confirm /> -->
	</div>
</template>


<script lang="ts">
import Layout from "@/views/Layout.vue";
import Login from "@/views/Login.vue";
import Information from "@/components/message/Information.vue";
import Confirm from "@/components/message/Confirm.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State, Action, Getter, namespace } from "vuex-class";
import { checkPageAuth } from "@/router/auth";
import { MsgPopupType } from '@/models/status/message';
import { IError } from "@/models/interfaces/error";
import EventBus from "@/utilities/event-bus";
const authModule = namespace("Auth");
const errorModule = namespace("Error");
import AuthApi from "@/api/auth";

@Component({
	components: {
		Layout,
		Login,
		Information,
		Confirm,
	}
})
export default class App extends Vue {
	
	isLogin: boolean = false;
	isInformation: boolean = false;
	informationText: string = '';
	informationType: MsgPopupType = MsgPopupType.Information;
	inMounted: boolean = false;

	@authModule.State("apiPaths") apiPaths!: string[];
	@errorModule.State("errorHistory") errorHistory!: IError[];

	@Action("Auth/setApiPath") private setApiPath!: any;
	@Action("Error/getError") private getError!: any;
	mounted() {
		AuthApi.getMenu().then(data => {
			this.setApiPath(data.roles);
			this.isLogin = this.apiPaths.length > 0;
		}).finally(()=>this.inMounted = true);
		
		EventBus.$on("api-error", (err: any) => {
			this.getError(err);
			this.isInformation = true;
			this.informationType = MsgPopupType.Error;
			this.informationText = `${err.error.code} ${err.error.message} ${err.traceId}`;
		});

		EventBus.$on("information", (info: any) => {
			switch (info.type) {
				case MsgPopupType.Information:
					this.isInformation = true;
					this.informationType = MsgPopupType.Information;
					this.informationText = info.message;
					break;
				case MsgPopupType.Warning:
					this.isInformation = true;
					this.informationType = MsgPopupType.Warning;
					this.informationText = info.message;
					break;
				case MsgPopupType.Error:
					break;
			}
		});
	}

	closeInform() {
		this.isInformation = false;
	}
}
</script>

<style lang="scss">
</style>