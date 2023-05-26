<template>
  <div class="IndexBenefitsSection">
    <img src="@/assets/images/rec4.svg" alt="" class="w-full" />
    <div class="px-[15%] bg-cream pt-20 pb-28">
      <div class="border-2 rounded-xl">
        <table class="table-auto w-full">
          <thead>
            <tr class="border-b-2">
              <th class="text-start text-xl px-5 py-7" colspan="10">
                مزایای مراجعه <span class="text-primary">غیر حضوری</span> در
                مقایسه با مراجعه حضوری در کیلنیک
              </th>
              <th class="text-center text-xl px-4 py-2" colspan="1">
                غیرحضوری
              </th>
              <th class="text-center text-xl px-4 py-2" colspan="1">حضوری</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, index) in rows"
              :key="row.id"
              :class="{ 'border-b-2': index !== rows.length - 1 }"
            >
              <td
                class="text-start text-lg font-semibold px-4 py-7"
                colspan="10"
              >
                {{ row.text }}
              </td>
              <td class="text-center px-4 py-2" colspan="1">
                <img
                  :src="`/_nuxt/assets/images/${row.iconName1}.svg`"
                  class="mx-auto"
                />
              </td>
              <td class="text-center px-4 py-2" colspan="1">
                <img
                  :src="`/_nuxt/assets/images/${row.iconName2}.svg`"
                  class="mx-auto"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";

interface IRowData {
  id: number;
  text: string;
  iconName1: string;
  iconName2: string;
}

// plugins and composable variables -------------------------------

// props ----------------------------------------------------------

// data variables -------------------------------------------------
const rows: Ref<IRowData[]> = ref([
  {
    id: 0,
    text: "معرفی یک درمانگر معتبر به شما",
    iconName1: "check",
    iconName2: "check",
  },
  {
    id: 1,
    text: "چت با درمانگر  در همه زمان‌ها",
    iconName1: "check",
    iconName2: "cancel",
  },
  {
    id: 2,
    text: "تماس تلفنی با درمانگر",
    iconName1: "check",
    iconName2: "cancel",
  },
  {
    id: 3,
    text: "تماس تصویری با درمانگر",
    iconName1: "check",
    iconName2: "cancel",
  },
  { id: 4, text: "برنامه ریزی آسان", iconName1: "check", iconName2: "cancel" },
  {
    id: 5,
    text: "تغییر دادن درمانگر به راحتی",
    iconName1: "check",
    iconName2: "cancel",
  },
  { id: 6, text: "تماس اورژانسی", iconName1: "check", iconName2: "q" },
]);

// emits events ---------------------------------------------------

// lifecycle hooks ------------------------------------------------

// computed methods -----------------------------------------------

// internal events ------------------------------------------------

// watchers -------------------------------------------------------
</script>
