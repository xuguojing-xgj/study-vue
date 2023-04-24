<script setup lang='ts'>
import { ref } from 'vue'
import { useGlobalStore } from './store'
const global = useGlobalStore()
</script>

<template>
    <div>
        {{ global.count }} -- {{ global.name }}
    </div>
</template>

<style lang='less' scoped></style>