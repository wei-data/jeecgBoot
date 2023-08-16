<script setup lang="ts">

import {DownOutlined} from "@ant-design/icons-vue";
</script>

<template>
  <a-dropdown>
    <a class="ant-dropdown-link" @click.prevent style="height: 40px;width: 30px;display:inline-block;line-height:40px;text-align: center;border-left: 1px solid #cccccc;">
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          重新加载
        </a-menu-item>
        <a-menu-item>
          关闭当前
        </a-menu-item>
        <a-menu-item>
          关闭左侧
        </a-menu-item>
        <a-menu-item>
          关闭右侧
        </a-menu-item>
        <a-menu-item>
          关闭其他
        </a-menu-item>
        <a-menu-item>
          关闭全部
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<style scoped lang="scss">

</style>
