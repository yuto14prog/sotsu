<template>
  <div>
    <p>{{label}}</p>
    <img :src="`https://openweathermap.org/img/wn/${icon}@2x.png`" class="w-[70px] object-none bg-theme-green">
    <p class="text-center bg-theme-green">{{Math.floor(parseInt(temp) - 273.16)}}℃</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    label: String,
    icon: String,
    temp: Number,
  })
</script>