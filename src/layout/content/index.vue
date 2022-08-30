<script lang="ts" setup>
// 定义一个接口类型
interface Props {
    title: string,
    dataList: number[]
}
/**
 * defineProps接收 父组件 传过来的值
 */
defineProps<Props>()
</script>


<template>
    <div>
        <div class="div"> 我是 content 组件

            <p>{{  title  }}</p>
            <p>{{ dataList }}</p>
        </div>

    </div>
</template>



<style scoped>
.div {
    width: 200px;
    height: 200px;
    background-color: #ccc;
}
</style>