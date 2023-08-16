<script setup lang="ts">
import SvgIcon from "../../../../svg/SvgIcon.vue";
import {navItems} from "./data.ts";
import {Card} from "ant-design-vue";

const CardGrid = Card.Grid
</script>

<template>
  <Card title="快捷导航" v-bind="$attrs">
    <template v-for="item in navItems" :key="item">
      <CardGrid>
        <span class="flex flex-col items-center"
              style="display: flex;flex-direction:column;flex-wrap: wrap;align-items: center">
          <SvgIcon :icon="item.icon" class-name="icon"/>
          <span style="margin-top: 10px" class="text-md mt-2">{{ item.title }}</span>
        </span>
      </CardGrid>
    </template>
  </Card>
</template>

<style scoped>
.icon {
  width: 20px;
  height: 20px;
}
</style>