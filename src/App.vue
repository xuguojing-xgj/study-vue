
<script setup lang="ts">
import MyHeader from './layout/header/index.vue'
import MyMenu from './layout/menu/index.vue'
</script>


<template>
    <div class="App">
        <div>
            <MyMenu></MyMenu>
        </div>

        <div>
            <MyHeader />
            <div v-for="(item, i) in 5" :key="i">
                <card :content="`我是第${item}个`"></card>
            </div>
        </div>
    </div>

</template>



<style scoped lang="less">
.App {
    display: flex;
    justify-content: flex-start;
}
</style>