<template>
  <div>
    <ol class="list-decimal text-3xl font-semibold">
      <li v-for="list in placeList" class="place-list my-4">
        <span>{{ list["place-name"] }}</span
        ><span
          ><Icon
            class="mx-4"
            name="fa6-solid:location-dot"
            size="1.5rem"
            style="color: black"
        /></span>
        <NuxtImg
          class="my-8 w-[100%]"
          :src="list['place-img']"
          format="webp"
          densities="x1"
        />
        <div class="place-data text-lg my-4 text-justify font-normal">
          {{ list["place-info"] }}
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
const { placeList } = defineProps({ placeList: Array });
</script>
