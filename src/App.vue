<script setup lang="ts">
import MyDialog from './components/Dialog/index.vue'
</script>

<template>
    <div>
        <MyDialog>
            <template v-slot>
                <div>我是匿名插槽</div>
            </template>
        </MyDialog>
    </div>
</template>

<style>
</style>