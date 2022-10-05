<script setup lang="ts">
import { ref, reactive } from 'vue'
const value = ref<string>('')
interface listData {
    label: string,
    value: string
}

const options = reactive<listData[]>([
    {
        label: '小明',
        value: '101',
    },
    {
        label: '还与韶光共憔悴，不堪看',
        value: '102',
    },
    {
        label: '细雨梦回鸡塞远，小楼吹彻玉笙寒。多少泪珠何限恨，倚阑干',
        value: '103',
    },
    {
        label: '空悲切,白了少年头',
        value: '104',
    },
    {
        label: '近水楼台先得月',
        value: '105',
    }
])
</script>

<template>
    <div>
        <el-select v-model="value" class="m-2 autoWidth-sel" placeholder="Select" size="large" :clearable="true">
            <template #prefix>
                {{options.find(s => s.value === value)?.label }}
            </template>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
    </div>
</template>

<style scoped>
.autoWidth-sel {
    min-width: 120px;
}

.autoWidth-sel>>>.el-input__prefix {
    /* 相对定位 */
    position: relative;
    left: 0px;
    box-sizing: border-box;
    /* 设置透明边框 */
    border: 1px solid #ffffff00;
    /* padding: 0 30px; */
    height: 40px;
    line-height: 40px;
    /* 隐藏 template 占位 */
    visibility: hidden;
    /* display: none; */
}

.autoWidth-sel>>>.el-input__inner {
    /* 绝对定位 */
    position: absolute;
}
</style>