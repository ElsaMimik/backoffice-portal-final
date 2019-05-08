<template>
  <div class="popup">
    <div class="popup__view">
      <div class="popup__title">Information</div>
      <div class="popup__info dottedline-top">
        <div class="popup__info-title">
          <div class="popup__info-items">
            <p>詳述錯誤</p>
          </div>
        </div>
      </div>
      <div class="popup__btn">
        <div class="btns">
          <button class="btns__submit">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class InformationPopup extends Vue {}
</script>