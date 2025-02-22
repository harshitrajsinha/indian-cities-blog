<template>
  <NuxtLayout>
    <CityDetails
      v-if="cityName === 'bengaluru' || cityName === 'mumbai'"
      :cityName="cityName"
      :cityInfo="placeList[cityName]"
    />
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: "navbar",
});

const placeList = {
  bengaluru: {
    "hero-tag": "Namma Bengaluru",
    "hero-image": "/bengaluru-cover-image.png",
    "place-list": [
      {
        "place-name": "Lal Bagh: Bangalore’s Botanical Pride",
        "place-img": "/lalbagh.png",
        "place-info":
          "Lal Bagh is a renowned magnificent botanical garden that lies in southern Bengaluru. Spanning across 240 acres, this mesmerizing paradise with a vivid splash of colors is home to more than 1854 varieties of plants and trees. Declared a botanical garden in 1856 during the British Empire, the iconic venue is a major tourist attraction of Bengaluru and has a rich history attached to it. Originally Lal Bagh was constructed as a private one by Hyder Ali, a famous ruler of Mysore in the year 1760. Initially, the garden had a Mughal touch to it, but as time swept by, the garden was then developed by Hyder Ali’s son Tipu Sultan. Moreover, the British and Indian specialists of horticulture also added their touch of eloquence.",
      },
      {
        "place-name": "Bangalore Palace: Tudor-Style Elegance in India",
        "place-img": "/bangalore-palace.png",
        "place-info":
          "Bengaluru Palace is in the midst of the hustle and bustle so-called electronic city of Bengaluru, Karnataka. The palace is situated between Sadashivanagar and Jayamahal. Surrounded by beautiful gardens, the palace attracts tourists in large numbers. Also, this is preferred destination for important events and cultural programs. Many cultural events and social functions, such as marriage ceremony, exhibitions, musical concerts, sports events, etc., are held in the palace grounds for the past few years. There is an amusement park, better known as Fun World, inside the palace complex. An audio tour of one-hour duration is available in seven languages: English, French, German, Italian, Spanish, Hindi and Kannada.",
      },
      {
        "place-name": "Cubbon Park: A Historical Green Space",
        "place-img": "/cubbon-park.png",
        "place-info":
          "Spread over an area of 300 acres, Cubbon Park in the city of Bangalore is a major sightseeing attraction rich in green foliage. It is a green belt region of the city and is an ideal place for nature lovers and those seeking a calm atmosphere. Having been laid down by Lord Cubbon, the park is named so in his honour. It is home to more than 6,000 trees that support a vibrant ecosystem.  Another famous attraction in the Cubbon Park is The Bangalore Aquarium, which is the second largest aquarium in India. Cubbon Park was originally spread over 100 acres, which was later extended to 300 acres.",
      },
    ],
  },
  mumbai: {
    "hero-tag": "Aamchi Mumbai",
    "hero-image": "mumbai-cover-image.png",
    "place-list": [
      {
        "place-name": "Gateway of India: Tribute to History and Architecture",
        "place-img": "/gateway-of-india-new.png",
        "place-info":
          "The Gateway of India is an arch monument built during the 20th century in Bombay, India. The monument was erected to commemorate the landing of King George V and Queen Mary at Apollo Bunder on their visit to India in 1911. Built in Indo-Saracenic style, the foundation stone for the Gateway of India was laid on 31 March 1911. The structure is an arch made of basalt, 26 metres (85 feet) high.The Gateway of India is located on the waterfront at Apollo Bunder area at the end of Chhatrapati Shivaji Marg in South Mumbai and overlooks the Arabian Sea. The monument has also been referred to as the Taj Mahal of Mumbai, and is the city’s top tourist attraction.",
      },
      {
        "place-name": "Elephanta Caves: Timeless Rock Carvings",
        "place-img": "/elephanta-caves.png",
        "place-info":
          "An hour-long ferry ride from the Gateway of India to the Elephanta Island in the Mumbai Harbour, will open you up to a hidden world of rock-cut caves robust in their carvings and boasting a legion of Shaivite sculptures. Welcome to Elephanta Caves, tucked away in a desolate island locally called Gharapuri (city of caves) 10 kilometres east of the Gateway of India. Further studies, numismatic evidence, architectural style and inscriptions have traced the cave temples to King Krishnaraja from the Kalachuri dynasty around mid-6th Century, and the Buddhist Stupas to the Hinayana Buddhists who had settled in the island around 2nd Century BCE, much before the advent of the Brahmans to Elephanta.",
      },
      {
        "place-name": "Marine Drive: Mumbai’s Majestic Seafront Boulevard",
        "place-img": "/marine-drive.png",
        "place-info":
          "Marine Drive is one of Mumbai's most iconic landmarks and a prominent tourist attraction. Located in South Mumbai, this 3.6 km long boulevard is also known as the Queen's Necklace due to its stunning nighttime view resembling a string of pearls. A lovely and scenic scene is created by the art Deco structures and palm trees lining the curved promenade. At night, Marine Drive transforms into a captivating sight with its necklace-like glow of streetlights that illuminates the promenade. The skyline of Mumbai, with its towering skyscrapers and shimmering lights, adds to the enchanting atmosphere. In addition to its scenic beauty and recreational offerings, Marine Drive holds historical significance.",
      },
    ],
  },
};

const route = useRoute();
const cityName = route.params.city;
if (!(cityName === "bengaluru" || cityName === "mumbai")) {
  showError({ statusCode: 404, statusMessage: "City not found" });
}
</script>
