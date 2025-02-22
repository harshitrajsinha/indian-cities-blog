<template>
  <div class="w-full max-w-full mx-auto">
    <HeroImage
      :cityName="capitalizedCity"
      :heroTag="cityInfo['hero-tag']"
      :heroImg="cityInfo['hero-image']"
      class="mb-8"
    />
    <section class="introduction px-[10%]">
      <p class="text-lg text-justify">
        Bangalore, now known as Bengaluru, is the capital of the Indian state of
        Karnataka. It has a population of over 10 million people and is one of
        the most populous cities in India. You can discover hotels in Bangalore
        that are couple friendly on Mistay. Bengaluru is one of the most popular
        tourist destinations in India owing to its good weather and its vast
        number of alternatives for sightseeing and you can find couple friendly
        hotels in Bangalore with MiStay.
      </p>
      <p class="text-lg text-justify">
        The city is home to a number of historical landmarks, such as the
        Bangalore Palace and the Fort of Tipu Sultan. Bengaluru is also a
        shoppers’ paradise, with a number of malls and markets. The city is also
        famous for its nightlife, with a number of bars and nightclubs. There is
        a reason Bangalore is one of India’s most popular tourist destinations,
        it has something for everyone! This cosmopolitan city is a melting pot
        of cultures, with a rich history and a vibrant present. From ancient
        temples to modern shopping malls, there is something for everyone in
        Bangalore.
      </p>
    </section>
    <div class="flex my-8 px-[10%]">
      <section class="list-of-places w-[70%]">
        <div class="font-bold text-4xl my-8">
          Best Places to Visit in {{ capitalizedCity }}
        </div>
        <PlaceList :placeList="cityInfo['place-list']" class="mx-8" />
      </section>
      <TableOfContent :placeNames="placeNames" />
    </div>
  </div>
</template>

<script setup>
const { cityName, cityInfo } = defineProps({
  cityName: String,
  cityInfo: Object,
});
const placeNames = cityInfo["place-list"].map((place) => place["place-name"]);
const capitalizedCity = cityName[0].toUpperCase() + cityName.slice(1);
</script>
