<template>
  <!-- Application -->
  <Suspense>
    <!-- component with nested async dependencies -->
    <div class="flex" bg="primary dark:primaryOp" h="full" pt="4">
      <!-- sidebar -->
      <div flex="~" justify="center" min-w="96px">
        <AppStoreSidebar w="[64px]" />
      </div>
      <!-- Header and Content  { 104px m-x } -->
      <div flex="grow" px="10">
        <!-- Header -->
        <AppStoreHeader />
        <div class="overflow-x-hidden overflow-y-scroll hide-scroll" h="cuts">
          <!-- Pages -->
          <TransitionGroup>
            <div
              v-if="appStore.selectedApp === null && appStore.selectedPack === null && appStore.selectedService === null">
              <LazyAppStoreHome v-if="appStore.selectedTab === 0" />
              <LazyAppStoreApps v-if="appStore.selectedTab === 1" />
              <LazyAppStoreMyApps v-if="appStore.selectedTab === 2" />
            </div>
            <!-- App Info Page (if click app) -->
            <AppStoreAppsCardInfo
              v-if="appStore.selectedApp !== null && appStore.selectedPack === null && appStore.selectedService === null"
              :app="selectedApp" key="appInfoPage" />
            <!-- Pack Info Page -->
            <AppStoreAppsPackInfo
              v-if="appStore.selectedPack !== null && appStore.selectedApp === null && appStore.selectedService === null"
              :app="selectedPack" key="packInfoPage" />
            <!-- Service Info Page -->
            <AppStoreAppsServiceInfo v-if="appStore.selectedService !== null" key="serviceInfoPage" />
          </TransitionGroup>
        </div>
      </div>
    </div>

    <!-- loading state via #fallback slot -->
    <template #fallback>
      <div place="content-center" gap="2" flex="~ row">
        <div class="i-eos-icons:loading" w="400px" h="400px" text="primaryOp"></div>
        <div text="primary dark:primaryOp">جار تحميل البيانات 😍</div>
      </div>
    </template>
  </Suspense>
</template>

<script setup>
import { useAppStore, useAppManager, useUser, useSupabaseClient } from "#imports"

const appStore = useAppStore()
const appManager = useAppManager()
const supabase = useSupabaseClient()
const user = useUser()

// Set apps to composable
appStore.apps = appManager.getApps
// Set use_id to composable
appStore.user_id = user.value.id

// Set points to composable
const { data, error } = await supabase
  .from('user_protected')
  .select('points')
  .eq('user_id', user.value.id)

  appStore.points = data[0].points

const props = defineProps({
  app: {
    type: Object,
    required: true,
  },
});

///////////////////////////////

</script>
<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scroll {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
