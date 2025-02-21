<template>
  <div>
    <header class="bg-white w-full mx-auto py-6 px-32 sticky top-0 z-10">
      <nav class="flex justify-between">
        <NuxtLink to="/">
          <Icon name="fa6-solid:house" size="2rem" style="color: black" />
        </NuxtLink>
        <ul class="flex gap-8 text-lg">
          <NuxtLink to="/new-delhi" class="border-b border-black p-1">
            New Delhi
          </NuxtLink>
          <NuxtLink to="/mumbai" class="border-b border-black p-1">
            Mumbai
          </NuxtLink>
          <NuxtLink to="/bengaluru" class="border-b border-black p-1">
            Bengaluru
          </NuxtLink>
        </ul>
      </nav>
    </header>
    <slot />
  </div>
</template>
