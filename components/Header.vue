<template>
  <header class="flex flex-nowrap flex-row justify-between pt-6">
    <div>
      <h1 v-text="$dayjs().format('MM/DD dddd')" class="text-3xl" />
    </div>
    <nav>
      <ul class="text-xl flex">
        <li class="px-1"><a class="block rounded-md px-2 py-1 hover:bg-theme-green" href="">Home</a></li>
        <li class="px-1"><a class="block rounded-md px-2 py-1 hover:bg-theme-green" href="">Headline</a></li>
        <li class="px-1"><a class="block rounded-md px-2 py-1 hover:bg-theme-green" href="">.......</a></li>
        <li class="px-1"><a class="block rounded-md px-2 py-1 hover:bg-theme-green" href="">,,,,,,,</a></li>
      </ul>
    </nav>
    <div>
      <h1 class="text-red-700">ブックマーク</h1>
    </div>
  </header>
</template>

<script>
</script>

<style scoped>
</style>