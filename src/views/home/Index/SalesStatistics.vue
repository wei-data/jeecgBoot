<script setup lang="ts">
import SvgIcon from "../../../svg/SvgIcon.vue";
import {ref} from "vue";

interface DataItem {
  title: string;
  price: number;
  interview: number
  Instructions: string
  InstructionsNum: number
  icon: string
}

let dataSour = ref<{
  title: string;
  price: number;
  interview: number;
  Instructions: string;
  InstructionsNum: number;
  icon: string;
}[]>(
    [
      {
        title: '总销售额',
        price: 126560,
        interview: `周同比`,
        Instructions: '总访问数',
        InstructionsNum: 120000,
        icon: 'time'
      }
    ]);
const data: DataItem[] = dataSour.value
</script>

<template>
  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card size="small" style="width: 300px">
          <template #title>

          </template>
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

</style>