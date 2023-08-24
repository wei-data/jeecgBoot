<script setup lang="ts">
import {ref} from 'vue';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
console.log(router.options.history)
const fn = () => {
  return document.getElementById('fn')
}
</script>

<template>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
<<<<<<< HEAD
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <router-link to="/home/exploit">报表</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <router-link to="/home/allocation">nav 2</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
=======
      <div class="logo"/>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-sub-menu key="sub1">
          <template #title>
            <user-outlined/>
            <span>Dashboard</span>
          </template>
          <a-menu-item key="/Home/workBench">
            <router-link to="/Home/workBench">
              <user-outlined/>
              <span>工作台</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/Home/index">
            <router-link to="/Home/index">
              <user-outlined/>
              <span>首页</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="3">
          <video-camera-outlined/>
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="4">
          <upload-outlined/>
>>>>>>> 24034561a9110cc5f01a83a5bc92a5395f677c7e
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0 20px">
<<<<<<< HEAD
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
=======
        <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)"/>
      </a-layout-header>
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '284px' }"
          style="overflow-y: scroll"
          id="fn"
      >
        <a-back-top :target="fn"></a-back-top>
>>>>>>> 24034561a9110cc5f01a83a5bc92a5395f677c7e
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped>
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
</style>
