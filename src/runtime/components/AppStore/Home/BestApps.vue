<template>
<div>
  <div flex="~" justify="between" m-b="4">
    <span text="lg primaryOp dark:primary" >أفضل التطبيقات</span>
    <span text="lg primaryOp dark:primary" cursor="pointer" >مشاهدة الكل</span>
  </div>
  <div class="grid grid-cols-3 gap-9">
    <div
      v-for="app in apps.slice(0, 3)"
      :key="'app-' + app.id"
      grid="~ flow-row"
      p-y="2"
      bg="primaryOp dark:primary"
      text="primary dark:primaryOp"
      class="rounded-lg"
      w="[355px]"
    >
    <div grid="~ flow-col" justify="between">
      <div grid="~ flow-col">
        <div m-l="2" border="primary dark:primaryOp" bg="primary dark:primaryOp" m-r="2" w="[64px]" h="[64px]" rounded="lg" grid="~ flow-row" class="place-content-center">
          <div class="i-fluent:library-16-filled" w="[32px]" h="[32px]" text="primaryOp dark:primary"></div>
        </div>
        <div grid="~ flow-row">
          <span text="2xl">{{app.title}}</span>
          <span text="sm">{{app.title}} </span>
        </div>
      </div>
      <div grid="~ flow-row" class="place-items-end" m-l="2">
        <div bg="primary dark:primaryOp" w="[16px]" h="[16px]" grid="~ flow-row" class="place-content-center" m-b="5" rounded="sm">
          <div class="i-ant-design:star-filled" text="warning" w="[9px]" h="[9px]"></div>
        </div>
        <span text="sm primaryOp dark:primary" b-x="25" rounded="md" b-y="5" cursor="pointer" border="2 primary dark:primaryOp" bg="primary dark:primaryOp">مجانا</span>
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
