<script setup lang="ts">
import {Card, CardGrid} from "ant-design-vue";
import SvgIcon from "../../../../svg/SvgIcon.vue";
import {groupItems} from './data.ts'

const items = groupItems
</script>

<template>
  <Card title="项目" v-bind="$attrs">
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template>

    <template v-for="item in items" :key="item">
      <CardGrid class="!md:w-1/3 !w-full">
        <span class="flex" style="display: flex;align-items: center">
          <SvgIcon :icon="item.icon" class-name="icon"/>
          <span class="text-lg ml-4" style="font-size: 20px;margin-left: 20px">{{ item.title }}</span>
        </span>
        <div class="flex mt-2 h-10 text-secondary" style="color: gray;margin: 10px 0"> {{ item.desc }}</div>
        <div class="flex justify-between text-secondary"
             style="color: gray;display: flex;justify-content: space-between;align-items: center">
          <span>{{ item.group }}</span>
          <span>{{ item.date }}</span>
        </div>
      </CardGrid>
    </template>
  </Card>
</template>

<style scoped>
.icon {
  width: 30px;
  height: 30px;
}
</style>