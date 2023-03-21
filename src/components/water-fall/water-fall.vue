<script setup lang='ts'>
import {
    onMounted, reactive, ref
} from 'vue';
interface Props {
    list: any[]
}
onMounted(() => {
    init_func()
})
const props = defineProps<Props>()

const waterList = reactive<any[]>([])
const heightList: number[] = []
const init_func = () => {
    const width = 130;
    // 获取浏览器宽度
    const x = document.body.clientWidth
    // 向下取整
    const colunm = Math.floor(x / width)
    console.log(colunm);

    for (let i = 0; i < props.list.length; i++) {
        if (i < colunm) {
            props.list[i].left = i * width
            props.list[i].top = 20
            waterList.push(props.list[i])
            heightList.push(props.list[i].height)
        } else {
            let current = heightList[0];
            let index = 0;
            heightList.forEach((h, i) => {
                if (current > h) {
                    current = h;
                    index = i;
                }
            })
            props.list[i].top = current + 20
            props.list[i].left = index * width
            console.log(heightList);

            heightList[index] = heightList[index] + props.list[i].height + 20
            waterList.push(props.list[i])
        }
    }
}
</script>

<template>
    <div class="wraps">
        <div class="items"
            :style="{ height: item.height + 'px', background: item.background, left: item.left + 'px', top: item.top + 'px', }"
            v-for="item in waterList"></div>
    </div>
</template>
        
<style scoped lang="less" >
.wraps {
    position: relative;

    .items {
        position: absolute;
        width: 120px;

    }
}
</style>