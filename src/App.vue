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
    // global.count++
    // console.log(count, name);
    global.getUser()
}
</script>

<template>
    <div>
        ref: {{ global.count }} -- {{ global.name }} <br>
        noRef: {{ count }} -- {{ name }}
        <button type="button" @click="change"> change </button>
    </div>


    <div>
        <p> action-user: {{ global.user }}</p>
        <p> action-name: {{ global.name }} </p>
    </div>
</template>

<style lang='less' scoped></style>