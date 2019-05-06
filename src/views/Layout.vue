<template>
	<div id="app">
		<div class="sidebar" :class="{active: isActive}">
		<div class="sidebar__btn" @click="btnshow">〉</div>
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
import { getMenu } from "@/router/menu";
import { State, Action, Getter, namespace } from "vuex-class";
const authModule = namespace("Auth");

@Component
export default class Layout extends Vue {
	
	isActive: boolean = false;
	popup: boolean = false;
	menu: object = [];
	@authModule.State("apiPaths") apiPaths!: string[];
	
  btnshow() {
    this.isActive = !this.isActive;
  }
  open() {
    this.popup = !this.popup;
	}
	
	mounted() {
	getMenu(this.apiPaths).then(res => {
      this.menu = res;
    });	
	}
}
</script>

<style lang="scss">
</style>