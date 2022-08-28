<template>
    <div>
        <!-- submit 提交事件 prevent修饰符 阻止页面刷新 -->
        reactive
        <p>{{ message }}</p>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

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
</script>

<style>
</style>