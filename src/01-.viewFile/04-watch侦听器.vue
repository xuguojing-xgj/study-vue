<script setup lang='ts'>
import { ref, watch, reactive, watchEffect } from 'vue'

// 使用侦听器 侦听一个ref 响应式数据
let inp = ref<string | number>('')

let val = '监听input输入...'
watch(inp, (newValue, oldValue): any => {
    console.log('最新值', newValue)
    console.log('旧值', oldValue)
    setTimeout(() => {
        console.log(val)
    }, 1000)
})

let x = ref<number>(0)
let y = ref<number>(0)
watch(() => x.value + y.value, (num) => {
    console.log(num)
}
)
// 多个来源组成的数组
/**
watch([x, () => y.value], ([xNew, yNew]):string => {
  console.log(xNew)
  console.log(yNew)
})
*/
interface Props {
    name: string
}
let reactiveObj = reactive<Props>({
    name: ''
})

// 侦听一个 reactive 响应式数据 属性值
// watch(reactiveObj.name, () => {}) X

// 需要用一个返回该属性的 getter 函数： 列如
watch(() => reactiveObj.name, () => { })


// 深层侦听器 也可以直接给 watch 传入一个 reactiveObj 响应式对象
// 这样 watch 在侦听时 会隐式的创建一个 深层侦听器 {deep: true}
// 该回调函数在所有嵌套的变更时都会被触发
watch(reactiveObj, () => { })



const unwatch = watchEffect(() => { })

// ...当该侦听器不再需要时
unwatch()

/**
 * 侦听多个值 [] 可以是一个数组
 * ref 侦听响应式对象 需要开启深度侦听 deep: true
 * reactive 响应式数据 默认可以深度侦听 不需要在开启 深度侦听
 */
let msg = ref<string>()
let msg2 = ref<string>()
let reactiveMsg = reactive({
    name: '小明',
    age: 18
})
watch([msg, msg2], (newVal, oldVal) => { }, { deep: true, immediate: true })
/**
 * 只侦听reactive 中其中一个属性值 可以用函数式 进行侦听
 */
watch(() => reactiveMsg.name, () => {})
</script>

<template>
    <p>
        Ask a yes/no question:
        <input v-model="inp" />

        <input v-model="msg" />
        <input v-model="msg2" />
    </p>
</template>
