<script setup lang='ts'>
// 使用全局注册的 mitt
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()

const emit = () => {
    /** 
     * emit('自定义事件', 参数)
     * 发送多条
     * */
    instance?.proxy?.$Bus.emit('on-string', '小明')
    instance?.proxy?.$Bus.emit('on-number', 1)
}
</script>

<template>
    <div>
        <h2>B组件</h2>
        <button type="button" @click="emit">emit</button>
    </div>
</template>

<style lang='scss' scoped></style>