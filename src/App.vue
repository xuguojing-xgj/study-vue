<template>
    <div>
        <div>
            <div v-text="message"></div>
            <div v-html="message1"></div>
        </div>

        <div v-if="flag == 'A'"> 这是a</div>
        <div v-else-if="flag == 'B'"> 这是b</div>
        <div v-else-if="flag == 'C'"> 这是c</div>
        <div v-else> 这是d</div>

        <button @click="clickFn">btn事件</button>

        <form action="/">
            <button @click.prevent="submitFn" type="submit"> 提交 </button>
        </form>

        <div :class="[flag ? 'aStyle' : 'bStyle']">
            我是小憨批
        </div>
        <input v-model="refMessage" />
        <div>{{ refMessage }}</div>


    </div>
</template>

<script setup lang="ts" >
import { ref } from 'vue'
import type { Ref } from 'vue'
const message: string = '我,是,小,憨,批'
const message1: string = '<div>我,是,小,憨,批</div>'

const flag: string = '1'
//  得到的类型 Ref<string | undefined>
const refMessage = ref<string | number>('test')
// : Ref<string | number> 仅表示类型 
const RefMessage: Ref<string | number> = ref('0')

const clickFn = () => {
    console.log('触发了点击事件');
}

const submitFn = (e: Object) => {
    console.log(e);

}
interface Props {
    foo: string,
    bar?: number
}
// defineProps<{ /*... */ }>() 字面量
// interface Props {/* ... */}
// defineProps<Props>()

const props = defineProps<Props>()
let typeFoo = typeof props.foo
console.log(typeFoo);


/**
 * reactive 定义一个对象类型的响应式数据
 * 返回一个 代理对象 (Proxy的实例对象, 简称 Proxy对象)
 * reactive 定义响应式 数据是深层次的
 * 内部 基于 Proxy 实现  通过代理对象源 对 对象内部数据进行操作
 *  */
import { reactive } from 'vue';
interface obj {
    name: string,
    age: number,
    test: Object | any,
    arrList: Array<string>
}
const obj1: obj = reactive({
    name: '小明',
    age: 18,
    test: {
        sing: '唱歌'
    },
    arrList: ['123', '223', '323']
})
obj1.name = '小红'
obj1.arrList[0] = '444'
console.log(obj1);
console.log(obj1.test.sing);
console.log(obj1.arrList);
</script>

<style scoped>
.aStyle {
    color: skyblue;
}

.bStyle {
    color: aqua;
}
</style>