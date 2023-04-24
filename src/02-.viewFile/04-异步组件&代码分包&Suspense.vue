<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
// 异步组件 注册
const A = defineAsyncComponent(() => import('../src/components/A/index.vue'))
// import A from './components/A/index.vue'
</script>

<template>
    <div>
        <!-- 配合异步组件使用 -->
        <Suspense>
            <!-- 提供两个插槽
            1. 默认展示组件
            2. 默认展示组件加载时 可以添加做的一些事情
            -->
            <template #default>
                <A></A>
            </template>

            <template #fallback>
                loading...
            </template>
        </Suspense>

    </div>
</template>

<style>

</style>