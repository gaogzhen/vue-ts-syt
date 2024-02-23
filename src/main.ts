import { createApp } from 'vue'
import App from '@/App.vue'
// 引入默认清除样式
import '@/style/reset.scss'
// 引入全局组件：顶部和底部组件
import HospitalTop  from '@/components/hospital_top/index.vue'
import HospitalBottom  from '@/components/hospital_bottom/index.vue'
// 引入vue-router
import router from '@/router'
// 引入element-plus插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)

app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
// 安装vue-router
app.use(router)
// 安装element-plus插件
app.use(ElementPlus)

app.mount('#app')
