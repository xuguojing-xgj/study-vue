

<script setup lang="ts">
/**
 * markRaw  __v_skip: true 跳过 Proxy 代理
 * 数据 结构 
 * {name: 123, __v_skip: true}
 *  name: 123
 * __v_skip: true
 */
import { reactive, markRaw } from 'vue'

import A from './02-A.vue'
import B from './03-B.vue'
import C from './04-C.vue'

let obj = { name: 123 }
let o = markRaw(obj)
console.log(o);

interface Tags {
    name: string,
    comName: any
}

type com = Pick<Tags, 'comName'>

const data = reactive<Tags[]>([
    {
        name: '我是A组件',
        comName: markRaw(A)
    },
    {
        name: '我是B组件',
        comName: markRaw(B)
    },
    {
        name: '我是C组件',
        comName: markRaw(C)
    }
])

/**
 * 默认展示组件
 */
const Current = reactive<com>({
    comName: data[0].comName
})

/**
 * 切换组件
 */
const swatchTags = (item: Tags) => {
    Current.comName = item.comName
}
</script>


<template>
    <div class="content">
        <div class="tag">
            <div class="tag-item" @click="swatchTags(item)" v-for="(item, index) in data">{{ item.name }}</div>
        </div>
        <component :is="Current.comName"></component>
    </div>
</template>


<style lang="less" scoped>
.tag {
    display: flex;

    .tag-item {
        margin: 0 10px;
        border: 1px solid #ccc;
        // 鼠标经过变小手
        &:hover {
            cursor: pointer;
        }
    }
}
</style>