<script setup lang="ts">
import {onMounted, inject} from "vue";

let echarts = inject("echarts")

type EChartsOption = echarts.EChartsOption;
onMounted(() => {
  Echarts()
})
const Echarts = () => {
  let ChartDom = document.getElementById('PageView')
  let myChart = echarts.init(ChartDom)
  const option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [3000, 2000, 3333, 5000, 3200, 4200, 3200, 2100, 3000, 5100, 6000, 3200],
        color: '#64b8ed',
        type: 'bar'
      }
    ]
  }
  myChart.setOption(option)
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
</script>

<template>
  <div id="PageView" style="width: 100%;height: 400px"></div>
</template>

<style scoped>

</style>