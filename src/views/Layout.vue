<template>
	<div id="app">
		<div class="sidebar" :class="{active: isActive}">
		<div class="sidebar__btn" @click="btnshow">〉</div>
		<div class="sidebar__logo"></div>
		<ul class="sidebar__list">
			<li v-for="(item01, index) in filterMenuByAuth(menu)" :key="index" class="level01" @click.stop="menuClick(item01)">
				<div v-if="item01.isShow" v-show="isOpen(item01)">{{ item01.displayName }}</div>
				<ul v-for="(item02, index) in  filterMenuByAuth(item01.children)" :key="index">
					<li class="level02" @click.stop="menuClick(item02)">
						<div v-if="item02.isShow" v-show="isOpen(item02)">{{ item02.displayName }}</div>
						<ul v-for="(item03, index) in filterMenuByAuth(item02.children)" :key="index">
							<li class="level03" @click.stop="menuClick(item03)">
								<div v-if="item03.isShow" v-show="isOpen(item03)">{{ item03.displayName }}</div>
								<ul v-for="(item04, index) in filterMenuByAuth(item03.children)" :key="index">
									<li class="level04" @click.stop="menuClick(item04)">
										<div v-if="item04.isShow" v-show="isOpen(item04)">{{ item04.displayName }}</div>
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

	isOpen(obj: any) {
		return this.openMenu.includes(obj.apiPath) || obj.level === 1 || obj.isOpen;
	}

	menuClick(obj: any) {
		if(obj.level === 1) {
			// this.openMenu.forEach((el)=>{
			// 	this.menu.find((s: any) => s.apiPath === el)
			// })
			this.openMenu = [];
		}
		if(obj.isLink) {
			document.location.href = obj.apiPath;
			return;
		} else {
			if(!obj.isOpen) {
				console.log('OPEN', obj);
				obj.isOpen = false;
				// return;
			}
			else {
				console.log('CLOSE', obj);
				obj.isOpen = false;
			}
			// obj.isOpen = true; //........
			obj.children.forEach((element: any) => {
				if(this.openMenu.includes(element.apiPath)) {
					const index = this.openMenu.findIndex(s => s === element.apiPath);
					if(index > 0 && obj.isOpen) {
						element.isOpen = false;
						this.openMenu.splice(index, 1);
						// console.log('已存在', element);
					}
				} else {
					this.openMenu.push(element.apiPath);
				}
			});
		}
	}

	filterMenuByAuth(obj: any) {
		 return obj.filter((s: any) => s.isShow);
	 }
	
	mounted() {
	getMenu(this.apiPaths).then(res => {
			this.menu = res;
			const rounter = Auth.component.find(s => s.routerName === this.currentPath);
			if(rounter) {
				// console.log(rounter)
				spiltPath([rounter.apiPath]).then(response => {
					this.openMenu = response;
				});
			}
		});
	}
}
</script>

<style lang="scss">
</style>