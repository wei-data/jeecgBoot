<script setup lang="ts">
import { reactive, watch, h } from 'vue';
import {useRouter,useRoute} from 'vue-router'
import {
  PieChartOutlined,
  DesktopOutlined,
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
    key: '/Main/index1',
    icon: () => h(PieChartOutlined),
    label: 'index1',
    title: 'index1',
  },
  {
    key: '/Main/index2',
    icon: () => h(DesktopOutlined),
    label: 'index 2',
    title: 'index 2',
  },
  {
    key: '/Main/index3',
    icon: () => h(InboxOutlined),
    label: 'index 3',
    title: 'index 3',
  }
]);
watch(()=>route.path,()=>{
  state.selectedKeys  = [`${route.path}`]
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
const handleMenuClick = (item: any)=>{
  router.push({
    path:  `${item.key}`
  })
  emit('childFun',item)
}
</script>

<template>
    <a-menu
        v-model:openKeys="state.openKeys"
        v-model:selectedKeys="state.selectedKeys"
        mode="inline"
        theme="dark"
        @click="handleMenuClick"
        :inline-collapsed="state.collapsed"
        :items="items"
    >
    </a-menu>
</template>

<style scoped lang="scss">

</style>
