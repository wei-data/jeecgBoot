import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import router from './utils/router'
import echarts from "./utils/echarts.ts";
import 'virtual:svg-icons-register'
import { createPinia } from 'pinia'
import i18n from '@/i18n/index'

const app = createApp(App);
app.config.globalProperties.$echarts = echarts

app.use(Antd).use(i18n).use(createPinia()).use(router).mount('#app');
