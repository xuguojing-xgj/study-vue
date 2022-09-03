import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/**
 * 全局注册组件
 */
import Card from './components/Card/index.vue'
/**
 * 挂载到 vue 实例
 * .component('使用的组件名', 注册的组件名)
 */
createApp(App).component('card', Card).mount('#app')
