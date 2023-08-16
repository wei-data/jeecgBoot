<template>
  <a-tabs style="height: 36px" @change="routeSkip" size="small" v-model:activeKey="activeKey" type="editable-card"  hide-add @edit="onEdit">
    <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts" setup>
import {onMounted, ref, watch} from 'vue';
import {useRouter,useRoute} from "vue-router";
// import type { TabsProps } from 'ant-design-vue';
// import {DownOutlined} from "@ant-design/icons-vue";

const router = useRouter();
const route = useRoute()
// console.log(router)
const panes = ref<{ title: string; content?: string; key: string; closable?: boolean }[]>([
  { title: '首页', key: '/Main/index',closable: false },
]);
// const callback: TabsProps['onTabScroll'] = val => {
//   console.log(val);
// };
// 选择项
const activeKey = ref(`${route.path}`);
// 删除标签页
const remove = (targetKey: string) => {
  let lastIndex = 0;
  panes.value.forEach((pane, i) => {
    if (pane.key === targetKey) {
      lastIndex = i - 1;
    }
  });
  panes.value = panes.value.filter(pane => pane.key !== targetKey);
  if (panes.value.length && activeKey.value === targetKey) {
    if (lastIndex >= 0) {
      activeKey.value = panes.value[lastIndex].key;
    } else {
      activeKey.value = panes.value[0].key;
    }
  }
};
// 进行删除调用
const onEdit = (targetKey: string | MouseEvent) => {
    remove(targetKey as string);
    router.push({
      path: activeKey.value
    })
};

// 监听tab变化的函数
const routeSkip = (item:any)=>{
  router.push({
    path: item
  })
}

const props = defineProps({
  item: {
    type: Object,
    default: {}//如果没有传递msg参数,默认值是这个
  }
});

interface OBJ {
  title: string;
  key: string
}
const add = (items:any) => {
  panes.value.push({ title: items.item.title, key: items.key });
  panes.value = panes.value.reduce((acc, obj:OBJ) => {
    const existingObj = acc.find((item:any) => JSON.stringify(`${item.key}`) === JSON.stringify(`${obj.key}`));
    if (!existingObj) {
      acc.push(obj)
    }
    return acc;
  }, []);
};
watch(() => props.item.key,()=>{
  add(props.item)
  activeKey.value = props.item.key
  router.push({
    path: activeKey.value
  })
},{
  // immediate:true
})
onMounted(()=>{
  if(route.path!== panes.value[0].key){
    const obj = {
      item: {
        title: route.name
      },
      key: route.path
    }
      add(obj)
  }
})
</script>

