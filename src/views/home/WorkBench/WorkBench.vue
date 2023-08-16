<script setup lang="ts">
import Header from "./components/Header.vue";
import ProjectCard from "./components/ProjectCard.vue";
import DynamicInfo from "./components/DynamicInfo.vue";
import QuickNav from "./components/QuickNav.vue";
import SvgIcon from "../../../svg/SvgIcon.vue";
import ConversionRate from "../Index/Echarts/ConversionRate.vue";
import * as echarts from "echarts";
import {provide} from "vue";

provide("echarts", echarts)
</script>

<template>
  <Header/>
  <div class="main">
    <div class="Left-hand-content">
      <ProjectCard/>
      <DynamicInfo/>
    </div>
    <div class="right-hand-content">
      <QuickNav/>
      <SvgIcon style="margin: 40px 0" icon="illustration" class-name="icon"/>
      <ConversionRate/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //align-items: center;
  margin: 20px 0;

  .icon {
    width: 337px;
    height: 200px;
  }

  .Left-hand-content {
    width: 69%;
  }

  .right-hand-content {
    width: 29%;
  }
}
</style>