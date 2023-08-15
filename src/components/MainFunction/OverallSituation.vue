<script setup lang="ts">
  import {ref} from "vue";
  import {SettingOutlined} from "@ant-design/icons-vue";
  // 设置按钮的抽屉
  const open = ref<boolean>(false);
  const SettingA = ()=>{
    open.value = true;
  }
</script>

<template>
  <setting-outlined @click="SettingA" style="width: 40px;display: block" />
  <a-drawer
      v-model:open="open"
      class="custom-class"
      root-class-name="root-class-name"
      :root-style="{ color: 'blue' }"
      style="color: red;"
      title="Basic Drawer"
      placement="right"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>

<style scoped lang="scss">

</style>
