// 引入 pinia 
import { defineStore } from 'pinia'
// 
import { Names } from './store-name'

type User = {
    name: string,
    age: number
}
// 同步
// let result: User = {
//     name: '小明',
//     age: 24
// }

// 异步
const login = (): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: '小明',
                age: 24
            })
        }, 1)
    })
}
// 定义
export const useGlobalStore = defineStore(Names.useGlobalStore, {
    // state 全局函数
    state: () => ({
        count: 1,
        name: 'xiaoming',
        user: <User>{}
    }),

    // 类似于 computed 也具有缓存 修饰值
    getters: {
        newName(): string {
            return `$-${this.name}`
        }
    },
    // Action 相当于组件中的 method。 可以执行同步异步操作 
    actions: {
        setCount(num: number) {
            this.count = num
        },
        async getUser(name?: string) {
            // 同步
            // this.user = result
            // 异步
            const res = await login()
            this.user = res
            this.setName('小红')
        },
        setName(name: string) {
            this.name = name
        }
    }
})