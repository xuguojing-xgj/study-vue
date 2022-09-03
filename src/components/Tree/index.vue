<script setup lang="ts">
import { TreeListType } from '../../components/types/index'
import TreeItem from './index.vue'
interface Props {
    SonTreeData?: TreeListType[]
}
defineProps<Props>()
</script>


<template>
    <div style="margin-left:30px">
        <div :key="index" v-for="(item, index) in SonTreeData">
            {{ item.name }}
            <TreeItem v-if="item?.children?.length" :SonTreeData="item.children"></TreeItem>
        </div>


    </div>
</template>

<style>
</style>