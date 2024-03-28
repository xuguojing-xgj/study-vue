<script setup lang='ts'>
import {ref, reactive, computed} from 'vue';
import csv from 'csvjson';

const options = {
  delimiter : ',', // optional
  quote     : '"' // optional
};

const csvData = ' sr,name,age,gender\n' +
    '    1,rocky,33,male\n' +
    '    2,jacky,22,male\n' +
    '    3,suzy,21,female';

const res = csv.toObject(csvData,options)
console.log(res)
console.log(csv)
</script>

<template>
  <div>
    测试
  </div>
</template>

<style lang='less' scoped>

</style>