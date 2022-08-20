<template>
    <div class="app">
        {{ message ? '靓仔' : '镁铝'}}
    </div>
</template>

<script setup lang="ts" >
const message: number = 0
</script>

<style scoped>
.app {
    background-color: #ccc;
    width: 500px;
    height: 500px;
}
</style>