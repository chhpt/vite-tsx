import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router'
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.use(Antd).use(router).use(createPinia()).mount('#app')
