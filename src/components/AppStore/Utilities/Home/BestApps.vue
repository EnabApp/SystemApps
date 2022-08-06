<template>
<div>
  <div flex="~" justify="between" m-b="4">
    <span text="lg w-90" >أفضل التطبيقات</span>
    <span text="lg w-90" cursor="pointer" >مشاهدة الكل</span>
  </div>
  <div class="grid grid-cols-3 gap-9">
    <div
      v-for="app in apps.slice(0, 3)"
      :key="'app-' + app.id"
      grid="~ flow-row"
      cursor="pointer"
      p-y="2"
      bg="w-90"
      text="b-90"
      class="rounded-lg"
      w="[355px]"
    >
    <div grid="~ flow-col" justify="between">
      <div grid="~ flow-col">
        <div border="2 w-90" bg="b-90" m-r="2" w="[64px]" h="[64px]" rounded="lg" grid="~ flow-row" class="place-content-center">
          <div class="i-fluent:library-16-filled" w="[32px]" h="[32px]" text="w-90"></div>
        </div>
        <div grid="~ flow-row">
          <span text="2xl">تطبيق الحاسبة </span>
          <span text="sm">الحاسبة </span>
        </div>
      </div>
      <div grid="~ flow-row" class="place-items-end" m-l="2">
        <div bg="b-90" w="[16px]" h="[16px]" grid="~ flow-row" class="place-content-center" m-b="5" rounded="sm">
          <div class="i-ant-design:star-filled" text="yellow-400" w="[9px]" h="[9px]"></div>
        </div>
        <span text="sm w-90" b-x="25" rounded="md" b-y="5" border="2 b-90" bg="b-90">مجانا</span>
      </div>
    </div>
    </div>
  </div>
</div>
</template>

<script setup>
const props = defineProps({
  apps: {
    type: Object,
    required: true,
  },
});
</script>

<style>

</style>
