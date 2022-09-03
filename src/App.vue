
<script setup lang="ts">
import MyHeader from './layout/header/index.vue'
</script>


<template>
    <div>
        <div>
            <MyHeader></MyHeader>
        </div>
        <div v-for="(item, i) in 10" :key="i">
            <card :content="`我是第${item}个`"></card>
        </div>
    </div>
</template>



<style>
</style>