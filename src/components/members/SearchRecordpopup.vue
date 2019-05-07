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
            <p>7533967396736733</p>
            <p>7533967396736733</p>
          </div>
        </div>
      </div>
      <form>
        <div class="popup__info dottedline-top">
          <div class="popup-list">
            <div class="popup__info-title">
              时间
              <div class="popup__info-items">2019-01-01 17:00</div>
            </div>
            <div class="popup__info-title">
              操作人员
              <div class="popup__info-items">DAVID</div>
            </div>
            <div class="popup__info-title">
              更新帐号状态
              <div class="popup__info-items notice">不可登入(E2)</div>
            </div>
            <div class="popup__info-title">
              更新提现状态
              <div class="popup__info-items notice">不可提現(E1)</div>
            </div>
          </div>
          <div class="popup-list">
            <div class="popup__info-title">
              附注
              <div class="popup__info-items">经确认会员资料后, 解除锁定</div>
            </div>
          </div>
          <div class="popup-list">
            <div class="popup__info-title">
              附件
              <div class="popup__upload-items">Type something.jpg</div>
              <div class="popup__upload-items">Type something.jpg</div>
            </div>
          </div>
        </div>
      </form>
      <form>
        <div class="popup__info dottedline-top">
          <div class="popup-list">
            <div class="popup__info-title">
              时间
              <div class="popup__info-items">2019-01-01 17:00</div>
            </div>
            <div class="popup__info-title">
              操作人员
              <div class="popup__info-items">DAVID</div>
            </div>
            <div class="popup__info-title">
              更新帐号状态
              <div class="popup__info-items notice">不可登入(E2)</div>
            </div>
            <div class="popup__info-title">
              更新提现状态
              <div class="popup__info-items notice">不可提現(E1)</div>
            </div>
          </div>
          <div class="popup-list">
            <div class="popup__info-title">
              附注
              <div class="popup__info-items">经确认会员资料后, 解除锁定</div>
            </div>
          </div>
          <div class="popup-list">
            <div class="popup__info-title">
              附件
              <div class="popup__upload-items">Type something.jpg</div>
              <div class="popup__upload-items">Type something.jpg</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { PopupType } from "@/models/status/member";
import * as Model from "@/models/interfaces/member";

@Component
export default class SearchRecordpopup extends Vue {
  @Prop(Object) readonly editMemberData!: Model.IMember
  close() {
    this.$emit("close-popup", {
      type: PopupType.Record
    });
  }
}
</script>