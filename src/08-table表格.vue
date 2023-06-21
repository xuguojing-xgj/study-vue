<script setup lang='ts'>

import {ref, reactive, computed} from 'vue';

const rows = reactive<any>([
  {id: 1, name: 'John Doe', age: 25, email: 'john@example.com'},
  {id: 2, name: 'Jane Smith', age: 32, email: 'jane@example.com'},
  {id: 3, name: 'Alice', age: 12, email: 'alice_6110@hotmail.com'},
  {id: 4, name: 'Jane', age: 22, email: 'jane_1385@hotmail.com'},
  {id: 5, name: 'Alice', age: 21, email: 'alice_9356@outlook.com'},
  {id: 6, name: 'Olivia', age: 18, email: 'olivia_2487@example.com'},
  {id: 7, name: 'Michael', age: 19, email: 'michael_5337@yahoo.com'},
  {id: 8, name: 'Jane', age: 30, email: 'jane_4059@outlook.com'},
  {id: 9, name: 'Bob', age: 24, email: 'bob_8420@example.com'},
  {id: 10, name: 'Olivia', age: 27, email: 'olivia_7546@yahoo.com'},
  // More rows...
])
const columns = reactive([
  {id: 1, label: 'Name', field: 'name'},
  {id: 2, label: 'Age', field: 'age'},
  {id: 3, label: 'Email', field: 'email'},
])

const searchQuery = ref('')

const filteredRows = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return rows.filter((row: any) =>
      Object.values(row).some(value =>
          String(value).toLowerCase().includes(query)
      )
  );
})

</script>

<template>
  <div class="container">
    <div class="int">
      <el-input v-model="searchQuery"></el-input>
    </div>
    <div>
      <table class="custom-table" cellpadding="0" cellspacing="0" border="1">
        <thead>
        <tr>
          <th v-for="column in columns" :key="column.id">{{ column.label }}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in filteredRows" :key="row.id">
          <td v-for="column in columns" :key="column.id">{{ row[column.field] }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang='less' scoped>
.container {
  width: 50%;
  margin: 0 auto;

  .int {
    width: 200px;
    margin: 10px 0;
  }

  .custom-table {
    width: 700px;
    height: 200px;
    text-align: center;
  }
}
</style>