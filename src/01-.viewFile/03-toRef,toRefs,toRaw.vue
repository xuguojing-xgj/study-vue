<template>
    <div>
        toRef
        <p>{{ msg }}</p>
        <p><button @click="change">btn①</button></p>
    </div>

    <div>
        toRefs
        <p>foo: {{ foo }} bar: {{ bar }}</p>
        <button @click="toRefsChange">toRefsChange</button>
    </div>
</template>

<script setup lang="ts">
import { toRaw, toRef, toRefs, reactive } from 'vue';
/**
 * 如果 原始对象 通过 响应式 reactive 进行代理
 * 数据本身会发生改变 视图也会进行更新
 * toRef 引用更改的属性 也会发生变化
 */
let msg = reactive({
    foo: 1,
    bar: 1
})
/**
 * toRef 使一个属性变为响应式
 * toRef 会改变原始数据(受到影响) 自身的数据也会改变  视图不会改变
 */


let toRefMsg = toRef(msg, 'bar')

const change = () => {
    toRefMsg.value++
    console.log('--->原始对象', msg);
    console.log('--->toRef引用对象', toRefMsg);

}


/**
 * {foo, bar}  结构 reactive 响应式数据
 * 而 foo, bar 结构出来 不是响应式的
 * 需要通过 toRefs 包裹 进行处理成 响应式数据
 */
interface Object {
    foo: number,
    bar: number
}
let objReactive = reactive<Object>({
    foo: 1,
    bar: 0
})
let { foo, bar } = toRefs(objReactive)
const toRefsChange = () => {
    foo.value++
    bar.value++
}
console.log(foo);
console.log(bar);

/**
 * 定义一个响应式数据
 */
let reactiveObject = reactive<Object>({
    foo: 1,
    bar: 4
})
/**
 * toRaw 作用将一个 响应式数据 更新为 普通数据
 */
let raw = toRaw(reactiveObject)

console.log('reactiveObject', reactiveObject);
console.log('raw', raw);

</script>

<style>
</style>