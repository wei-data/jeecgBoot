<script setup lang="ts">
import {onMounted, inject} from "vue";

let echarts = inject('echarts')
type EChartsOption = echarts.EChartsOption;

onMounted(() => {
  Echarts()
})
const Echarts = () => {
  let ChartDom = document.getElementById('ConversionRate')
  let myChart = echarts.init(ChartDom)
  const option: EChartsOption = {
    color: ['#c7b1f3', '#5ab1ef'],
    legend: {
      data: ['访问', '购买'],
      bottom: 0,
    },
    title: {
      text: '转化率'
    },
    radar: {
      indicator: [
        {name: '电脑', max: 100},
        {name: '充电器', max: 100},
        {name: '耳机', max: 100},
        {name: '手机', max: 100},
        {name: 'Ipad', max: 100},
        {name: '耳机', max: 100}
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        symbol: 'none',
        type: 'radar',
        areaStyle: {
          shadowColor: 'rgba(0, 0, 0, 1)',
          shadowBlur: 10
        },
        data: [
          {
            value: [90, 50, 86, 40, 50, 20],
            name: '访问',
          },
          {
            value: [70, 75, 70, 76, 20, 85],
            name: '购买'
          }
        ],
      }
    ],
  }
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
}
</script>

<template>
  <div id="ConversionRate" style="width: 100%;height: 405px"></div>
</template>

<style scoped>

</style>