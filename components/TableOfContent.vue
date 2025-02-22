<template>
  <div
    class="toc w-[30%] my-8 sticky px-4 top-24 self-start border border-gray-300 rounded-xl bg-white pt-[0.5rem]"
  >
    <table class="w-full">
      <thead class="border-b border-gray-300 text-xl">
        <tr>
          <th class="text-start px-2 py-4 rounded-t-lg">Table of contents</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-gray-300">
          <td class="py-4 px-2 text-lg text-gray-500">
            {{ placeNames[0] }}
          </td>
        </tr>
        <tr class="border-b border-gray-300">
          <td class="py-4 px-2 text-gray-500 text-lg">
            {{ placeNames[1] }}
          </td>
        </tr>
        <tr>
          <td class="py-4 px-2 text-lg text-gray-500 text-lg">
            {{ placeNames[2] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const { placeNames } = defineProps({ placeNames: Array });
</script>
