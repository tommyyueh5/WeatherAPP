<template>

    <!-- 綁Ｖmodel -->
    <div class="max-w-sm mx-auto">
        <div>地區：{{ selected }}</div>
        <select class="border my-5" v-model="selected">
            <!-- 1.v-for option 2.綁v-bind value -->
            <option disabled value="">Please select one</option>
            <option v-for="(item, i) in resData" :key="i" :value="item.locationName">{{ item.locationName }}</option>
        </select>

        <ul>
            <li class="h-10 flex justify-center items-center " v-for="(item, index) in FinWeekDay" :key="index">{{ item
            }} </li>
        </ul>
        <!-- <div v-for="(item, index) in items" :key="index"></div> -->
    </div>

    <!-- 氣溫表 -->
</template>

<script setup>

import mainwather from '@/components/mainwather.vue'
import weekdaylist from '@/components/weekdaylist.vue'
import { GetWeather } from '@/api/api'
import { ref } from "vue";


//接收伺服器的回傳資料

const resData = ref([]);
const selected = ref('');
//一週日期資料變數
const weekdaydata = ref([]);
//新的一週開始日期陣列變數
const NewWeeKStartDayArr = ref([]);
//切割日期變數
var CutStartDate = ref();
//最終一週日期變數
const FinWeekDay = ref([]);

GetWeather().then((res) => {
    //獲取伺服器的回傳資料
    // console.log(resData);

    // 地區原始資料
    const data = res.data.records.locations[0].location

    resData.value = [...data]
    // 原始日期資料
    const weekdata = res.data.records.locations[0].location[0].weatherElement[0].time
    




    weekdata.forEach(element => {
        // 切割開始時間
        CutStartDate = element.startTime.split(' ')[0].split('-')[2];
        NewWeeKStartDayArr.value.push(CutStartDate)
    });

    weekdaydata.value = [...weekdata]
    // 排除重複日期
    FinWeekDay.value = [...new Set(NewWeeKStartDayArr.value)]



})
    .catch((error) => {
        // 失敗回傳資料
        console.log(error, '失敗');
    })

</script>