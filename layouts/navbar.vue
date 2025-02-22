<template>
  <div>
    <header class="bg-white w-full mx-auto py-4 px-32 sticky top-0 z-10">
      <nav class="flex justify-between">
        <NuxtLink to="/">
          <Icon name="fa6-solid:house" size="2rem" style="color: black" />
        </NuxtLink>
        <ul class="flex gap-8 text-lg">
          <NuxtLink
            to="/city/mumbai"
            class="hover:border-b border-black p-1 px-2 hover:bg-gray-200 rounded-t-lg"
          >
            Mumbai
          </NuxtLink>
          <NuxtLink
            to="/city/bengaluru"
            class="hover:border-b border-black p-1 px-2 hover:bg-gray-200 rounded-t-lg"
          >
            Bengaluru
          </NuxtLink>
        </ul>
      </nav>
    </header>
    <slot />
  </div>
</template>

<style scoped>
header {
  box-shadow: 5px 5px 5px #9e9e9e;
}
</style>
