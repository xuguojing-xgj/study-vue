<script setup lang="ts">
//子孙组件引入inject
import { ref, inject } from "vue";


const reload = inject("reload");

//调用方法使用
const handleClick = (val: any) => {
    if (typeof reload == "function") reload();
    
};
</script>

<template>
    <div>


    </div>
</template>

<style scoped>

</style>