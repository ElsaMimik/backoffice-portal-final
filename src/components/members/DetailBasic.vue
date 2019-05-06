<template>
    <div class="member__detail-memberdata">
        <div class="member__detail-list">
            <div class="member__detail-title">会员昵称
                <div class="member__detail-items">Peter</div>
            </div>
            <div class="member__detail-title">创建时间
                <div class="member__detail-items">2019-01-01 12:00</div>
            </div>
            <div class="member__detail-title">使用币别
                <div class="member__detail-items">人民币</div>
            </div>
            <div class="member__detail-title">手机号
                <div class="member__detail-items">＊＊＊＊3453</div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">

import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class DetailBasic extends Vue {
}

</script>