<template>
    <div>
        <div v-text="message"></div>
        <div v-html="message1"></div>
    </div>

    <div v-if="flag == 'A'"> 这是a</div>
    <div v-else-if="flag == 'B'"> 这是b</div>
    <div v-else-if="flag == 'C'"> 这是c</div>
    <div v-else> 这是d</div>

    <button @click="clickFn">btn事件</button>

    <form action="/">
        <button @click.prevent="submitFn" type="submit"> 提交 </button>
    </form>
</template>

<script setup lang="ts" >
const message: string = '我,是,小,憨,批'
const message1: string = '<div>我,是,小,憨,批</div>'

const flag: string = ''

const clickFn = () => {
    console.log('触发了点击事件');
}

const submitFn = (e: Object) => {
    console.log(e);

}
</script>

<style scoped>
</style>