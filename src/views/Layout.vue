<template>
	<div id="app">
		<div class="sidebar" v-bind:class="{active: isActive}">
		<div class="sidebar__btn" v-on:click="btnshow">〉</div>
		<div class="sidebar__logo"></div>
		<ul class="sidebar__list">
			<li class="level01">会员</li>
			<li class="level01">
			帐务
			<ul>
				<li class="level02">交易</li>
				<li class="level02">抄單</li>
				<li class="level02">
				人工充值
				<ul>
					<li class="level03">充值申請</li>
					<li class="level03">充值審核</li>
				</ul>
				</li>
				<li class="level02">
				人工提現
				<ul>
					<li class="level03">新增提現</li>
					<li class="level03">提現審核</li>
					<li class="level03">出帳作業</li>
				</ul>
				</li>
				<li class="level02">
				調帳
				<ul>
					<li class="level03">
					注單異常調帳
					<ul>
						<li class="level04">申請</li>
						<li class="level04">審核</li>
					</ul>
					</li>
					<li class="level03">手動調帳</li>
					<li class="level03">強制滑入</li>
				</ul>
				</li>
			</ul>
			</li>
			<li class="level01">风控</li>
			<li class="level01">客服</li>
			<li class="level01">帐号权限</li>
			<li class="level01">系统</li>
		</ul>
		</div>
		<header>
			<div class="header"> 
				<div class="langugae__box">
					<input id="langugae" type="checkbox">
					<label for="langugae"><span>簡</span><span>繁</span></label>
				</div>
				<p>CS_0001
					<div class="logout">登出</div>
				</p>
			</div>
    </header>
		<router-view/>
	</div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State, Action, Getter, namespace } from "vuex-class";
import { getMenu } from "@/router/menu";
import { checkPageAuth } from "@/router/auth";
import { IError } from "@/models/interfaces/error";
import EventBus from "@/utilities/event-bus";
const memberModule = namespace("Auth");
const errorModule = namespace("Error");

@Component
export default class Layout extends Vue {
  menu: object = [];
  @memberModule.State("apiPaths") apiPaths!: string[];
	@errorModule.State("errorHistory") errorHistory!: IError[];
	
	isActive: boolean = false;
	popup: boolean = false;
	
  @Action("Auth/getApiPath") private getApiPath!: any;
	@Action("Error/getError") private getError!: any;
	
  btnshow() {
    this.isActive = !this.isActive;
  }
  open() {
    this.popup = !this.popup;
  }
  mounted() {
	const apiPaths = this.apiPaths;
	const menu = getMenu(apiPaths).then(res => {
	  this.menu = res;
	});
	EventBus.$on("api-error", (err: any) => {
	  this.getError(err);
	  // console.log('api-error', err);
	});
  }
}
</script>

<style lang="scss">
</style>