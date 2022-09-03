<script setup lang="ts">

</script>

<template>
    <div>
        <header class="header">header
        </header>
        <main class="main">main
            <!-- 匿名插槽 -->
            <slot></slot>
        </main>
        <footer class="footer">footer
        </footer>
    </div>
</template>

<style lang="less" scoped>
.header {
    width: 600px;
    height: 200px;
    background-color: aquamarine;
    color: #fff;
}

.main {
    width: 600px;
    height: 200px;
    background-color: red;
    color: #fff;
}



.footer {
    width: 600px;
    height: 200px;
    background-color: skyblue;
    color: #fff;
}
</style>