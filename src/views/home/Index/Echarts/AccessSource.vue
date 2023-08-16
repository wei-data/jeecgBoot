<script setup lang="ts">
import {onMounted, inject} from "vue";

let echarts = inject('echarts')
type EChartsOption = echarts.EChartsOption;

onMounted(() => {
  Echarts()
})

const Echarts = () => {
  let ChartDom = document.getElementById('AccessSource')
  let myChart = echarts.init(ChartDom)
  const option: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: 0,
      left: 'center'
    },
    title: {
      text: '访问来源'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec8ca'],
        data: [
          {value: 1048, name: '搜索引擎'},
          {value: 735, name: '直接访问'},
          {value: 580, name: '邮件营销'},
          {value: 484, name: '联盟广告'}
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
  <div id="AccessSource" style="width: 100%;height:405px"></div>
</template>

<style scoped>

</style>