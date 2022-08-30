<script lang="ts" setup>
import content from './content/index.vue'
import { reactive } from 'vue'
let list = reactive<number[]>([1, 2, 3, 4])
</script>


<template>
    <div class="box">
        <!-- 向子组件传值 动态数组  title -->
        <content :dataList="list" title="我想买一条裤子" />
        <div class="div">我是 index 页面</div>
    </div>
</template>



<style scoped>
.box {
    display: flex;
}

.div {
    width: 200px;
    height: 200px;
    background-color: skyblue;
}
</style>