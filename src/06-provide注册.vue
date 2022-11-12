<script setup lang="ts">
import { ref, provide, nextTick } from "vue";

const isRouterView = ref(true);
//父组件刷新方法
const reload = () => {
    isRouterView.value = false;
    nextTick(() => {
        isRouterView.value = true;
    })
}
//provide进行注册
provide('reload', reload);

</script>

<template>
    <div>


    </div>
</template>

<style scoped>

</style>