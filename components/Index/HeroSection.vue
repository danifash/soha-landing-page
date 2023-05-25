<template>
  <div class="HeroSection relative">
    <div class="bg-secondary">
      <div class="container mx-auto text-center">
        <h1 class="pt-44 text-[30px] text-white font-black">
          تو لایق یک زندگی شاد هستی
        </h1>
        <h2 class="mt-5 text-white text-xl">به چه نوع تراپی احتیاج داری؟</h2>
        <div class="mt-11 flex justify-center gap-8 pb-10">
          <div
            v-for="item in cardsData"
            :key="item.id"
            :class="`rounded-2xl w-80 h-56 flex justify-end p-5 relative ${item.bgColor}`"
          >
            <img
              :src="`/_nuxt/assets/images/${item.imageName}.svg`"
              alt=""
              class="absolute bottom-5 right-5"
            />
            <div class="flex flex-col items-end">
              <h3 class="text-white mb-2">{{ item.title }}</h3>
              <img
                src="@/assets/images/arrow_circle_right.svg"
                alt=""
                class="flex-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="@/assets/images/rec1.svg" alt="" class="w-full" />
    <img
      src="@/assets/images/rec2.svg"
      alt=""
      class="absolute bottom-0 left-[6%]"
    />
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";

interface ICardData {
  id: number;
  title: string;
  imageName: string;
  bgColor: string;
}

// plugins and composable variables -------------------------------

// props ----------------------------------------------------------

// data variables -------------------------------------------------
const cardsData: Ref<ICardData[]> = ref([
  {
    id: 0,
    title: "کودک و نوجوان",
    imageName: "vector3",
    bgColor: "bg-orange",
  },
  { id: 1, title: "زوج تراپی", imageName: "vector2", bgColor: "bg-blue" },
  {
    id: 3,
    title: "مشاوره فردی",
    imageName: "vector1",
    bgColor: "bg-green",
  },
]);

// emits events ---------------------------------------------------

// lifecycle hooks ------------------------------------------------

// computed methods -----------------------------------------------

// internal events ------------------------------------------------

// watchers -------------------------------------------------------
</script>
