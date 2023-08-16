<script setup lang="ts">
import SvgIcon from "../../../../svg/SvgIcon.vue";
import {dynamicInfoItems} from './data.ts'
import {Card, List} from "ant-design-vue";

const ListItem = List.Item
const ListItemMeta = List.Item.Meta
</script>

<template>
  <Card title="最新动态" v-bind="$attrs" style="margin-top: 20px">
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template>
    <List item-layout="horizontal" :data-source="dynamicInfoItems">
      <template #renderItem="{ item }">
        <ListItem>
          <ListItemMeta>
            <template #description>
              <span>{{ item.date }}</span>
            </template>
            <!-- eslint-disable-next-line -->
            <template #title><span>{{ item.name }}</span> <span class="span" v-html="item.desc"> </span>
            </template>
            <template #avatar>
              <SvgIcon :icon="item.avatar" class-name="icon"/>
            </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
  </Card>
</template>

<style lang="scss" scoped>
::v-deep(.span a) {
  color: #69b1ff;
}

.icon {
  width: 30px;
  height: 30px;
}
</style>