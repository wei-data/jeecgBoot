<script setup lang="ts">
import { ref,onMounted,onUnmounted } from 'vue';
import Tabds from '@/components/MainFunction/Tabs.vue';
import Sidebar from '@/components/MainFunction/Sidebar.vue'
import dropdown from '@/components/MainFunction/dropdown.vue'
import Setting from "@/components/MainFunction/Setting.vue";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UndoOutlined,
    ExpandOutlined,
CompressOutlined
} from '@ant-design/icons-vue';

const collapsed = ref<boolean>(true);
const width = ref(window.innerWidth);
// 监听浏览器宽度
const updateWidth = () => {
  width.value = window.innerWidth;
  sidebar.value = width.value > 992;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
  sidebar.value = width.value > 992;
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
});

// 抽屉组件的逻辑
const open = ref<boolean>(false);
const sidebar = ref(true)
const showDrawer = () => {
  open.value = true;
  collapsed.value = !collapsed.value
};

const Fval:any = ref<object>();

const onClose = () => {
  open.value = false;
  collapsed.value = !collapsed.value
};

const csFun = (val:object) => {
  Fval.value = val;
}


// 单页面展示
const AllFlag = ref(true)
const alterAllFlag = ()=>{
  AllFlag.value =!AllFlag.value
}
</script>

<template>
  <a-layout style="height: 100vh">
    <template v-if="AllFlag">
      <a-layout-sider v-if="sidebar" v-model:collapsed="collapsed" :trigger="null" collapsible>
        <Sidebar  @childFun="csFun"></Sidebar>
      </a-layout-sider>
      <a-drawer
          v-else
          placement="left"
          :closable="false"
          :open="open"
          @close="onClose"
          style="background: #001529;width: 250px"
      >
        <Sidebar  @childFun="csFun"></Sidebar>
      </a-drawer>
    </template>
    <a-layout>
      <a-layout-header :class="AllFlag === false ? 'show' : 'hied'" style="background: #fff; padding: 0 20px;height: 90px;line-height: 90px">
        <div >
          <div v-if="AllFlag" style="display:flex;justify-content:space-between;height: 50px;line-height: 50px;border-bottom: 1px solid #cccccc">
           <div>
             <menu-unfold-outlined
                 v-if="collapsed"
                 class="trigger"
                 @click="showDrawer"
             />
             <menu-fold-outlined v-else class="trigger" @click="onClose" />
           </div>
            <Setting></Setting>
          </div>
          <div style="height: 40px;line-height:40px;display: flex;justify-content: space-between;align-items: center">
            <Tabds class="tab" :item="Fval"/>
            <div style="display: flex;width: 90px">
              <undo-outlined style="height: 40px;width: 30px;display:inline-block;line-height:40px;text-align: center;border-left: 1px solid #cccccc;"/>
              <dropdown/>
              <expand-outlined v-if="AllFlag" @click="alterAllFlag" style="height: 40px;width: 30px;display:inline-block;line-height:40px;text-align: center;border-left: 1px solid #cccccc;" />
              <compress-outlined v-else @click="alterAllFlag" style="height: 40px;width: 30px;display:inline-block;line-height:40px;text-align: center;border-left: 1px solid #cccccc;" />
            </div>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content
          :style="{ margin: ' 16px', background: '#fff',overflowY: 'scroll'}"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style lang="scss">
.hied{
  height: 90px !important;
}
.show{
  height: 40px !important;
}
.ant-drawer-content-wrapper{
  width: 250px!important;
  .ant-drawer-body{
    padding: 0;
  }
}
</style>

<style lang="scss" scoped>
.tab{
  width: calc(100% - 90px);
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
::v-deep(:where(.css-dev-only-do-not-override-eq3tly).ant-drawer-left>.ant-drawer-content-wrapper){
  width: 250px;
}
::v-deep(ant-drawer-content-wrapper){
  width: auto !important;
}
::v-deep(.ant-drawer-wrapper-body){
  width: 200px !important;
}
</style>
