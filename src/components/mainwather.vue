<template>

</template>

<script setup>
import { ref } from "vue";
import { GetWeather } from "../api/api.js";

const GetW = () => {
      GetWeather().then(res => {

      }, 
        error => {
          console.log(error);
        }
      )
    }
    // GetW();

</script>

<style>
</style>
