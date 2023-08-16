<script setup lang="ts">
import {AntDesignOutlined} from "@ant-design/icons-vue";
</script>

<template>
  <div class="lg:flex" style="display: flex;flex-direction: row;justify-content:space-between;align-items: center">
    <div class="left" style="display: flex;align-items: center">
      <a-avatar src="/images/header.jpg" :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }">
        <template #icon>
          <AntDesignOutlined/>
        </template>
      </a-avatar>
      <div class="md:ml-6 flex flex-col justify-center md:mt-0 mt-2" style="margin-left: 20px">
        <h1 class="md:text-lg text-md" style="font-size: 20px">早安, 打工人, 开始您一天的工作吧！</h1>
        <span class="text-secondary" style="color: gray"> 今日晴，20℃ - 32℃！ </span>
      </div>
    </div>
    <div class="flex flex-1 justify-end md:mt-0 mt-4" style="width: 200px;display: flex;justify-content: space-between">
      <div class="flex flex-col justify-center text-right" style="display: flex;flex-direction: column">
        <span class="text-secondary"> 待办 </span>
        <span class="text-2xl" style="font-size: 24px;font-weight: 400">2/10</span>
      </div>
      <div class="flex flex-col justify-center text-right md:mx-16 mx-12" style="display: flex;flex-direction: column">
        <span class="text-secondary"> 项目 </span>
        <span class="text-2xl" style="font-size: 24px;font-weight: 400">8</span>
      </div>
      <div class="flex flex-col justify-center text-right md:mr-10 mr-4"
           style="display: flex;flex-direction: column">
        <span class="text-secondary"> 团队 </span>
        <span class="text-2xl" style="font-size: 24px;font-weight: 400">300</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>