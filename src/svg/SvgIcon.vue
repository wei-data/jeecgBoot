<!-- 封装svg图标组件 -->
<template>
  <div v-if="isOnlineSvg"
       :style="{ '--svg-icon-url': `url(${icon})` }"
       class="svg-icon svg-icon-online"
       :class="className"/>
  <svg v-else
       class="svg-icon"
       :class="className"
       aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"/>
  </svg>
</template>

<script setup lang="ts">
import {defineProps, computed} from 'vue'

const props = defineProps({
// SVG 图标名称或在线URL
  icon: {
    type: String,
    required: true
  },
  // 图标类名
  className: {
    type: String,
    default: ''
  }
})
const isOnlineSvg = computed(() => /^(https?:)/.test(props.icon))
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}

.svg-icon-online {
  background-color: currentColor;
  mask-image: var(--svg-icon-url);
  -webkit-mask-image: var(--svg-icon-url);
  mask-size: cover;
  -webkit-mask-size: cover;
  display: inline-block;
}
</style>
