<template>
  <NuxtLink :to="url" target="_blank">
    <div class="w-[520px] h-[135px] border-2 rounded-xl bg-white flex p-2">
      <div class="flex flex-col content-between">
        <h3>{{title}}</h3>
        <p>{{publishedAt}}</p>
      </div>
      <img :src="urlToImage" class="w-[35%]">
    </div>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps({
    title: String,
    publishedAt: String,
    url: String,
    urlToImage: String,
  })
</script>