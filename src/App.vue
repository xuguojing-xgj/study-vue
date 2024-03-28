<script setup lang='ts'>
import { ref, reactive } from 'vue';
import useTheme from "./utils/useTheme";

const val = ref<boolean>(true);
const { theme } = useTheme();



</script>

<template>
    <div class="w">

        1查的
        <el-switch v-model="val" :class="theme" @click="  theme = theme === 'dark' ? 'light' : 'dark'" />


    </div>
</template>

<style lang='less' scoped>
.w {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, var(--bg1), var(--bg2));
}
</style>