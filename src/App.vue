<script setup lang="ts">
import { ref } from 'vue'
import MyDialog from './components/Dialog/index.vue'
let msg = ref('MyHeader')
</script>

<template>
    <div>
        <MyDialog>
            <template #MyHeader>
                <div>我是Header 具名插槽</div>
            </template>
            <!-- #default 匿名插槽的简写方式 -->
            <template #default="{data, index}">
                <div>{{data.name}} --- {{data.age}} --- {{index}}</div>
            </template>
            <template #MyFooter>
                <div>我是MyFooter 具名插槽</div>
            </template>
        </MyDialog>

        <MyDialog>
            <template #[msg]>
                <div>我是动态插槽</div>
            </template>
        </MyDialog>
    </div>
</template>

<style>

</style>