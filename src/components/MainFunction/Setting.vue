<script setup lang="ts">
import OverallSituation from '@/components/MainFunction/OverallSituation.vue'
import screenfull from 'screenfull';
import { Ref, ref, onMounted } from 'vue';
import { useI18n } from "vue-i18n";
const { t } = useI18n()
import {
  BellOutlined,
  FontColorsOutlined,
  FullscreenExitOutlined, FullscreenOutlined,
  SearchOutlined, UnlockOutlined, UserOutlined
} from "@ant-design/icons-vue";
// 判断的变量
const isFullScreen: Ref<boolean> = ref(false);
//检查是否支持全屏事件：
onMounted(()=>{
  if (screenfull.isEnabled) {
    screenfull.onchange(() => {
      isFullScreen.value = screenfull.isFullscreen;
    });
  }
})
// 展开
const unfold = ()=>{
  if (screenfull.isEnabled) {
    screenfull.toggle();
  }
}
// 收起
const PackUp = ()=>{
  if (screenfull.isEnabled) {
    screenfull.toggle();
  }
}

const { locale: i18nLanguage } = useI18n()
const lang = ref('zh')
const SetLang = ()=>{
  if(lang.value === 'zh'){
    i18nLanguage.value = 'en'  // zh en
    lang.value = 'en'
  }else{
    i18nLanguage.value = 'zh'
    console.log(2)
    lang.value = 'zh'
  }
}

</script>

<template>
  <div style="display: flex;align-items: center">
    <search-outlined style="width: 40px;display: block" />
    <bell-outlined style="width: 40px;display: block"/>
    <fullscreen-outlined  v-if="!isFullScreen" @click="PackUp"  style="width: 40px;display: block"/>
    <fullscreen-exit-outlined v-else @click="unfold" style="width: 40px;display: block" />
    <unlock-outlined style="width: 40px;display: block" />
    <font-colors-outlined @click="SetLang"  style="width: 40px;display: block" />
    <div style="width: 100px;display: flex;justify-content: space-between;align-items: center">
      <a-avatar :size="24">
        <template #icon><UserOutlined /></template>
      </a-avatar>
      <p style="width: 76px;height: 50px ;line-height: 64px;text-align: center">{{ t('msg.name') }}</p>
    </div>
    <OverallSituation></OverallSituation>
  </div>
</template>

<style scoped lang="scss">

</style>
