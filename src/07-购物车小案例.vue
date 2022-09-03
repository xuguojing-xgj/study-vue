<script setup lang="ts">
import { computed, ref, reactive } from 'vue';
interface Shop {
    id: number,
    name: string,
    num: number,
    price: number
}
let $total = ref<number>(0)
let date = reactive<Shop[]>([
    {
        id: 315,
        name: '保温杯',
        num: 1,
        price: 10
    },
    {
        id: 316,
        name: '被子',
        num: 1,
        price: 99
    },
    {
        id: 317,
        name: '床单',
        num: 1,
        price: 5
    }
])

const deleteAndAddFn = (item: Shop, type: boolean): void => {
    if (item.num > 1 && !type) {
        item.num--
    }
    if (item.num < 99 && type) {
        item.num++
    }
    // total()
}
const delFn = (i: number) => {
    date.splice(i, 1)
    // total()
}
// 使用计算属性实现 总价
$total = computed((): number => {
    return date.reduce((prev, next) => {
        return prev + (next.num * next.price)
    }, 0)
})
// const total = () => {
//     $total.value = date.reduce((prev, next) => {
//         return prev + (next.num * next.price)
//     }, 0)
// }
// total()
</script>

<template>
    <div>
        <!-- 
            cellpadding 是边框与其内容的间隙大小
            cellspacing 是边框与边框之间的间隙大小 -->
        <table border style="width: 800px" cellpadding="0" cellspacing="0">
            <thead>
                <tr>
                    <th>名称 </th>
                    <th>数量 </th>
                    <th>单价 </th>
                    <th>操作 </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in date" :key="item.id">
                    <td>{{  item.name  }}</td>
                    <td> <button @click="deleteAndAddFn(item, false)">-</button> {{  item.num  }} <button
                            @click="deleteAndAddFn(item, true)">+</button> </td>
                    <td>{{  item.num * item.price  }}</td>
                    <td><button @click="delFn(index)">删除</button></td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>总价: {{  $total  }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<style>
</style>