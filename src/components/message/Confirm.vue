<template>
  <div class="popup">
    <div class="popup__view">
      <div class="popup__title">Warning</div>
      <div class="popup__info dottedline-top">
        <div class="popup__info-title">
          <div class="popup__info-items">
            <p>你確定要嗎</p>
          </div>
        </div>
      </div>
      <div class="popup__btn">
        <div class="btns">
          <button class="btns__submit">确定</button>
          <button class="btns__submit">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class ConfirmPopup extends Vue {}
</script>