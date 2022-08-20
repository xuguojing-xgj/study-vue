<template>
    <div>
        <div  v-text="message"></div>
        <div  v-html="message1"></div>
        <!-- {{ message.split(',').map(x => `&${x}`) }} -->
    </div>
</template>

<script setup lang="ts" >
const message: string = '我,是,小,憨,批'
const message1: string = '<div>我,是,小,憨,批</div>'
</script>

<style scoped>
</style>