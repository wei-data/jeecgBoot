<script setup lang="ts">
import SvgIcon from "../../../../svg/SvgIcon.vue";
import {ref} from "vue";

interface DataItem {
  title: string;
  date: string;
  color: string;
  interview: number
  Instructions: string
  InstructionsNum: number
  icon: string
}

let dataSour = ref<{
  title: string;
  date: string;
  color: string;
  interview: number;
  Instructions: string;
  InstructionsNum: number;
  icon: string;
}[]>(
    [
      {
        title: '访问数',
        date: '月',
        color: 'green',
        interview: 2000,
        Instructions: '总访问数',
        InstructionsNum: 120000,
        icon: 'time'
      },
      {
        title: '成交额',
        date: '月',
        color: 'blue',
        interview: 20000,
        Instructions: '总成交额',
        InstructionsNum: 500000,
        icon: 'BankCard'
      },
      {
        title: '下载数',
        date: '周',
        color: 'orange',
        interview: 8000,
        Instructions: '总下载数',
        InstructionsNum: 120000,
        icon: 'Download'
      },
      {
        title: '成交数',
        date: '年',
        color: 'purple',
        interview: 5000,
        Instructions: '总成交数',
        InstructionsNum: 50000,
        icon: 'PieChart'
      },
    ]);
const data: DataItem[] = dataSour.value
</script>

<template>
  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card size="small" :title="item.title" style="width: 300px">
          <template #extra>
            <a-tag :color="item.color">{{ item.date }}</a-tag>
          </template>
          <div
              style="margin: 10px 0;font-size: 20px;font-weight: 400;display: flex;align-items: center;justify-content: space-between">
            <span>${{ item.interview }}</span>
            <SvgIcon class-name="icon" :icon="item.icon"/>
          </div>
          <div style="display: flex;flex-direction: row;justify-content: space-between"><span>{{
              item.Instructions
            }}</span><span>${{ item.InstructionsNum }}</span></div>
        </a-card>
      </a-list-item>
    </template>
  </a-list>
</template>

<style scoped>
.jeecg-svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.icon {
  width: 40px;
  height: 40px;
}
</style>