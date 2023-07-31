<template>
  <div class="max-w-[1055px]">
    <h2 class="text-3xl text-center">Pick up</h2>
    <div class="grid grid-cols-2 gap-2 mt-4">
      <div v-for="article in articles">
        <Article :title=article.title :published-at=article.publishedAt :url-to-image=article.urlToImage :to=article.url />
      </div>
    </div>
  </div>
</template>

<script setup>
  const config = useRuntimeConfig();
  const {data: news} = await useFetch(
    'https://newsapi.org/v2/top-headlines',
    {query: {country: 'jp', apiKey: config.public.newskey}},
  )
  const articles = await news.value.articles
</script>