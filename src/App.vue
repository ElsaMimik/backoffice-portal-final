<template>
	<div>
        <Layout />
        <!-- <Login /> -->
    </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Layout from '@/views/Layout.vue';
import Login from '@/views/Login.vue';

@Component({
	components:{
        Layout,
        Login,
    },
})
export default class App extends Vue {
  
}
</script>

<style lang="scss">
</style>