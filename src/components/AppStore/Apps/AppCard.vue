<template>
  <!-- App -->
  <div grid="~ flow-row" class="place-items-center" w="128px" h="160px" bg="primaryOp dark:primary" rounded="lg">
    <div
      class="i-ant-design:star-filled"
      text="primary dark:primaryOp"
      w="[55px]"
      h="[55px]"
    ></div>
    <span text="primary dark:primaryOp lg">تطبيق الحاسبة</span>
    <div w="108px" h="31px" grid="~ flow-row" class="place-items-center" rounded="lg" cursor="pointer" bg="primary dark:primaryOp">
      <span text="md primaryOp dark:primary">مجانا</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true,
  }
});
</script>

<style>

</style>
