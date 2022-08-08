<template>
  <!-- Application -->
  <Transition>
    <UiDesktopWindow v-if="app.running" v-show="!app.minimized" :app="app">
      <div class="flex" bg="primary dark:primaryOp" h="full">
        <!-- sidebare -->
        <div class="flex place-content-center" w="[96px]" m-t="[36px]">
          <AppStoreSidebar :app="app" w="[64px]" />
        </div>
        <!-- Headet and Content  { 104px m-x } -->
        <div flex="grow" m-x="[64px]" m-t="[36px]">
          <!-- Header -->
          <AppStoreHeader :app="app" />
          <div class="overflow-x-hidden overflow-y-scroll hide-scroll" h="cuts">
            <!-- Pages -->
            <div v-if="appStore.selectedApp === null">
              <AppStoreHome v-if="appStore.selectedTab === 0" />
              <AppStoreApps v-if="appStore.selectedTab === 1" />
            </div>
            <!-- App Info Page (if click app) -->
            <AppStoreAppsCardInfo v-else :app="selectedApp" />
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
const appStore = useAppStore()
</script>
<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scroll::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scroll {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
