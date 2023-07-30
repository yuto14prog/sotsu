<template>
  <div class="max-w-[1055px] pt-8">
    <h2 class="text-3xl text-center">Pick up</h2>
    <Article :title=wip.title :published-at=wip.publishedAt :url-to-image=wip.urlToImage />
  </div>
</template>

<script setup>
  const config = useRuntimeConfig();
  const {data: news} = await useFetch(
    'https://newsapi.org/v2/top-headlines',
    {query: {country: 'jp', apiKey: config.public.newskey}},
  )
  const articles = news.value.articles
  const wip = articles[0]
  console.log(wip);
</script>