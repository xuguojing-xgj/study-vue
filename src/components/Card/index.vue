
<script setup lang="ts">

interface Props {
    content?: string
}

defineProps<Props>()
</script>

<template>
    <div class="card">
        <div class="card-header">
            <div>主标题</div>
            <div>副标题</div>
        </div>
        <div class="card-content" v-if="content">{{ content }}</div>
    </div>
</template>


<style scoped lang="less">
@border: #ccc;

.card {
    border: 1px solid @border;
    width: 600px;
    height: 300px;

    &:hover {
        box-shadow: 0 0 10px @border;
    }

    &-header {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid @border;
    }

    &-content {
        padding: 10px;
    }
}
</style>