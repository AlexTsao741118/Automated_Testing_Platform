import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// element plus相關庫的導入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 導入暗黑模式主題
import 'element-plus/theme-chalk/dark/css-vars.css'
// 導入項目的全局css樣式文件
import '@/style/global.scss'

// 創建一個應用
const app = createApp(App)

// @ 註冊element plus
app.use(ElementPlus, {
    locale: zhCn,
  })
// @ 註冊element plus的圖標
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router).mount('#app')
