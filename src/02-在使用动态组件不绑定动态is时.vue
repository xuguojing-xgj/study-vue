<script setup lang="ts">
import A from './01-A.vue';

</script>
<!-- 问题: 在使用动态组件时 is 不是动态绑定的时候 动态组件不会渲染 -->
<!-- 解决方法 不使用 setup 语法 默认导出 注册组件 在进行使用-->
<!-- 在一个 vue 页面使用 第二个 script 标签 必须使用一样的 lang语法 比如 lang="ts" -->
<script lang="ts">
export default {
    components: {
        A
    }
}
</script>

<template>
    <div>
        <component is="A"> </component>
    </div>
</template>

<style>
</style>
