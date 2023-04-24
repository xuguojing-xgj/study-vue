import { createApp } from 'vue'
// 引入element plus
import ElementPlus from 'element-plus'
// element plus css style
import 'element-plus/dist/index.css'
// import './style.css'
import App from './App.vue'
// 创建pinia 实例
import { createPinia } from 'pinia'
const pinia = createPinia()
/**
 * 全局注册组件
 */
import Card from './components/Card/index.vue'
/**
 * 挂载到 vue 实例
 * .component('在全局使用的组件名', 引入注册的组件名)
 */
const app = createApp(App)
app.component('card', Card)
// 挂载 ElementPlus
app.use(ElementPlus)
// 挂载 pinia
app.use(pinia)
app.mount('#app')
