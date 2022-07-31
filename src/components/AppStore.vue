<template>
  <!-- Application -->
  <Transition>
    <UiDesktopWindow v-if="app.running" v-show="!app.minimized" :app="app">
        <AppStoreSectionsSidebar :app="app" />
        <div class="fixed h-full right-[0rem] top-[0rem] left-24 overflow-y-auto">
          <AppStoreSectionsHome :app="app" />
        </div>
      <!-- <div flex="~ col" h="full">
        <div basis="1/4" border="w-10 2" rounded="lg" p="2" m="2">
          <AppStoreTabsAds basis="1/4" :app="app" />
        </div>
      </div> -->
    </UiDesktopWindow>
  </Transition>
</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true
  }
})

///////////////////////////////
</script>