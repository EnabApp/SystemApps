<template>
<div class="flex justify-between grid-cols-3">
  <div class="flex place-items-center">
    <UiInput placeholder="البحث عن تطبيق" icon="i-akar-icons:search" w="[484px]" />
  </div>
  <div class="flex place-items-center">
    <span text="w-90" m-l="6">الخدمات</span>
    <span text="w-90" m-l="6">التطبيقات</span>
    <span text="w-90" m-l="6">الحزم</span>
  </div>
  <div class="flex place-items-center">
    <div class="i-ri:copper-coin-fill" text="w-90" w="[32px]" h="[32px]"></div>
    <span text="w-90" m-r-3>1999</span>
  </div>
</div>
</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true,
  },
});

</script>

<style>

</style>
