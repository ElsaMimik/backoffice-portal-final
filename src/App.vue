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
export default class App extends Vue {
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

$view-width:1280px;

* {
    padding: 0;
    margin: 0;
}

html, body {
    margin: 0 auto;
    height: 100%;
}

#app {
    margin: 0 auto;
    height: 100%;
}

.wrap {
    min-height: 100%;
    width: $view-width;
    position: relative;
    margin: 0 auto;
}

header {
    height: 40px;
    position: relative;
    margin: 20px 0;
    .header {
        float: right;
    }
    p {
        display: inline-block;
        margin: 0 10px;
    }
    .logout {
        display: inline-block;
        width: 60px;
        height: 22px;
        background: url("./assets/image/sign-out.svg") no-repeat right top ;
        background-size: contain;
    }
    .langugae__box {
        display: inline-block;
        input {
            display: none;
            box-sizing: border-box;
            &:checked + label:after {
                content: "繁";
                transition: all .2s ease;
                left: 50%;
            }
        }
        label {
            box-sizing: border-box;
            display: block;
            width: 70px;
            height: 35px;
            position: relative;
            cursor: pointer;
            border-radius: 18px;
            border: 4px solid #95a74a;
            background:#95a74a;
            text-align:center;
            line-height: 170%;
            &:after {
                content: "簡";
                width: 50%;
                height: 100%;
                border-radius: 18px;
                transition: all .2s ease;
                position: absolute;
                left: 0;
                top:0;
                background: #f2f2f2;
            }
            span {
                display: inline-block;
                width: 50%;
                height: 100%;	
                color:#fff;
            }
        }
    }
}

.sidebar {
    width: 220px;
    min-height: 100%;
    position: absolute;
    left: -220px;
    top: 0;
    z-index: 99;
    background-color: #95a74a;
    transition-duration: 0.8s;
    &__btn {
        position: absolute;
        top: 15px;
        left: 220px;
        width: 30px;
        height: 80px;
        border-radius: 0 10px 10px 0;
        background-color: #95a74a;
        color: #fff;
        text-align: right;
        line-height: 80px;
        font-size: 25px;
        cursor: pointer;
    }
    &__logo {
        width: 125px;
        height: 85px;
        background-image: url("./assets/image/logo.png");
        background-size: contain;
        margin: 0 auto;
        margin-top: 65px;
        margin-bottom: 20px;
    }
    ul.sidebar__list {
        text-align: center;
        color: #fff;
        li.level01 {
            background-color: #4A5325;
            border-radius: 1px;
            line-height: 380%;
            border-top: 1px solid #95a74a;
            min-height: 60px;
            &:hover {
                background: rgb(150, 150, 150);;
                color: #000;
            }
            ul {
                text-align: center;
                color: #fff;
                li.level02 {
                    background-color: #5C682E;
                    border-radius: 1px;
                    line-height: 380%;
                    border-top: 1px solid #95a74a;
                    &:hover  {
                        background: rgb(200, 200, 200);
                        color: #000;
                    }
                    ul {
                        text-align: center;
                        color: #fff;
                        li.level03 {
                            background-color:#7A883D;
                            border-radius: 1px;
                            line-height: 380%;

                            border-top: 1px solid #95a74a;
                            &:hover {
                                background: rgb(220, 220, 220);
                                color: #000;
                            }
                        }
                        ul {
                            text-align: center;
                            color: #fff;
                            li.level04 {
                                background-color:rgb(159, 177, 80);
                                border-radius: 1px;
                                line-height: 380%;
                                border-top: 1px solid #a8b347;
                                &:hover {
                                    background: #fff;
                                    color: #000;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

.notice {
	color: red!important;
	button {
		background: red!important;
	}
}

.success {
    color: #03ba00;
}

.settle {
    color: #ed5e18;
}
.active {
    left: 0px;
    transition-duration: 0.8s;
}
button {
	cursor: pointer;
}
.btns {
    height: 100%;
    button {
		border: 0px solid #fff;
	}
	.active {
		background-color: #a4b656;
	}
	&__green {
		height: 35px;
		border-radius: 5px;
		background-color: #687826;
		color: #fff;
		text-align: center;
		// vertical-align: middle;
		padding: 0 10px;
		&:hover {
			background-color: #a4b656;
		}
	}
	&__submit {
		width: 165px;
		height: 50px;
		border-radius: 25px;
		background-color: #687826;
		color: #fff;
    }
	&__reject {
		width: 165px;
		height: 50px;
		border-radius: 25px;
		background-color: red;
		color: #fff;
	}
	&__close {
		background: url(./assets/image/close.svg) center center no-repeat;
		background-color: transparent;
		background-size: 100% auto;
		border: 0px;
		vertical-align: middle;
    }
    &__right {
        width: 20px;
        height: 35px;
        background: url("./assets/image/arrow-right.svg") no-repeat;
        background-size: contain;
        cursor: pointer;
    }
}

.title {
	height: 40px;
	font-size: 24px;
	font-weight: 600;
	text-align: center;
	color: #687826;

}

table.list {
	width: 100%;
	text-align: center;
	margin: 50px 0;
	box-sizing: border-box;
	th {
		height: 50px;
		color: #9a9a9a;
		text-align: center;
		vertical-align: middle;
		line-height: 150%;
	}
	tr{
		border: solid 1px #95a74a;
		background-color: #fff;
		&:first-child {
			border: solid 0px #fff;
		}
		&:nth-child(even) {
			background-color: #daddce;
		}
	}
	td {
		height: 100px;
		vertical-align: middle;
		word-break: break-all;
		padding: 0 5px;
		max-width: 130px;
		// &:first-child {
		// 	max-width: 115px;
		// }
	}
}

.search {
	&-form {
		width: 1000px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-end;
		flex-wrap: wrap;
		margin: 0 0 20px 0;
	}	
	&-items {
		margin: 0 20px 0px 0;
	}
	&-title {
		height: 40px;
		font-weight: 600;
		color: #687826;
	}
	label {
		height: 17px;
		font-size: 15px;
		font-weight: 500;
		line-height: 1.13;
		color: #979797;
		margin: 0 0 10px 0;
		display: block;
	}
	input,select {
		width: 180px;
		height: 35px;
		border-radius: 3px;
		border: solid 1px #979797;
		box-sizing: border-box;
		margin: 0 5px 0 0;
	}
	.radio {
		width: auto;
		height: 35px;
		margin: 0 5px 0 15px;
		display: inline-block;
		vertical-align: middle;
	}
	&__result {
			margin: 20px 0;
			&-list {
				margin: auto;
				width: 700px;
				text-align: center;
				margin-top: 20px;
			tr {
				border: solid 0px #fff;
				height: 25px;
			}
			th {
				color: #95a74a;
				text-align: center;
			}
			td {
				background: #fff;
				border:0px solid #fff;
				text-align: center;
			}
		}
	}
	&-notice {
		font-size: 12px;
		width: 100%;;

	}
}

.popup {
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);
	position: fixed;
	top:0;
	z-index: 999;
	overflow-y: scroll;
	&__view {
		box-sizing: border-box;
		position: absolute;
		margin: auto;
		top: 80px;
		left: 0;
		right: 0;
		width: 490px;
		min-height: 660px;
		border-radius: 15px;
		box-shadow: 0 10px 20px 0 rgba(149, 167, 74, 0.3);
		background-color: #ffffff;
		padding: 40px 40px;
	}
	&__close {
		position: absolute;
		right: 0;
		top: 0;
		cursor: pointer;
		.btns {
			&__close {
				width: 25px;
				height: 25px;
				margin: 15px;
			}
		}
	}
	&__title {
		font-size: 24px;
		font-weight: 600;
		text-align: center;
		color: #687826;
		margin: auto;
		padding: 10px 0;
	}
	&__info {
		border-top: 1px dotted #687826;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
		padding: 5px 0 0 0;
		&-title {
			color: #979797;
			min-width: 200px;
			margin: 5px 0;
		}
		&-items {
			color: #000;
			margin: 6px 0;
			// min-height: 30px;
			line-height: 120%;
		}
	}
	&__action {
		margin: 20px 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
		&-title {
			width: 200px;
			color: #979797;
		}
		select {
			width: 180px;
			height: 35px;
			border-radius: 3px;
			border: solid 1px #979797;
			margin: 10px 0;
		}	
	}
	&__note {
		margin: 20px 0;
		&-title {
			color: #979797;
			margin: 10px 0;
		}
		textarea {
			width: 100%;
			min-height: 150px;
		}
	}
	&__btn {
		.btns {
			text-align: right;
			margin: 20px 0;
		}
	}
	&__upload {
		width: 220px;
		&-title {
			color: #979797;
			margin: 5px 0;
		}
		&-items {
			box-sizing: border-box;
			height: 35px;
			min-width: 220px;
			border-radius: 3px;
			background-color: #eaeaea;
			line-height: 200%;
			padding: 0 10px;
			margin: 5px 0;
			color: #000;
			.btns {
				float: right;
				&__close {
					width: 15px;
					height: 15px;
				}
			}
		}
		.btns__green {
			margin: 10px 0;
		}
	}
	&__input {
		label {
			color: #979797;
			margin: 5px 0;
			width: 100%;
			display: inline-block;
		}
	}
}
</style>