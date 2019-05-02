<template>
<div id="app">
  <div class="sidebar">
    <div class="sidebar__btn">〉</div>
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
              <li class="level03">注單異常調帳</li>
              <li class="level03">申請</li>
              <li class="level03">審核</li>
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
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="edge,chrome=1">
    <title>User</title>
    <meta name="description">
    <meta
      name="viewport"
      content="width=375"
      minimum-scale="1.0,"
      maximum-scale="1.0,"
      user-scalable="no"
    >
    <link rel="stylesheet" href="css/theme.css">
  </head>
  <body>
    <header class="header">
      <p>CS_0001</p>
      <span>登出</span>
    </header>
    <router-view/>
  </body>
</div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State, Action, Getter, namespace } from "vuex-class";
import { getMenu } from "@/router/menu";
import { checkPageAuth } from "@/router/auth";
import { IError } from '@/models/interfaces/error'
import EventBus from '@/utilities/event-bus'

const memberModule = namespace("Auth");
const errorModule = namespace("Error");

@Component
export default class App extends Vue {
  @Action("Auth/getApiPath") private getApiPath!: any;
  @memberModule.State("apiPaths") apiPaths!: string[];
  @Action("Error/getError") private getError!: any;
  @errorModule.State("errorHistory") errorHistory!: IError[];

  mounted() {
    const apiPaths = this.apiPaths;
    const menu = getMenu(apiPaths).then(menu => { console.log("menu", menu); });
    EventBus.$on('api-error', (err: any) => {
      this.getError(err);
      console.log('api-error', err);
    });
  }
}
</script>

<style>
body {
  font: 13px/1.231 arial, helvetica, clean, sans-serif;
  *font-size: small;
  *font: x-small;
}

select,
input,
textarea,
button {
  font: 99% arial, helvetica, clean, sans-serif;
}

table {
  font-size: inherit;
  font: 100%;
}

pre,
code,
kbd,
samp,
tt {
  font-family: monospace;
  *font-size: 108%;
  line-height: 100%;
}

html {
  color: #000;
  background: #fff;
}

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
button,
textarea,
select,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

fieldset,
img {
  border: 0;
}

address,
button,
caption,
cite,
code,
dfn,
em,
input,
optgroup,
option,
select,
strong,
textarea,
th,
var {
  font: inherit;
}

del,
ins {
  text-decoration: none;
}

li {
  list-style: none;
}

caption,
th {
  text-align: left;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

q:before,
q:after {
  content: "";
}

abbr,
acronym {
  border: 0;
  font-variant: normal;
}

sup {
  vertical-align: baseline;
}

sub {
  vertical-align: baseline;
}

legend {
  color: #000;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  outline: 0;
  text-decoration: none;
}

input {
  outline: 0;
}

* {
  padding: 0;
  margin: 0;
}

html,
body {
  margin: 0 auto;
  height: 100%;
}

#app {
  margin: 0 auto;
  height: 100%;
}

.wrap {
  min-height: 100%;
  width: 1280px;
  position: relative;
  margin: 0 auto;
}

header {
  height: 80px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
}

header p {
  display: inline-block;
  margin: 0 10px;
}

.sidebar {
  width: 220px;
  min-height: 100%;
  position: absolute;
  left: -220px;
  top: 0;
  z-index: 999;
  background-color: #95a74a;
}

.sidebar__btn {
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

.sidebar__logo {
  width: 125px;
  height: 85px;
  background-image: url("../public/assets/logo.png");
  background-size: contain;
  margin: 0 auto;
  margin-top: 65px;
  margin-bottom: 20px;
}

.sidebar ul.sidebar__list {
  text-align: center;
  color: #fff;
}

.sidebar ul.sidebar__list li.level01 {
  background-color: #4a5325;
  border-radius: 1px;
  line-height: 380%;
  border-top: 1px solid #95a74a;
  min-height: 60px;
}

.sidebar ul.sidebar__list li.level01:hover {
  background: #969696;
  color: #000;
}

.sidebar ul.sidebar__list li.level01 ul {
  text-align: center;
  color: #fff;
}

.sidebar ul.sidebar__list li.level01 ul .level02 {
  background-color: #5c682e;
  border-radius: 1px;
  line-height: 380%;
  border-top: 1px solid #95a74a;
}

.sidebar ul.sidebar__list li.level01 ul .level02:hover {
  background: #c8c8c8;
  color: #000;
}

.sidebar ul.sidebar__list li.level01 ul .level02 ul {
  text-align: center;
  color: #fff;
}

.sidebar ul.sidebar__list li.level01 ul .level02 ul li.level03 {
  background-color: #7a883d;
  border-radius: 1px;
  line-height: 380%;
  height: 60px;
  border-top: 1px solid #95a74a;
}

.sidebar ul.sidebar__list li.level01 ul .level02 ul li.level03:hover {
  background: #fff;
  color: #000;
}

.active {
  left: 0;
}

.member__title {
  height: 33px;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #687826;
}

table {
  width: 100%;
  text-align: center;
  margin: 50px 0;
}

table th {
  height: 50px;
  color: #9a9a9a;
  text-align: center;
  vertical-align: middle;
}

table tr {
  border: solid 1px #95a74a;
  background-color: #fff;
}

table tr:first-child {
  border: solid 0px #fff;
}

table tr:nth-child(even) {
  background-color: #daddce;
}

table td {
  height: 100px;
  vertical-align: middle;
  min-width: 30px;
}

table button {
  height: 35px;
  border-radius: 5px;
  background-color: #555555;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  padding: 8px 10px;
  margin: 5px 0;
}

.search label {
  height: 17px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.13;
  color: #979797;
  display: block;
  margin: 0 0 10px 0;
}

.search input {
  width: 290px;
  height: 35px;
  border-radius: 3px;
  border: solid 1px #979797;
}

.search button {
  width: 80px;
  height: 35px;
  border-radius: 5px;
  background-color: #687826;
  color: #fff;
}

.btn__right {
  width: 20px;
  height: 35px;
  background: url("/assets/images/arrow-right.svg") no-repeat;
  background-size: contain;
  cursor: pointer;
}

.notice {
  color: red;
}

.notice button {
  background: red;
}
</style>
