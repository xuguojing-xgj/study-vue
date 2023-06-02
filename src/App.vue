<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import useResize from 'dom-change-plugin'



onMounted(() => {
    const el = document.querySelector('.container')
    useResize(el, (e: any) => {
        console.log(e);
    })
})

</script>

<template>
    <div class="container">
    </div>
</template>

<style lang='less' scoped>
.container {
    width: 200px;
    height: 200px;
    background-color: yellow;
}
</style>