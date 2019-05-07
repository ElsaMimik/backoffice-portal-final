<template>
  <div class="popup">
    <div class="popup__view">
      <div class="popup__close">
        <div class="btns">
          <button class="btns__close" @click="close"></button>
        </div>
      </div>
      <div class="popup__title">会员状态修改</div>
      <form>
        <div class="popup__info dottedline-top">
          <div class="popup__info-title">
            帐号ID
            <div class="popup__info-items">
              <p>7533967396736733</p>
              <p>7533967396736733</p>
            </div>
          </div>
        </div>
        <div class="popup__info dottedline-top">
          <div class="popup-list">
            <div class="popup__info-title">
              操作人员
              <div class="popup__info-items">DAVID</div>
            </div>
          </div>
        </div>
        <div class="popup__action">
          <div class="popup__action-title">
            更改帐号状态
            <select v-model="selectedLoginStatus">
              <option value="Normal">正常</option>
              <option value="E2">不可登入(E2)</option>
            </select>
          </div>
          <div class="popup__action-title">
            更改提现状态
            <select v-model="selectedWithdrawalStatus">
              <option value="Normal">自动</option>
              <option value="E1">不可提現(E1)</option>
            </select>
          </div>
        </div>
        <div class="popup__note">
          <div class="popup__note-title">附注</div>
          <textarea required></textarea>
        </div>
        <div class="popup__btn">
          <div class="btns">
            <button class="btns__submit" @click="confirm">确定</button>
          </div>
        </div>
        <div class="popup__upload">
          <div class="popup__upload-title">附件</div>
          <div class="popup__upload-items">
            Type something.jpg
            <div class="btns">
              <button class="btns__close"></button>
            </div>
          </div>
          <div class="popup__upload-items">
            Type something.jpg
            <div class="btns">
              <button class="btns__close"></button>
            </div>
          </div>
          <div class="btns">
            <input type="file" class="btns__green" id="file" @change="selectFile">
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
import { fileHandlerMixin } from '@/utilities/file-handler';

@Component({
  mixins: [fileHandlerMixin]
})

export default class SearchEditPopup extends Vue {
  [x: string]: any;
  @Prop(Object) readonly editMemberData!: Model.IMember;

  editData: Model.IMember = this.editMemberData;
  selectedLoginStatus: string = '';
  selectedWithdrawalStatus: string = '';

  close() {
    this.$emit("close-popup", {
      type: PopupType.Edit
    });
  }

  confirm() {}

  mounted() {}

  selectFile(evt: any) {
    this.getFile(evt);
  }
}
</script>