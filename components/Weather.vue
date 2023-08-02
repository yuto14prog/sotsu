<template>
  <div class="w-[520px] border-2 rounded-xl bg-white py-2 px-4">
    <h2 class="text-3xl underline decoration-theme-green">Osaka</h2>
    <div class="flex justify-between pt-2">
      <div>
        <p class="text-gray-500">気温</p>
        <p><span class="text-4xl">{{Math.floor(parseInt(current.temp) - 273.16)}}</span>℃</p>
      </div>
      <div>
        <p class="text-gray-500">体感温度</p>
        <p><span class="text-4xl">{{Math.floor(parseInt(current.feels_like) - 273.16)}}</span>℃</p>
      </div>
      <div>
        <p class="text-gray-500">湿度</p>
        <p><span class="text-4xl">{{parseInt(current.humidity)}}</span>%</p>
      </div>
      <img :src="`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`" class="w-[70px] object-none bg-theme-green">
    </div>
    <div class="flex justify-between pt-3 pb-2">
      <div v-for="n in 4">
        <Daily :label=labels[n-1] :icon=daily[n-1].weather[0].icon :temp=daily[n-1].temp.max />
      </div>
    </div>
  </div>
</template>

<script setup>
  const config = useRuntimeConfig();
  const lat = 34.6937
  const lon = 135.5021
  const exclude = 'minutely'
  const {data: weather} = await useFetch(
    'https://api.openweathermap.org/data/2.5/onecall',
    {query: {lat: lat, lon: lon, units: 'metrics', exclude: exclude, appid: config.public.weatherkey}}
  )
  const current = await weather.value.current
  const daily = await weather.value.daily
  const labels = ['明日','明後日','3日後','４日後']
  console.log(daily[0].temp.max);
</script>

