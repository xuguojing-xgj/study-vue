<script setup lang='ts'>
import { ref, watch } from 'vue'

// 使用侦听器 侦听一个ref 响应式数据
let inp = ref<string | number>('')
let val = '监听input输入...'
watch(inp, (newValue, oldValue):string => {
      console.log('最新值',newValue)
      console.log('旧值',oldValue)
  setTimeout(() => {
    console.log(val)
  },1000)
})

let x = ref<number>(0)
let y = ref<number>(0)
watch(() => x.value + y.value, (num) => {
  console.log(num)
}
)
// 多个来源组成的数组
/**
watch([x, () => y.value], ([xNew, yNew]):string => {
  console.log(xNew)
  console.log(yNew)
})
*/


</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="inp"/>
  </p>
</template>
