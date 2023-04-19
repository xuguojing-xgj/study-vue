<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { axios } from '../../server/axios'

interface Data {
    data: {
        name: string,
        age: number,
        url: string,
        desc: string,
    }
}

const { data } = await axios.get<Data>('../../../public/skData.json')
</script>
    
<template>
    <div class="sync">
        <div class="sync-content">
            <div><img :src="data.url"></div>
            <div class="sync-pop">
                <div>{{ data.name }}</div>
                <div>&nbsp; {{ data.age }} </div>
            </div>
        </div>
        <hr>
        <div class="desc"> {{ data.desc }} </div>
    </div>
</template>
    

<style lang="less" scoped>
.sync {
    padding: 40px;
    width: 700px;
    height: 250px;
    background-color: #eee;

    .sync-content {
        display: flex;
        align-items: center;

        // justify-content: space-between;
        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }

        .sync-pop {
            display: flex;
        }
    }

    .desc {
        font-size: 24px;
    }
}
</style>