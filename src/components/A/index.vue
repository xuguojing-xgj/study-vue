<script setup lang="ts">
import { useAttrs } from 'vue'
// import { axios } from './server';

// const list = await axios('./data.json')
// console.log(list);
interface List {
    id: string
    name: string
}

interface Props {
    list: List[]
    title: string,
    num: number
}
const props = defineProps<Props>()


const attr = useAttrs()
console.log('attr', attr);

</script>

<template>
    <div>
        <ui>
            <li v-for="item in props.list" :key="item.id">{{ item.name }}</li>
        </ui>
        <div>{{ 'A组件' }}</div>
    </div>
</template>

<style scoped></style>