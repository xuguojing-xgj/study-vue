<template>
    <div>
        <div v-text="message"></div>
        <div v-html="message1"></div>
    </div>

    <div v-if="flag == 'A'"> 这是a</div>
    <div v-else-if="flag == 'B'"> 这是b</div>
    <div v-else-if="flag == 'C'"> 这是c</div>
    <div v-else> 这是d</div>
</template>

<script setup lang="ts" >
const message: string = '我,是,小,憨,批'
const message1: string = '<div>我,是,小,憨,批</div>'

const flag: string = ''
</script>

<style scoped>
</style>