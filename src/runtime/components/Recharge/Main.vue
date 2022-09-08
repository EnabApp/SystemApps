<template>
  <!-- Application -->
  <Transition>
    <UiDesktopWindow v-if="app.running" v-show="!app.minimized" :app="app">
      <div class="flex" bg="primary dark:primaryOp" h="full">
        <!-- sidebare -->
        <div class="flex place-content-center" w="[96px]" m-t="[36px]">
          <RechargeSidebar w="[64px]" />
        </div>
        <!-- Headet and Content  { 104px m-x } -->
        <div flex="grow" m-x="[128px]" m-t="[36px]">
          <!-- Transfers page header -->
          <RechargeTransfersHeader v-if="appRecharge.selectedTab === 1" m-b="100px"/>
          <div class="overflow-x-hidden overflow-y-scroll hide-scroll" h="cuts">
            <!-- Pages -->
            <div>
              <!-- Home Page -->
              <RechargeHome v-if="appRecharge.selectedTab === 0" />
              <!-- Transfers Page -->
              <RechargeTransfers v-if="appRecharge.selectedTab === 1" />
              <!-- Charge Page -->
              <RechargeCharge v-if="appRecharge.selectedTab === 2" />
              <!-- Gift Page -->
              <RechargeGift v-if="appRecharge.selectedTab === 3" />
            </div>
          </div>
        </div>
      </div>
    </UiDesktopWindow>
  </Transition>
</template>

<script setup>
import { useAppRecharge } from "#imports"

const props = defineProps({
  app: {
    type: Object,
    required: true,
  },
});
///////////////////////////////
const appRecharge = useAppRecharge()
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
