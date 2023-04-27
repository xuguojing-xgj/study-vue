<script setup lang='ts'>
import { ref } from 'vue'
import { usePlugin1Store, usePlugin2Store } from './store/store-plugin'

const plugin1 = usePlugin1Store()
const plugin2 = usePlugin2Store()

const plugin1_func = () => {
    plugin1.count++
}

const plugin2_func = () => {
    plugin2.count++
}
</script>

<template>
    <div>
        <div>
            plugin1: <span> {{ plugin1.count }} </span>
        </div>

        <button type="button" @click="plugin1_func"> plugin1-btn </button>

        <div>
            plugin2: <span> {{ plugin2.count }} </span>
        </div>
        <button type="button" @click="plugin2_func"> plugin2-btn </button>
    </div>
</template>

<style lang='less' scoped></style>
