<script lang="ts" setup>
import { reactive } from "@vue/reactivity"


/**
 * defineProps接收 父组件 传过来的值
 * 定义一个接口类型
 */
interface Props {
    title: string,
    dataList: number[]
}
defineProps<Props>()


/**
 * 子向父传值
 * defineEmits() 返回一个函数 接收一个数组['事件名称']
 * emit() 返回函数的 第二个参数 要传递的数据
 * const emit = defineEmits<{
 * (event: 'change'): void
 * (event: 'update', id: number): void
 * }>()
 */
const list = reactive<string[]>(['1', '2', '3'])
const emit = defineEmits(['on-click'])
const change = () => {
    emit('on-click', list)
}
</script>


<template>
    <div>
        <div class="div"> 我是 content 组件

            <p>{{  title  }}</p>
            <p>{{  dataList  }}</p>

            <button @click="change">子向父</button>
        </div>

    </div>
</template>



<style scoped>
.div {
    width: 200px;
    height: 200px;
    background-color: #ccc;
}
</style>