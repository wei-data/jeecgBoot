<template>
  <div class="IsQuery">
    <a-form layout="inline" :model="formState">
      <a-form-item label="菜单名称">
        <a-input v-model:value.trim="formState.name" placeholder="请输入菜单名称" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" :icon="h(SearchOutlined)" @click="isQuery">查询</a-button>
      </a-form-item>
      <a-form-item>
        <a-button :icon="h(SyncOutlined)" @click="resEnd">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang='ts'>
import { reactive, h, defineEmits } from 'vue'
import { SearchOutlined, SyncOutlined } from '@ant-design/icons-vue'
import { query } from '@/api/MenuManagement';
const formState: any = reactive({
  name: '',
})
//重置输入
const resEnd = () => {
  formState.name = ''
}
const emit = defineEmits(['isQuery'])
const isQuery = async () => {
  const { result } = await query({
    name: formState.name,
  })
  console.log(result);
  emit('isQuery', result)
}
</script>

<style lang='scss' scoped ></style>
