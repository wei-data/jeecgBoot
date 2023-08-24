<script setup lang="ts">
import FlowTrend from "./Echarts/FlowTrend.vue";
import PageView from "./Echarts/PageView.vue";
import ConversionRate from "./Echarts/ConversionRate.vue";
import AccessSource from "./Echarts/AccessSource.vue";
import TransactionProportion from "./Echarts/TransactionProportion.vue";
import InterviewList from "./components/InterviewList.vue";
import * as echarts from 'echarts'
import {provide, ref} from "vue";

const activeKey = ref('1');
provide('echarts', echarts)
</script>

<template>
  <InterviewList/>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="流量趋势">
      <FlowTrend/>
    </a-tab-pane>
    <a-tab-pane key="2" tab="访问量">
      <PageView/>
    </a-tab-pane>
  </a-tabs>
  <div class="Echarts">
    <ConversionRate/>
    <AccessSource/>
    <TransactionProportion/>
  </div>
</template>

<style scoped>
.Echarts {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}
</style>