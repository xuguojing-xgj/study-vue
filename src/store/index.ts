// 引入 pinia 
import { defineStore } from 'pinia'
// 
import { Names } from './store-name'
// 定义
export const useGlobalStore = defineStore(Names.useGlobalStore, {
    // state 全局函数
    state: () => ({
        count: 1,
        name: '小明'
    }),

    // 类似于 computed 也具有缓存
    getters: {

    },
    // Action 相当于组件中的 method。 可以执行同步异步操作 
    actions: {

    }
})