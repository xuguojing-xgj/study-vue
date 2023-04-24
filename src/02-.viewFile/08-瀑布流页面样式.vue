<script setup lang="ts">
import { ref, reactive } from 'vue'
import waterFall from './components/water-fall/water-fall.vue'

const list = [
    {
        height: 300,
        background: 'pink',
    },
    {
        height: 200,
        background: 'red',
    },
    {
        height: 100,
        background: 'blue',
    },
    {
        height: 400,
        background: 'skyblue',
    },
    {
        height: 200,
        background: 'green',
    },
    {
        height: 200,
        background: 'green',
    },
    {
        height: 400,
        background: 'skyblue',
    },
    {
        height: 300,
        background: 'pink',
    },
    {
        height: 200,
        background: 'red',
    },
    {
        height: 100,
        background: 'blue',
    },
    {
        height: 200,
        background: 'green',
    },
    {
        height: 200,
        background: 'green',
    },
    {
        height: 400,
        background: 'skyblue',
    },
]
</script>

<template>
    <waterFall :list="list"></waterFall>
</template>



<style lang="scss" scoped></style>