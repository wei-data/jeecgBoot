<script setup lang="ts">
import {onMounted, inject} from "vue";

let echarts = inject("echarts")

type EChartsOption = echarts.EChartsOption;

onMounted(() => {
  StatisticalChart()
})
const StatisticalChart = () => {
  let chartDom = document.getElementById('main');
  let myChart = echarts.init(chartDom)
  const option: EChartsOption = {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [
          '6.00',
          '7.00',
          '8.00',
          '9.00',
          '10.00',
          '11.00',
          '12.00',
          '13.00',
          '14.00',
          '15.00',
          '16.00',
          '17.00',
          '18.00',
          '19.00',
          '20.00',
          '21.00',
          '22.00'
        ]
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Line 1',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: true, // 控制小圆点的显示与隐藏
        // symbolSize: 10, // 设置小圆点的大小
        itemStyle: {
          color: 'rgb(44, 179, 174)'
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(44, 179, 174)'
            },
            {
              offset: 1,
              color: 'rgb(44, 179, 174)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [
          0, 1000, 3000, 19000, 36000, 57000, 64000, 33000, 14000, 36000, 66000,
          44444, 22222, 11111, 4000, 2000, 0
        ]
      },
      {
        name: 'Line 2',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        itemStyle: {
          color: 'rgb(143, 210, 253)'
        },
        showSymbol: true,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(143, 210, 253)'
            },
            {
              offset: 1,
              color: 'rgb(143, 210, 253)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [
          0, 1500, 3000, 19000, 36000, 57000, 64000, 33000, 14000, 36000, 66000,
          44444, 22222, 11111, 4000, 2000, 0
        ]
      }
    ]
  }
  myChart.setOption(option)
  // 自动响应式页面大小
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
</script>

<template>
  <div id="main" style="width: 100%;height: 400px"></div>

</template>

<style scoped>

</style>