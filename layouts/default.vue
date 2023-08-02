<template>
  <div class="container mx-auto">
    <Header />
    <main class="flex pt-8 justify-between">
      <News />
      <div>
        <Weather />
      </div>
    </main>
    <slot />
  </div>
</template>