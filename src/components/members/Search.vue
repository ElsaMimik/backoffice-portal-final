<template>
    <div class="wrap">
      <section class="member">
        <div class="member__title">会员</div>
        <div class="search"> 
          <label>帐号ID</label>
          <input type="text">
          <button>查找</button>
        </div>
        <table>
          <tr>
            <th>帐号ID</th>
            <th>风控等级</th>
            <th>钱包金额</th>
            <th>游戏冻结金额</th>
            <th>帐号状态</th>
            <th>建立日期</th>
            <th>提现审核状态</th>
            <th>角色</th>
            <th> </th>
          </tr>
          <tr>
            <td>445908</td>
            <td>C</td>
            <td>1,000.0000</td>
            <td>1,000.0000</td>
            <td>正常</td>
            <td>2019-01-03</td>
            <td> 
              <p>自动</p>
              <button>执行</button>
            </td>
            <td> 
              <p>直客</p>
              <button>查询异动纪录</button>
            </td>
            <td> 
              <div class="btn__right"></div>
            </td>
          </tr>
          <tr>
            <td>445908</td>
            <td>C</td>
            <td>1,000.0000</td>
            <td>1,000.0000</td>
            <td>正常</td>
            <td>2019-01-03</td>
            <td> 
              <p>自动</p>
              <button>执行</button>
            </td>
            <td> 
              <p>直客</p>
              <button>查询异动纪录</button>
            </td>
            <td> 
              <div class="btn__right"></div>
            </td>
          </tr>
          <tr>
            <td>445908</td>
            <td class="notice">C</td>
            <td>1,000.0000</td>
            <td>1,000.0000</td>
            <td class="notice">不可登入(E2)</td>
            <td>2019-01-03</td>
            <td class="notice">
              <p>黑名單(W)手动</p>
              <button> 执行</button>
            </td>
            <td> 
              <p>直客</p>
              <button>查询异动纪录</button>
            </td>
            <td> 
              <div class="btn__right"></div>
            </td>
          </tr>
        </table>
      </section>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
// import { mapState } from 'vuex'
import { Component } from "vue-property-decorator";
import { State, Action, Getter, namespace } from "vuex-class";
import * as Model from "@/models/interfaces/member";

const memberModule = namespace('Member')

@Component
export default class Detail extends Vue {

@Action('Member/getMember') private getMember!: any
@memberModule.State('memberInfos') members!: Model.IMemberResponse[]

  mounted () {
    this.getMember();
    console.log(this.members)
  }
}
</script>
