<template>
  <div
    class="LayoutHeader bg-secondary shadow-lg text-white z-10 fixed top-0 right-0 w-full"
  >
    <div class="container mx-auto flex justify-between items-center px-8 py-4">
      <img src="@/assets/images/logo.svg" alt="" />
      <ul class="flex gap-9 h-fit">
        <li class="text-sm border-b-2 border-primary h-full">خانه</li>
        <li class="text-sm">درمانگران‌ما</li>
        <li class="text-sm">همکاری با ما</li>
        <li class="text-sm">مقتلات</li>
        <li class="text-sm">تراپی در مزل</li>
        <li class="text-sm">فروشگاه</li>
        <li class="text-sm">تست روانشناسی</li>
        <li class="text-sm">درباره ما</li>
        <li class="text-sm">پشتیبانی</li>
      </ul>
      <button class="px-14 py-3 border border-white rounded-full text-sm">
        ورود / ثبت نام
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
ul {
  li {
    cursor: pointer;
  }
}
</style>
