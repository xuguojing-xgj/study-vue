<script lang="ts" setup>
import { reactive } from "@vue/reactivity"


/**
 * defineProps接收 父组件 传过来的值
 * 定义一个接口类型
 */
interface Props {
    title?: string, // 让 title 成为可选  可传 可不传
    dataList?: number[] // 让 dataList 成为可选 可传 可不传 
}
/**
 * 在子组件内 默认参数 需要 withDefaults()
 * withDefaults() 第一个参数 为 defineProps<Props>() 接收父组件的
 * withDefaults() 第二个参数 为 一个对象{}
 */
withDefaults(defineProps<Props>(), {
    title: '我是默认值',
    // 而设置 dataList 默认值 时 则不能直接 定义数据 (报错)
    // 需要通过 一个函数 进行定义 返回数据
    dataList: () => [1, 2, 3, 4, 5, 6, 7, 8]
})
/**
* 导出一个接口类型 默认数据
*/
export interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
/**
 * 子向父传值
 * defineEmits() 返回一个函数 接收一个数组['事件名称']
 * emit() 返回函数的 第一个为事件名称, 不限制 传递参数 可以传多个... 用逗号隔开
 * const emit = defineEmits<{
 * (event: 'change'): void
 * (event: 'update', id: number): void
 * }>()
 */
interface T {
    data: number[],
    name: string,
    obj: {
        age: number,
        fn: () => void
    }
}
const list = reactive<string[]>(['1', '2', '3'])
const ObjList = reactive<T>({
    data: [1, 2, 3],
    name: '我是小明',
    obj: {
        age: 18,
        fn: () => {
            console.log('1');
        }
    }
})
/**
 * 想父组件 传递事件
 */
const emit = defineEmits(['on-click', 'on-clickChange'])
/**
 * 定义方法
 */
const change = () => {
    emit('on-click', list, false)
}
const clickChange = () => {
    emit('on-clickChange', ObjList)
}
/**
 * 向父组件 暴露实例 数据 让父组件 通过 ref 拿到 子组件 实例数据
 */
defineExpose({
    list,
    ObjList
})
</script>


<template>
    <div>
        <div class="div"> 我是 content 组件

            <p>{{  title  }}</p>
            <p>{{  dataList  }}</p>

            <button @click="change">子向父</button>
            <p class="p"></p>
            <button @click="clickChange">子向父 any </button>
        </div>

    </div>
</template>



<style scoped>
.div {
    width: 200px;
    height: 400px;
    background-color: #ccc;
}

.p {
    height: 1rpx;
}
</style>
