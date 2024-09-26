import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import Api from './api/index'

var app=createApp(App)
app.config.globalProperties.$api=Api
app.use(router).mount('#app')


