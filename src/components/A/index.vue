<script setup lang="ts">
import { axios } from './server';

const list = await axios('./data.json')
console.log(list);

</script>

<template>
    <div>
        <div v-for="item in list" :key="item.id">{{item.name}}</div>
    </div>
</template>

<style scoped>

</style>