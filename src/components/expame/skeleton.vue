<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>

<template>
    <div class="sk">
        <el-skeleton :animated="true">
            <template #template>
                <div class="sk-0">
                    <div>
                        <el-skeleton-item variant="image" class="img" />
                    </div>
                    <div class="sk-1">
                        <div> <el-skeleton-item variant="text" style="width:50px" /></div>
                        <div>&nbsp;<el-skeleton-item variant="text" style="width:50px" /> </div>
                    </div>
                </div>
                <hr>
                <el-skeleton-item variant="text" style="width:100%; height: 25px; margin-bottom: 10px;" />
                <el-skeleton-item variant="text" style="width:100%; height: 25px;" />
            </template>
        </el-skeleton>
    </div>
</template>

<style lang='less' scoped>
.sk {
    padding: 40px;
    width: 700px;
    height: 250px;
    background-color: #eee;

    .sk-0 {
        display: flex;
        align-items: center;

        .img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }

        .sk-1 {
            margin-left: 20px;
            display: flex;
        }
    }

}
</style>