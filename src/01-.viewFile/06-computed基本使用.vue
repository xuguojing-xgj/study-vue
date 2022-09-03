<script setup lang="ts">
import { computed, ref } from 'vue';
let fistName = ref('')

let lastName = ref('')

// 计算属性
// const name = computed(() => {
//     return fistName.value + '---' + lastName.value
// })

// const name = computed({
//     get() {
//         return fistName.value + '---' + lastName.value
//     },
//     set() {
//         fistName.value + '---' + lastName.value
//     }
// })
</script>

<template>
    <div>
        <input v-model="fistName" type="text" />
        <input v-model="lastName" type="text" />
        <!-- <div>{{  name  }}</div> -->
    </div>
</template>

<style>
</style>
