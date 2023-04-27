import { createApp, toRaw } from 'vue'
// 引入element plus
import ElementPlus from 'element-plus'
// element plus css style
import 'element-plus/dist/index.css'
// import './style.css'
import App from './App.vue'
/**
 * 全局注册组件
 */
import Card from './components/Card/index.vue'
// 创建pinia 实例
import { createPinia, PiniaPluginContext } from 'pinia'
// 引入
import mitt from 'mitt'

const Mit = mitt()

type Options = {
    key?: string
}

const __piniaKey__: string = ''
const setlocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getlocalStorage = (key: string) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}
// 函数柯里化
const piniaPlugin = (options: Options) => {

    return (context: PiniaPluginContext) => {
        const { store } = context
        const data = getlocalStorage(`${options?.key ?? __piniaKey__}-${store.$id}`)
        console.log(data);

        // state中的数据发生改变时 触发subscribe 方法
        store.$subscribe(() => {
            console.log('change');
            // 设置本地存储
            // ?? 左侧为 null 或者 undefined时 执行右侧操作数  提供默认值
            // store.$state 为proxy对象 通过 toRaw 转为普通对象
            setlocalStorage(`${options?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state))
        })
        console.log('store', store);

        return {
            ...data
        }
    }

}


const pinia = createPinia()
pinia.use(piniaPlugin({
    key: 'pinia'
}))


const app = createApp(App)

/**
 * 扩展globalProperties声明 推断mitt类型
 */
declare module 'vue' {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }

}



// 全局注册 mitt
app.config.globalProperties.$Bus = Mit
/**
 * 挂载到 vue 实例
 * .component('在全局使用的组件名', 引入注册的组件名)
 */
app.component('card', Card)
// 挂载 ElementPlus
app.use(ElementPlus)
// 挂载 pinia
app.use(pinia)
app.mount('#app')
