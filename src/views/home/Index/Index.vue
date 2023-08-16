<script setup lang="ts">
import Acquiesce from "./Acquiesce.vue";
import SalesStatistics from "./SalesStatistics.vue";
import {ref, reactive} from 'vue';

let tabList = reactive([
  {name: '默认', com: Acquiesce},
  {name: '销量统计', com: SalesStatistics},
  {name: '业务统计', com: ''},
  {name: '我的任务', com: ''}
])
// 动态组件
let currentComponent = reactive({
  com: Acquiesce
})
const value = ref<number>(1);

const changeCom = (e: any) => {
  currentComponent.com = tabList[e - 1].com
}
</script>

<template>
  <component :is="currentComponent.com"></component>
  <div class="footer">
    <span>请选择首页的样式：</span>
    <a-radio-group v-model:value="value" @change="changeCom(value)">
      <a-radio :value="index+1" v-for="(item,index) in tabList" :key="index+1">{{ item.name }}</a-radio>
    </a-radio-group>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  float: right;
  margin-top: 20px;
}
</style>