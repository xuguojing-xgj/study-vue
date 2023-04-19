<script setup lang='ts'>
import { ref, reactive, defineAsyncComponent } from 'vue'
import skeleton from './components/expame/skeleton.vue'
// 两种书写格式
// defineAsyncComponent 异步组件 需要 配合 vue3内置的属性使用 Suspense
const SyncVue = defineAsyncComponent(() => import('./components/expame/sync.vue'))


//完整写法
 
// const AsyncComp = defineAsyncComponent({
//   // 加载函数
//   loader: () => import('./Foo.vue'),
 
//   // 加载异步组件时使用的组件
//   loadingComponent: LoadingComponent,
//   // 展示加载组件前的延迟时间，默认为 200ms
//   delay: 200,
 
//   // 加载失败后展示的组件
//   errorComponent: ErrorComponent,
//   // 如果提供了一个 timeout 时间限制，并超时了
//   // 也会显示这里配置的报错组件，默认值是：Infinity
//   timeout: 3000
// })
// 原文链接： https://blog.csdn.net/qq1195566313/article/details/122909360
</script>

<template>
    <div>
        <Suspense>
            <template #default>
                <SyncVue></SyncVue>
            </template>
            <template #fallback>
                <skeleton></skeleton>
            </template>
        </Suspense>
    </div>
</template>
    
<style lang="less" scoped></style>