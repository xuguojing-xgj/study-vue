
<script setup lang="ts">

</script>


<template>
    <div>
        <div v-for="(item, i) in 10" :key="i">
            <card :content="`我是第${item}个`"></card>
        </div>
    </div>
</template>



<style>
</style>