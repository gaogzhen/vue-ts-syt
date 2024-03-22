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
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
// 引入pinia
import pinia from '@/store'




const app = createApp(App)

app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
// 启用vue-router
app.use(router)
// 启用element-plus插件
app.use(ElementPlus, {
  locale: zhCn,
})
// 启用pinia
app.use(pinia)

app.mount('#app')
