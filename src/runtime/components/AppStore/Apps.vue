<template>
  <div>
    <!-- <div m-t="25px">
      <span text="primaryOp dark:primary" align="right">التطبيقات</span>
    </div> -->
    <div m-t="90px">
      <div class="grid grid-cols-8 gap-2">
        <AppStoreAppsPackCard v-for="item in 20" :key="item" :app="app" />
        <AppStoreAppsAppCard v-for="item2 in 20" :key="item2" :app="app" />
      </div>
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

<style></style>
