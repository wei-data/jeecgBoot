<script setup lang="ts">
import {onMounted, inject} from "vue";

let echarts = inject('echarts')
type EChartsOption = echarts.EChartsOption;

onMounted(() => {
  Echarts()
})
const Echarts = () => {
  let ChartDom = document.getElementById('TransactionProportion')
  let myChart = echarts.init(ChartDom)
  const option: EChartsOption = {
    legend: {
      top: 'bottom'
    },
    title: {
      text: '成交占比'
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [0, 120],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 0
        },
        color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
        data: [
          {value: 274, name: '化妆品'},
          {value: 310, name: '服装'},
          {value: 400, name: '家居'},
          {value: 500, name: '电子产品'}
        ]
      }
    ]
  }
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
}
</script>

<template>
  <div id="TransactionProportion" style="width: 100%;height: 405px"></div>
</template>

<style scoped>

</style>