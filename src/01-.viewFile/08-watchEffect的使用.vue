<script setup lang="ts">
import { ref, watchEffect } from 'vue';

let msg = ref<string>('小明')
let msg2 = ref<string>('小红')

const stop = watchEffect((oninvalidate) => {
    // let ipt: HTMLInputElement = document.querySelector('#ipt')!
    // console.log('input元素------> ', ipt);

    console.log('msg---->', msg.value);
    console.log('msg2---->', msg2.value);
    /**
     * 事件回调之前 触发 oninvalidate
     */
    oninvalidate(() => {
        console.log('before');

    })
    /**
     * 第三个参数 flush 
     *  参数值 : post 组件更新后执行
     *          pre 组件更新前执行
     *          sync 强制效果始终同步触发
     */
}, {
    flush: 'post',
    // 在开发环境 可以进行调试
    onTrigger(e) {
        debugger
    }
})
/**
 * stop watchEffect 返回一个函数
 */
const stopWatch = () => stop()
</script>

<template>
    <div>
        <input id="ipt" v-model="msg" type="text" />
        <input v-model="msg2" type="text" />
        <button @click="stopWatch">停止侦听</button>
    </div>
</template>

<style>
</style>