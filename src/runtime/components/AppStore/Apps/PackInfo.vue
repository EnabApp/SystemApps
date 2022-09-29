<template>
  <div>
    <div v-if="!breakpoint.twoXs">
      <div @click="appStore.back()" cursor="pointer" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center">
        <AppStoreIconBack w="5" h="5" m-l="2" text="primaryOp dark:primary"/>
        <span text="xl primaryOp dark:primary">
          الرجوع
        </span>
      </div>
    </div>
    <div flex="~" m-t="3%">
      <!-- Right Section -->
      <div flex="~ col" w="95%">
        <!-- Icom ,Name and install -->
        <div flex="~" m-b="3">
          <!-- Icon -->
          <AppStoreIconSuper w="151px" h="151px" text="primaryOp dark:primary" />
          <!-- Name and install -->
          <div h="full">
            <span text="primaryOp dark:primary 3xl" font="semibold" m-b="3%">
              {{ pack.title }}
            </span><br>
            <span text="primaryOp dark:primary xl" font="light">حزمة</span>
            <!-- Button State -->
            <div flex="~">
              <!-- Loading -->
              <div v-if="loading" flex="~" justify="center" items="center" m-t="30px" w="122px" h="41px" rounded="lg" bg="yellow">
                <AppStoreIconLoading w="5" h="5" m-l="2" text="primaryOp" />
              </div>
              <!-- Owned -->
              <div v-else-if="pack.owned" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center" rounded="lg" bg="green">
                <AppStoreIconCheck w="5" h="5" m-l="2" text="primaryOp" />
                <span text="md primaryOp"> تم الشراء </span>
              </div>
              <!-- Not Owned -->
              <div v-else flex="~">
                <div @click="toggleModal()" cursor="pointer" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center" rounded="lg" bg="primaryOp dark:primary">
                  <AppStoreIconInstall w="5" h="5" m-l="2" text="primary dark:primaryOp" />
                  <span text="md primary dark:primaryOp" cursor="pointer">
                    {{ pack.points > 0 ? "تنصيب" : "مجانا" }}
                  </span>
                </div>
                <span flex="~" text="md primaryOp dark:primary 2xl" m-t="9" m-r="3">
                  <AppStoreIconCoin w="32px" h="32px" m-l="2" />
                  {{
                  pack.points > 0
                  ? pack.points
                  : "مجانا"
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <span text="primaryOp dark:primary xl" flex="~">
          <AppStoreIconExclamation w="30px" h="30px" text="warning" />
          شراء هذه الحزمة يساعدك على توفير  - {{ pack.discount }} % - من المال
        </span>
        <!-- Content -->
        <div m-t="2%">
          <span text="primaryOp dark:secondaryOp 2xl">{{ pack.description }}</span>
          <span text="primaryOp dark:secondaryOp 2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, assumenda quas? Debitis odio nulla veniam, hic omnis ipsam minima consectetur cumque natus animi reiciendis autem molestiae error quos nemo ab.</span>
        </div>

        <!-- Extended Apps -->
        <div m-t="2%">
          <!-- Service Cards -->
          <span text="primaryOp dark:primary 2xl">
            التطبيقات داخل الحزمة
          </span>
          <div m-t="6" grid="~ gap-2" place="items-center" :class="(breakpoint.twoXs || breakpoint.xs ) ? 'grid-cols-2' : (breakpoint.md || breakpoint.sm ) ? 'grid-cols-3' : breakpoint.lg ? 'grid-cols-4' : breakpoint.xl ? 'grid-cols-5' : breakpoint.twoXl ? 'grid-cols-6' : 'grid-cols-8' ">
            <AppStoreAppsCard v-for="app in pack.apps" :key="'app-' + app.id" :app="app" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '#imports'
const appStore = useAppStore()

const pack = appStore.selectedPack

window.onpopstate = function () {
  history.go(1);
  appStore.selectedService = null
  appStore.selectedApp = null
  appStore.selectedPack = null
};

const breakpoint = appStore.getBreakpoints;
</script>

<style>
</style>
