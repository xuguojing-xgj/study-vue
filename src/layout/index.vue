<script lang="ts" setup>
import { reactive , ref} from 'vue'

/**
 * 拿到子组件 实例 通过 ref
 * content 需要和 绑定的ref 值一样
 */
const contentRef = ref(null)
 
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
    // console.log(ObjList);
    // 通过 ref 拿到 子组件 实例 需要 子组件内部 进行一个暴露 defineExpose({...})
    console.log(contentRef.value);
    
}

</script>


<template>
    <div class="box">
        <!--子向父 @事件名称    父向子组件传值 :动态数组  -->
        <!-- 拿到子组件 实例 通过绑定 ref -->
        <content ref="contentRef" @on-clickChange="getSonObjList" @on-click="getSonList" :dataList="list" />
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