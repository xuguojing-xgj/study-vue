<script setup lang="ts">
import { reactive } from 'vue'

interface names {
    name: string,
    age: number
}
const data = reactive<names[]>([{
    name: '小明1',
    age: 18
},
{
    name: '小明2',
    age: 19
},
{
    name: '小明3',
    age: 20
},
{
    name: '小明4',
    age: 21
}])
</script>

<template>
    <div>
        <header class="header">header
            <!-- 具名插槽 -->
            <slot name="MyHeader"></slot>
        </header>
        <main class="main">main
            <!-- 匿名插槽 -->
            <div v-for="(item, index) in data">
                <!-- 插槽传入数据 -->
                <slot :data="item" :index="index"></slot>
            </div>
        </main>
        <footer class="footer">footer
            <slot name="MyFooter"></slot>
        </footer>
    </div>
</template>

<style lang="less" scoped>
.header {
    width: 600px;
    height: 200px;
    background-color: aquamarine;
    color: #fff;
}

.main {
    width: 600px;
    height: 200px;
    background-color: red;
    color: #fff;
}



.footer {
    width: 600px;
    height: 200px;
    background-color: skyblue;
    color: #fff;
}
</style>