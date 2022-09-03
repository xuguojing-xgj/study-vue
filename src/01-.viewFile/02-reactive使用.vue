<template>
    <div>
        <!-- submit 提交事件 prevent修饰符 阻止页面刷新 -->
        reactive
        <p>{{ message }}</p>
        <p>{{ val }}</p>
        <!-- * shallowReactive 挂载之后不会更新深层次视图 比如 Object类型  -->
        <button @click="change1">btn①</button>
        <button @click="change2">btn②</button>
    </div>
</template>

<script setup lang="ts">

import { reactive, readonly, shallowReactive, isReactive } from 'vue'

let message = reactive<Array<number>>([]) // 接收一个复杂类型的数据

setTimeout(() => {
    let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
    // 直接赋值 会破坏 reactive 响应式
    // 解决方法 ① .push(...arr)
    message.push(...arr)

    console.log(message);

}, 1000)

interface T {
    list: number[]
}
let msg = reactive<T>({
    list: []
})

setTimeout(() => {
    let arr = [1, 2, 2, 3, 3, 4, 4]
    // 解决方法 ② 定义一个类型 进行赋值
    msg.list = arr

    console.log(msg);

}, 1000)


// readonly copy只读
let person = reactive({
    count: 1
})
person.count++
let copy = readonly(person)
// 这里是不能修改数据的
// copy.count++



/**
 * shallowReactive 挂载之前 跟踪 更新视图 
 * shallowReactive 挂载之后不会更新深层次视图 比如 Object类型 
 */

let val = shallowReactive({
    test: '我是小明',
    nav: {
        bar: {
            name: '我是小红'
        }
    }
})

const change1 = () => {
    val.test = '我是小明 被改啦'
}
const change2 = () => {
    val.nav.bar.name = '我是小红 被改啦 nav-bar-name'
    console.log(val);

}
/**
 * shallowReactive 挂载之前 跟踪 更新视图 
 * change1()
 * change2()
 */

//  import {
//     shallowReactive,
//     isReactive
// } from 'https://unpkg.com/@vue/reactivity/dist/reactivity.esm-browser.js'
// isReactive 判断是不是一个reactive 复杂类型的响应式数据 返回值 boolean
const props = shallowReactive({ n: 1 })
console.log(isReactive(props.n)) // false
console.log(isReactive(props)) // true
</script>

<style>
</style>
