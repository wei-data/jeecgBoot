<script setup lang="ts">
import { reactive, watch, h } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import {
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined,
  InboxOutlined,
} from '@ant-design/icons-vue';

const router = useRouter()
const route = useRoute()
const state = reactive({
  collapsed: false,
  // 默认选中
  selectedKeys: [`${route.path}`],
  openKeys: [`/Main/index1`],
  preOpenKeys: [`${route.path}`],
});
const items = reactive([
  {
    key: 'Dashboard',
    icon: () => h(MailOutlined),
    label: 'Dashboard',
    title: 'Dashboard',
    children: [
      {
        key: '/Main/index',
        icon: () => h(PieChartOutlined),
        label: '首页',
        title: '首页',
      },
      {
        key: '/Main/WorkBench',
        icon: () => h(DesktopOutlined),
        label: '工作台',
        title: '工作台',
      },
    ],
  },
  {
    key: 'pingtai',
    icon: () => h(InboxOutlined),
    label: '底代码平台',
    title: '底代码平台',
    children: [
      {
        key: '/Main/OrderExploit',
        icon: () => h(PieChartOutlined),
        label: 'Online表单开发',
        title: 'Online表单开发',
      },
      {
        key: '/Main/allocation',
        icon: () => h(DesktopOutlined),
        label: 'Online表单开发',
        title: 'Online报表配置',
      },{
        key: '/Main/codingRule',
        icon: () => h(DesktopOutlined),
        label: '系统编码规则',
        title: '系统编码规则',
      },
    ],
  }
]);
// {
//   name: 'exploit',
//     path: 'exploit/OrderExploit',
//       component: () => import('@/views/exploit/OrderExploit.vue'),
//             }, {
//   name: 'allocation',
//     path: 'exploit/allocation',
//       component: () => import('@/views/exploit/OnlineAllocation.vue'),
//             }
watch(() => route.path, () => {
  state.selectedKeys = [`${route.path}`]
})
watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  },
);

const emit = defineEmits<{
  (event: 'childFun', val: object): void
}>()
const handleMenuClick = (item: any) => {
  router.push({
    path: `${item.key}`
  })
  emit('childFun', item)
}
</script>

<template>
  <a-menu v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" mode="inline" theme="dark"
    @click="handleMenuClick" :inline-collapsed="state.collapsed" :items="items">
  </a-menu>
</template>

<style scoped lang="scss"></style>
