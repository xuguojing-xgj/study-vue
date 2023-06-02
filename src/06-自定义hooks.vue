<script setup lang='ts'>
import { ref } from 'vue'
import useBase64 from './hooks'
// import A from '@/components/A/index.vue'
import Atemplate from './components/A/index.vue'
const arr = [
    {
        id: '1',
        name: '小明',
    },
    {
        id: '2',
        name: '小红',
    },
    {
        id: '3',
        name: '小紫',
    },
]
useBase64({
    el: '#img'
}).then((res) => {
    console.log(res.baseUrl);
})


</script>

<template>
    <div>
        <Atemplate :list="arr" title="我是一个字符串" :num="1"></Atemplate>
        <div>{{ 'app' }}</div>
        <img src="@/assets/1.jpg" id="img" alt="">
    </div>
</template>

<style lang='scss' scoped></style>