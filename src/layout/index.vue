<script lang="ts" setup>
import content from './content/index.vue'
import { reactive } from 'vue'
/**
 *  向父组件 传递的数据
 */
let list = reactive<number[]>([1, 2, 3, 4])
/**
 * 获取子组件 传递过来的数据
 */
const getSonList = (list: string[], flag: boolean) => {
    console.log(list, flag, '我是子组件传递的数据');
}
const getSonObjList = (ObjList: any) => {
    console.log(ObjList);
}
</script>


<template>
    <div class="box">
        <!--子向父 @事件名称    父向子组件传值 :动态数组  -->
        <content @on-clickChange="getSonObjList" @on-click="getSonList" :dataList="list" title="我想买一条裤子" />
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