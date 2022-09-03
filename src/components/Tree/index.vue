<script setup lang="ts">
import { TreeListType } from '../../components/types/index'
import TreeItem from './index.vue'
interface Props {
    SonTreeData?: TreeListType[]
}
/**
 * 接收父组件传值
 * Props 接收递归 组件 内部值
 */
defineProps<Props>()

/**
 * 向父组件 触发事件
 */
const emit = defineEmits(['on-Son-click'])
const ClickTreeItem = (item: TreeListType) => {
    /**
     * 向父组件传递事件
     * emit('子组件事件名', 参数1, 参数2...) 可以接收多个参数
     */
    emit('on-Son-click', item)

}
</script>

<script lang="ts">
/**
 * 第二种方式 导出一个name 
 * 在 setup 语法中 没有办法导出 一个 name
 * 所以 重新定义一个 script 
 */
export default {
    name: 'TreeItem'
}
</script>

<template>
    <div style="margin-left:30px">
        <div @click.stop="ClickTreeItem(item)" :key="index" v-for="(item, index) in SonTreeData">
            {{ item.name }}
            <!-- ??  解决问题 undefined 和 null  左边表达式为 undefiend null  就会使用 ?? 右边表达式
            不包括解决 0 和 false 
            -->
            <TreeItem @on-son-click="ClickTreeItem" v-if="item?.children?.length" :SonTreeData="item.children"></TreeItem>
        </div>
    </div>
</template>

<style>
</style>