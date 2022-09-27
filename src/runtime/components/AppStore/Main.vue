<template>
  <!-- Application -->
  <Suspense>
    <!-- component with nested async dependencies -->
    <div ref="windowRef" flex="~" bg="primary dark:primaryOp" h="full" pt="4">
      <!-- sidebar -->
      <div v-if="!(breakpoint.twoXs || breakpoint.xs || breakpoint.sm || breakpoint.md)" flex="~" justify="center" min-w="96px">
        <AppStoreSidebar w="64px" />
      </div>
      <!-- Header and Content  { 104px m-x } -->
      <div position="relative" w="100%" mx="3" justify="center" h="full" class="border-box isolate">
        <!-- Header -->
        <AppStoreHeader />
        <!-- <span text="primary 2xl">{{appStore.getPacks}}</span> -->
        <div overflow="y-scroll" h="fit-content" class="hide-scroll absolute top-8 right-0 bottom-0 left-0 border-box">
          <!-- Pages -->
          <TransitionGroup>
            <div v-if="appStore.selectedApp === null && appStore.selectedPack === null && appStore.selectedService === null">
              <LazyAppStoreHome :breakpoints="breakpoints" v-if="appStore.selectedTab === 0" />
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
        <!-- ButtomBar -->
        <AppStoreBottomBar class="sticky bottom-0 top-280 right-0 left-0 z-2" v-if="breakpoint.twoXs || breakpoint.xs || breakpoint.sm || breakpoint.md"/>
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
import { useAppStore, useAppManager, useUser, useSupabaseClient , useUserProfile , useBreakpointWindow , watch } from "#imports"
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const appStore = useAppStore()
const appManager = useAppManager()
const supabase = useSupabaseClient()
const user = useUser()
const userProfile = useUserProfile()


onMounted(() => {
  appManager.fetchPacks()
})

// Set use_id , points , packs and apps to composable
appStore.apps = appManager.getApps
appStore.user_id = user.value.id
appStore.points = userProfile.getPoints


const props = defineProps({
  app: {
    type: Object,
    required: true,
  },
});
///////////// Breakpoints //////////////////

const windowRef = ref(null)
const breakpoints = useBreakpointWindow(windowRef)

//set breakpoints to composable
appStore.setBreakpoints(breakpoints)
watch(()=>breakpoints,(newBreakpoints)=>{
  appStore.setBreakpoints(breakpoints)
},{
  deep:true
})

const breakpoint = appStore.getBreakpoints
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
