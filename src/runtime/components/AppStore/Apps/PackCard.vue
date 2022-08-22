<template>
  <!-- Pack -->
  <div @click="appStore.setSelectedPack(pack)" cursor="pointer" grid="~ flow-col" class="col-span-2 place-items-center" w="270px" h="160px" rounded="lg" bg="primaryOp dark:primary">
    <div grid="~ flow-row" m-r="2">
      <div
        class="grid grid-cols-2 place-items-center"
        rounded="md"
        bg="primary dark:primaryOp"
        w="[82px]"
        h="[82px]"
      >
        <div
          v-for="app in pack.apps.slice(0, 3)" :key="'app-'+ app.id "
          :class="app.icon"
          text="primaryOp dark:primary"
          w="[23px]"
          h="[23px]"
        ></div>
        <span v-if="pack.apps.length > 4" text="lg primaryOp dark:primary">+ {{pack.apps.length - 3}}</span>
      </div>
      <div w="82px" h="31px" m-t="3" grid="~ flow-row" class="place-items-center" rounded="md" bg="primary dark:primaryOp">
        <span text="md primaryOp dark:primary">{{pack.points}}</span>
      </div>
    </div>
    <div grid="~ flow-row" m="2">
      <span font="bold" text="lg primary dark:primaryOp" m-b="2">{{pack.title}}</span>
      <span text="md primary dark:primaryOp" m-b="2">{{pack.description}}</span>
      <span font="semibold" text="md primary dark:primaryOp">{{pack.apps.length}} تطبيقات</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  pack: {
    type: Object,
    required: true,
  },
});
const appStore = useAppStore()
</script>

<style>

</style>
