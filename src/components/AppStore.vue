<template>
  <!-- Application -->
  <Transition>
    <UiDesktopWindow
      v-if="app.running"
      v-show="!app.minimized"
      :app="app"
    >
      <div class="flex" h="full">
        <!-- Right -->
        <div basis="4/6" border="w-10 2" rounded="lg" p="2" m="2">
          <AppStoreTabsApps basis="3/4" :app="app" />
        </div>
        <!-- Left -->
        <div basis="2/6" border="w-10 2" rounded="lg" p="2" m="2">
          <AppStoreTabsAds basis="1/4" :app="app" />
        </div>
      </div>
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