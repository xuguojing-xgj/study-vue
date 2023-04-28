<script setup lang='ts'>
// 使用全局注册的 mitt
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()

const Bus = (str: any) => {
    console.log(str);
}
// 接收事件      on('自定义参数', () => {})
instance?.proxy?.$Bus.on('on-string', Bus)

/**
 * 接收多条
 */

instance?.proxy?.$Bus.on('*', (type, data) => {
    console.log(type, data);
})

// 删除方法 
/**
 * off('事件名称', 删除的函数)
 * all.clear() 删除全部
 */
// instance?.proxy?.$Bus.off('on-string', Bus)

// instance?.proxy?.$Bus.all.clear()
</script>

<template>
    <div>
        <h2>C组件</h2>
    </div>
</template>

<style lang='scss' scoped></style>