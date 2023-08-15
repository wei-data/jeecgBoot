import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import i18n from '@/i18n/index'
import router from './utils/router'
const app = createApp(App);


app.use(Antd).use(i18n).use(createPinia()).use(router).mount('#app');
