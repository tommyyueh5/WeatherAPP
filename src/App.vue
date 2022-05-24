<template>

  <div id="nav">
    <div>
      <router-link to="/"> 首页 </router-link> |
      <router-link to="/about"> 关于 </router-link>
    </div>
    <router-view />
  </div>
  <h1>{{resData}}</h1>
</template>


<script setup>

import mainwather from '@/components/mainwather.vue'
import weekdaylist from '@/components/weekdaylist.vue'
import axios from 'axios'
import { reactive, ref, onMounted } from "vue";


//伺服器 與 params
const url = "opendata.cwb.gov.tw/api/v1/rest/datastore"
//接收伺服器的回傳資料

const resData = ref()
onMounted(() => {
  axios.get(`http://${url}/F-D0047-091/`,
    {
      params: {
        Authorization: 'CWB-D8B2A879-4B02-4978-99C2-40819A1F00BA',
        format: 'JSON',
        elementName: 'MinT,MaxT'
      }
    }
  ).then((res) => {
    //獲取伺服器的回傳資料
    // console.log(res);
    resData.value = res.data.records.locations[0].location[0].locationName


  })
    .catch((error) => {
      // 失敗回傳資料
      console.log(error, '失敗');
    })
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
