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
        <div class="place-data text-xl my-4 text-justify font-normal">
          {{ list["place-info"] }}
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
const placeList = [
  {
    "place-name": "Lal Bagh: Bangalore’s Botanical Pride",
    "place-img": "/lalbagh.png",
    "place-info":
      "Lal Bagh is a botanical garden, that was established in 1760 by Hyder Ali. The garden is home to a number of rare and exotic plants, as well as a glass house that houses a collection of flowers. The garden also has a lake, which is a popular spot for picnics.",
  },
  {
    "place-name": "Bangalore Palace: Tudor-Style Elegance in India",
    "place-img": "/bangalore-palace.png",
    "place-info":
      "Bangalore Palace is a palace, that was built by the Wodeyar dynasty in 1887. The palace is built in the Tudor style of architecture, and is surrounded by a garden. The palace is open to the public, and is a popular tourist attraction.",
  },
  {
    "place-name": "Cubbon Park: A Historical Green Space",
    "place-img": "/cubbon-park.png",
    "place-info":
      "Cubbon Park, a green lung in the midst of Bangalore’s urban landscape, offers more than just scenic beauty. Established in the colonial era, it’s a living history book with statues and landmarks narrating stories of the past. The park’s diverse flora and historical structures like the Bangalore High Court and State Central Library add to its allure.",
  },
];
</script>
