<template>
  <!-- Application -->
  <Transition>
    <UiDesktopWindow v-if="app.running" v-show="!app.minimized" :app="app">
      <div class="flex bg-b-90" h="full">
        <!-- sidebare -->
        <div class="flex place-content-center" w="[96px]" m-t="[36px]">
          <AppStoreSectionsSidebar :app="app" w="[64px]" />
        </div>
        <!-- Headet and Content  { 104px m-x } -->
        <div flex="grow" m-x="[64px]" m-t="[36px]">
          <AppStoreSectionsHeader :app="app" />
          <div class="overflow-x-hidden overflow-y-scroll">
            <AppStoreSectionsHome :app="app" />
          </div>
        </div>
      </div>
    </UiDesktopWindow>
  </Transition>
</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true,
  },
});

///////////////////////////////
</script>
<style scoped>
/* -ms-overflow-style: none; */
</style>
