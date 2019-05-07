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
            <select name>
              <option value>正常</option>
              <option value>不可登入(E2)</option>
            </select>
          </div>
          <div class="popup__action-title">
            更改提现状态
            <select name>
              <option value>自动</option>
              <option value>不可提現(E1)</option>
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
            <input type="file" class="btns__green" id="file" @change="getFile">
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
import * as FileModel from "@/models/interfaces/file";
import * as Model from "@/models/interfaces/member";

@Component
export default class SearchEditPopup extends Vue {
  @Prop(Object) readonly editMemberData!: Model.IMember

  editData: Model.IMember = this.editMemberData;
  uploadedFiles: FileModel.IFile[] = [];

  close() {
    this.$emit("close-popup", {
      type: PopupType.Edit
    });
  }

  confirm() {}

  mounted() {}

  getFile(evt: any) {
    const f = evt.target.files[0];
    const reader = new FileReader();
    reader.onload = ((theFile) => {
      return (e: any) => {
        const binaryData = e.target.result;
        const base64String = window.btoa(binaryData);
        this.uploadedFiles.push({
          fileId: "",
          fileName: f.name,
          file: base64String
        });
      };
    })(f);
    reader.readAsBinaryString(f);
  }
}
</script>