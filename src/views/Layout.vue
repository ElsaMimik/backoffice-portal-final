<template>
	<div id="app">
		<div class="sidebar" :class="{active: isActive}">
		<div class="sidebar__btn" @click="btnshow">〉</div>
		<div class="sidebar__logo"></div>
		<ul class="sidebar__list">
			<p></p>
			<li v-for="(item01, index) in filterMenuByAuth(menu)" :key="index" class="level01">
				<p v-if="item01.isShow" >{{ item01.displayName }}</p>
				<ul v-for="(item02, index) in  filterMenuByAuth(item01.children)" :key="index">
					<li class="level02">
						<p v-if="item02.isShow">{{ item02.displayName }}</p>
						<ul v-for="(item03, index) in filterMenuByAuth(item02.children)" :key="index">
							<li class="level03">
								<p v-if="item03.isShow" >{{ item03.displayName }}</p>
								<ul v-for="(item04, index) in filterMenuByAuth(item03.children)" :key="index">
									<li class="level04">
										<p v-if="item04.isShow">{{ item04.displayName }}</p>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</li>
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
import { getMenu, spiltPath } from "@/router/menu";
import { State, Action, Getter, namespace } from "vuex-class";
import router from '../router';
import * as Auth from '@/router/auth';
const authModule = namespace("Auth");

@Component({
	 
})
export default class Layout extends Vue {
	
	isActive: boolean = false;
	popup: boolean = false;
	menu: object = [];
	openMenu: string[] = [];
	@authModule.State("apiPaths") apiPaths!: string[];
	@authModule.State("currentPath") currentPath!: string;
	
  btnshow() {
    this.isActive = !this.isActive;
  }
  open() {
    this.popup = !this.popup;
	}

	isOpen(path: string) {
		return this.openMenu.includes(path);
	}

	filterMenuByAuth(obj: any) {
		 return obj.filter((s: any) => s.isShow)
	 }
	
	mounted() {
	getMenu(this.apiPaths).then(res => {
			this.menu = res;
			const rounter = Auth.component.find(s => s.routerName === this.currentPath);
			if(rounter) {
				spiltPath([rounter.apiPath]).then(res => {
					this.openMenu = res;
				});
			}
		});
	}
}
</script>

<style lang="scss">
</style>