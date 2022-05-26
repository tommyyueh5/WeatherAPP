<template>

    <!-- <div v-for="(item, i) in resData" :key="i">
    {{ item.locationName }}
    </div> -->

    <!-- 綁Ｖmodel -->
    <div>地區：{{ selected }}</div>
    <select v-model="selected">
        <!-- 1.v-for option 2.綁v-bind value -->
        <option disabled value="">Please select one</option>
        <option v-for="(item, i) in resData" :key="i" :value="item.locationName">{{ item.locationName }}</option>
    </select>



    <ul>
        <li v-for="(item, index) in uniqueArr" :key="index">{{item}}</li>
    </ul>

    <ul>

    </ul>

    <!-- 氣溫表 -->
</template>

<script setup>

import mainwather from '@/components/mainwather.vue'
import weekdaylist from '@/components/weekdaylist.vue'
import axios from 'axios'
import { GetWeather } from '@/api/api'
import { ref,toRef } from "vue";


//接收伺服器的回傳資料

const resData = ref([])
const selected = ref('')
const weekdaydata = ref([])
var NewWeeKDayArr = ref([])
//change select do someing  (func)

GetWeather().then((res) => {
    //獲取伺服器的回傳資料
    // console.log(resData);
    const data = res.data.records.locations[0].location

    const weekdata = res.data.records.locations[0].location[0].weatherElement[0].time

    resData.value = [...data]

    weekdata.forEach(element => {
        const week = element.startTime.split(' ')[0].split('-')[2];

        NewWeeKDayArr.value.push(week)
    });
    
    // 排除重複日期
    const uniqueArr = [...new Set(NewWeeKDayArr.value)]

    weekdaydata.value = [...weekdata]


})
    .catch((error) => {
        // 失敗回傳資料
        console.log(error, '失敗');
    })


</script>