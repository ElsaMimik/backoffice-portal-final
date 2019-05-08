<template>
    <div class="member__detail-memberdata">
        <div class="member__detail-list">
            <div class="member__detail-title">会员昵称
                <div class="member__detail-items">
                    {{ members.nickname }}
                </div>
            </div>
            <div class="member__detail-title">创建时间
                <div class="member__detail-items">
                    {{ members.createDate | timestampToDateAndTime }}
                </div>
            </div>
            <div class="member__detail-title">使用币别
                <div class="member__detail-items">
                    {{ members.currencyCode | currencyCodeDisplay }}
                </div>
            </div>
            <div class="member__detail-title">手机号
                <div class="member__detail-items">
                    {{ members.phoneNumber }}
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">

import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State, Action, Getter, namespace } from "vuex-class";
const memberModule = namespace("Member");
import * as Model from "@/models/interfaces/member";
import { datetimeMixin } from '@/utilities/datetime-format';
import { displayFiltersMixin } from '@/utilities/display-filters';

@Component({
	mixins: [datetimeMixin, displayFiltersMixin]
})
export default class DetailBasic extends Vue {
	@memberModule.State("memberDetail") members!: Model.IMemberDetailResponse[];
}

</script>