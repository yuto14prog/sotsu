<template>
  <div class="max-w-[520px] h-[135px] border-2 rounded-xl bg-white">
    <h3>{{title}}</h3>
    <p>{{publishedAt}}</p>
    <img src="">
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    publishedAt: String,
    url: String,
    urlToImage: String,
  })
</script>