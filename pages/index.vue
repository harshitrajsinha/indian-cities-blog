<template>
  <div>
    <div class="bg-black relative py-8 min-h-screen">
      <HeroImage
        :cityName="name"
        :heroTag="tag"
        :heroImg="img"
        class="mx-auto w-[80%]"
      />
      <button
        @click="preImage"
        class="absolute top-[50%] left-[2%] translate-y-[-50%] w-fit h-fit bg-[#343434] rounded-full"
      >
        <Icon
          class="mx-4"
          name="fa6-solid:angle-left"
          size="5.5rem"
          style="color: white"
        />
      </button>
      <button
        @click="nextImage"
        class="absolute top-[50%] right-[2%] translate-y-[-50%] w-fit h-fit bg-[#343434] rounded-full"
      >
        <Icon
          class="mx-4"
          name="fa6-solid:angle-right"
          size="5.5rem"
          style="color: white"
        />
      </button>
    </div>
    <div class="mx-auto w-[80%] my-16 flex justify-evenly p-[3rem]">
      <div
        class="rounded-xl w-[30%] py-4 px-4 bg-white shadow-[1px_2px_3px_4px_#afafafb0]"
      >
        <NuxtImg
          class="rounded-lg mb-4"
          src="/mumbai-cover-image.png"
          format="webp"
          densities="x1"
        />
        <div class="text-center text-4xl mb-4">Mumbai</div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          nisi temporibus, dignissimos corrupti perferendis tempore quod aperiam
          esse quo praesentium sunt ad. Impedit, provident voluptate. Nihil enim
          officiis odit reiciendis
          <NuxtLink class="text-blue-700" to="/city/mumbai"
            >...read more</NuxtLink
          >
        </div>
      </div>
      <div
        class="rounded-xl w-[30%] py-4 px-4 bg-white shadow-[1px_2px_3px_4px_#afafafb0]"
      >
        <NuxtImg
          class="rounded-lg mb-4"
          src="/bengaluru-cover-image.png"
          format="webp"
          densities="x1"
        />
        <div class="text-center text-4xl mb-4">Bengaluru</div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          nisi temporibus, dignissimos corrupti perferendis tempore quod aperiam
          esse quo praesentium sunt ad. Impedit, provident voluptate. Nihil enim
          officiis odit reiciendis
          <NuxtLink class="text-blue-700" to="/city/bengaluru"
            >...read more</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let img = ref("/india-one.png");
const name = "India";
const tag = "Bharat";
const indiaImages = [
  "/india-one.png",
  "/india-two.png",
  "/india-three.png",
  "/india-four.png",
];
let count = ref(0);

function preImage() {
  if (count.value === 0) {
    count.value = indiaImages.length - 1;
  } else {
    count.value--;
  }
  img.value = indiaImages[count.value];
}
function nextImage() {
  if (count.value === indiaImages.length - 1) {
    count.value = 0;
  } else {
    count.value++;
  }
  img.value = indiaImages[count.value];
}
</script>
