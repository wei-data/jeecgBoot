<template>
  <div class="MenuManagement">
    <!-- 搜索区域 -->
    <a-card>
      <IsQuery @isQuery="clickEven" />
    </a-card>
    <!-- 表格与操作 -->
    <tableView ref='tabRefs' />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import IsQuery from '../../components/MenuManagement/IsQuery.vue'
import tableView from '../../components/MenuManagement/TableManage.vue'
// 获取table数据的ref实列
const tabRefs = ref()

const clickEven = (val: any) => {
  if (tabRefs.value) {
    tabRefs.value.data = val
    console.log(tabRefs.value.data, val)
  }
}
</script>

<style lang='scss' scoped ></style>
