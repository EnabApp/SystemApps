<template>
  <!-- Pack -->
  <div grid="~ flow-col" class="col-span-2 place-items-center" w="280px" h="160px" rounded="lg" bg="primaryOp dark:primary">
    <div grid="~ flow-row" m-r="2">
      <div
        class="grid grid-cols-2 place-items-center"
        rounded="md"
        bg="primary dark:primaryOp"
        w="[82px]"
        h="[82px]"
      >
        <div
          v-for="item in 3" :key="item"
          class="i-ant-design:star-filled"
          text="primaryOp dark:primary"
          w="[23px]"
          h="[23px]"
        ></div>
        <span text="lg primaryOp dark:primary">+3</span>
      </div>
      <div w="82px" h="31px" m-t="3" grid="~ flow-row" class="place-items-center" rounded="md" cursor="pointer" bg="primary dark:primaryOp">
        <span text="md primaryOp dark:primary">مجانا</span>
      </div>
    </div>
    <div grid="~ flow-row" m="2">
      <span font="bold" text="lg primary dark:primaryOp" m-b="2">اسم الحزمة</span>
      <span text="md primary dark:primaryOp" m-b="2">شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح </span>
      <span font="semibold" text="md primary dark:primaryOp">3 تطبيقات</span>
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
