<template>
  <!-- Pack -->
  <div @click="appStore.setSelectedPack(app)" cursor="pointer" grid="~ flow-col" class="col-span-2 place-items-center" w="270px" h="160px" rounded="lg" bg="primaryOp dark:primary">
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
          :class="app.icon"
          text="primaryOp dark:primary"
          w="[23px]"
          h="[23px]"
        ></div>
        <span text="lg primaryOp dark:primary">+3</span>
      </div>
      <div w="82px" h="31px" m-t="3" grid="~ flow-row" class="place-items-center" rounded="md" bg="primary dark:primaryOp">
        <span text="md primaryOp dark:primary">{{app.points}}</span>
      </div>
    </div>
    <div grid="~ flow-row" m="2">
      <span font="bold" text="lg primary dark:primaryOp" m-b="2">{{app.title}}</span>
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
const appStore = useAppStore()
</script>

<style>

</style>
