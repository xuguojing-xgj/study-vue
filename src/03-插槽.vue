<script setup lang="ts">
import MyDialog from './components/Dialog/index.vue'
</script>

<template>
    <div>
        <MyDialog>
            <template v-slot:MyHeader>
                <div>我是Header 具名插槽</div>
            </template>
            <template v-slot>
                <div>我是Main 匿名插槽</div>
            </template>
            <template #MyFooter>
                <div>我是MyFooter 具名插槽</div>
            </template>
        </MyDialog>
    </div>
</template>

<style>
</style>