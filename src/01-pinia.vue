<script setup lang='ts'>
import { ref } from 'vue'
import { useGlobalStore } from './store'
// 解决 pinia 结构不具有响应式的问题
import { storeToRefs } from 'pinia'
const global = useGlobalStore()

// pinia 结构不具有响应式
const { count, name } = storeToRefs(global)
const change = () => {
    // 1:  global.count++
    // 2: 批量修改 state 值 $patch方法 接收对象(不推荐)  global.$patch({  count: 2, name: '小红' })
    // 3: 推荐写法 $patch  global.$patch((state) => {  state.count = 2 })
    // 4: global.$state 不能缺少 state 中的字段 global.$state = { count: 2,  name: '小紫' }
    // 5: action    global.setCount(2)
    global.$patch((state) => { state.count++ })
    // console.log(count, name);
    global.getUser('小绿')
}

const reset = () => {
    // 将 state 值 恢复成默认值
    global.$reset()
}

// state 值变化的时候会执行该函数
// 第二个参数(对象) 当前组件销毁时 是否继续侦听 active 方法
global.$subscribe((args, state) => {
    console.log(args, state);

}, {
    detached: true
})

// 调用 active 方法时会执行该函数
// 第二个参数 当前组件销毁时 是否继续侦听 active 方法
global.$onAction((args) => {
    // args.args 代表方法传值
    console.log(args);

}, true)
</script>

<template>
    <div>
        ref: {{ global.count }} -- {{ global.name }} <br>
        noRef: {{ count }} -- {{ name }}
    </div>


    <div>
        <p> action-user: {{ global.user }}</p>
        <p> action-name: {{ global.name }} </p>
        <p> getters: {{ global.name }} </p>
    </div>

    <button type="button" @click="change"> change </button> <br>
    <button type="button" @click="reset"> reset </button>
</template>

<style lang='less' scoped></style>