<template>
  <!-- Application -->
  <Transition>
    <UiDesktopWindow v-if="app.running" v-show="!app.minimized" :app="app">
      <div class="flex" bg="primary dark:primaryOp" h="full">
        <!-- sidebare -->
        <div class="flex place-content-center" w="[96px]" m-t="[36px]">
          <AppStoreSidebar w="[64px]" />
        </div>
        <!-- Headet and Content  { 104px m-x } -->
        <div flex="grow" m-x="[64px]" m-t="[36px]">
          <!-- Header -->
          <AppStoreHeader />
          <div class="overflow-x-hidden overflow-y-scroll hide-scroll" h="cuts">
            <!-- Pages -->
            <div v-if="appStore.selectedApp === null && appStore.selectedPack === null">
              <AppStoreHome v-if="appStore.selectedTab === 0" />
              <AppStoreApps v-if="appStore.selectedTab === 1" />
              <AppStoreMyApps v-if="appStore.selectedTab === 2" />
            </div>
            <!-- App Info Page (if click app) -->
            <AppStoreAppsCardInfo v-if="appStore.selectedApp !== null && appStore.selectedPack === null" :app="selectedApp" />
            <!-- Pack Info Page -->
            <AppStoreAppsPackInfo v-if="appStore.selectedPack !== null && appStore.selectedApp === null" :app="selectedPack"/>
          </div>
        </div>
      </div>
    </UiDesktopWindow>
  </Transition>
</template>

<script setup>
import { useAppStore , useAppManager , useSupabaseClient } from "#imports"

const appStore = useAppStore()
const appManager = useAppManager()
const supabase = useSupabaseClient()

appStore.apps = appManager.getApps
const user = supabase.auth.user()
appStore.user_id = user.id
const props = defineProps({
  app: {
    type: Object,
    required: true,
  },
});

///////////////////////////////

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
