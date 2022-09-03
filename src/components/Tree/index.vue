<script setup lang="ts">
import { TreeListType } from '../../components/types/index'

interface Props {
    SonTreeData?: TreeListType[]
}
defineProps<Props>()
</script>


<template>
    <div>{{ SonTreeData }}</div>
</template>

<style>
</style>