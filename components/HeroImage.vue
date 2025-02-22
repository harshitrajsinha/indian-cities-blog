<template>
  <div class="relative hero-img-container">
    <NuxtImg
      class="mx-auto w-full max-h-[90vh]"
      :src="heroImg"
      format="webp"
      densities="x1"
    />
    <div class="mx-8">
      <div class="absolute bottom-8 text-white font-semibold text-[8rem]">
        {{ cityName }}
      </div>
      <div
        class="italic mx-2 absolute bottom-2 text-white font-normal text-2xl"
      >
        {{ heroTag }}
      </div>
    </div>
  </div>
</template>

<script setup>
const { cityName, heroTag, heroImg } = defineProps({
  cityName: String,
  heroTag: String,
  heroImg: String,
});
</script>

<style scoped>
.hero-img-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.342);
}
</style>
