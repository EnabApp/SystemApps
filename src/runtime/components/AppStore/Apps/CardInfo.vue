<template>
  <div>
    <!-- Back Button -->
    <div v-if="!breakpoint.twoXs">
      <div @click="appStore.back()" cursor="pointer" flex="~ gap-2" justify="center" m-t="30px" w="122px" h="41px">
        <AppStoreIconBack w="5" h="5" text="primaryOp dark:primary" />
        <span text="xl primaryOp dark:primary"> الرجوع </span>
      </div>
    </div>
    <div :class="
      !(breakpoint.twoXs || breakpoint.xs || breakpoint.sm || breakpoint.md)
        ? 'flex'
        : 'flex flex-col'
    ">
      <!-- Main Section -->
      <div transition="all duration-400 ease-in-out delay-75" :class="
        !(breakpoint.twoXs || breakpoint.xs || breakpoint.sm || breakpoint.md)
          ? 'w-60%'
          : 'w-95%'
      ">
        <!-- Icom ,Name and install -->
        <div flex="~ gap-3" items="center" w="full" h="auto">
          <!-- Icon -->
          <component text="primaryOp dark:primary" transition="all duration-400 ease-in-out delay-75" w="180px" h="180px" :is="`${appStore.selectedApp.name}Icon`"></component>
          <!-- Name and install -->
          <div h="full">
            <span text="primaryOp dark:primary 3xl" font="semibold" m-b="3%">
              {{ appStore.selectedApp.title }}
            </span><br>
            <span text="primaryOp dark:primary xl" font="light">تطبيق</span>
            <div flex="~">
              <!-- Loading -->
              <div v-if="loading" flex="~" justify="center" m-t="30px" w="122px" h="41px" rounded="lg" bg="yellow">
                <AppStoreIconLoading w="5" h="5" m-l="2" text="primaryOp" />
              </div>
              <!-- Owned -->
              <div v-else-if="appStore.selectedApp.owned" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center" rounded="lg" bg="green">
                <AppStoreIconCheck w="5" h="5" m-l="2" text="primaryOp" />
                <span text="md primaryOp"> تم الشراء </span>
              </div>
              <!-- Not Owned -->
              <div v-else flex="~">
                <div @click="toggleModal()" cursor="pointer" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center" rounded="lg" bg="primaryOp dark:primary">
                  <AppStoreIconInstall w="5" h="5" m-l="2" text="primary dark:primaryOp" />
                  <span text="md primary dark:primaryOp" cursor="pointer">
                    {{ appStore.selectedApp.points > 0 ? "تنصيب" : "مجانا" }}
                  </span>
                </div>
                <span flex="~" text="md primaryOp dark:primary 2xl" m-t="9" m-r="3">
                  <AppStoreIconCoin w="32px" h="32px" m-l="2" />
                  {{
                  appStore.selectedApp.points > 0
                  ? appStore.selectedApp.points
                  : "مجانا"
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Content description -->
        <div m-t="3" :class="
          !(breakpoint.twoXs || breakpoint.xs || breakpoint.sm || breakpoint.md)
            ? 'w-70%'
            : 'w-full'
        ">
          <span text="primaryOp dark:secondaryOp 2xl">{{
          appStore.selectedApp.description
          }}</span>
          <span text="primaryOp dark:secondaryOp 2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            voluptates harum corporis amet alias temporibus id dignissimos quae
            molestiae. Esse odit nam ipsa debitis facilis cumque omnis odio
            perferendis nostrum!</span>
        </div>

        <!-- Extended Services -->
        <div m-t="6">
          <!-- Service Cards -->
          <div v-if="appStore.selectedApp.getAllServices()">
            <span text="primaryOp dark:primary 2xl">
              خدمات اضافية داخل التطبيق
            </span>
            <div grid="~ flow-col" :class="
              !(breakpoint.twoXs || breakpoint.xs || breakpoint.sm || breakpoint.md)
                ? 'w-70%'
                : 'w-100%'
            " h="auto" class="overflow-x-scroll overflow-y-hidden">
              <LazyAppStoreAppsServiceCard v-for="service in appStore.selectedApp.getAllServices()" :key="'service-' + service" :service="service" />
            </div>
          </div>
          <div v-else>
            <span text="primaryOp dark:primary 2xl">لا توجد خدمات لهذا التطبيق حاليا</span>
          </div>
        </div>
      </div>
      <!-- Left Section - Packs -  -->
      <div :class="
        !(breakpoint.twoXs || breakpoint.xs || breakpoint.sm || breakpoint.md)
          ? 'w-30%'
          : 'w-95%'
      " flex="~ col" items="center">
        <span text="priamryOp dark:primary" font="bold">التطبيق متوفر في الحزم التالية :</span>
        <AppStoreAppsPackCard m-y="4" v-for="pack in packs" :key="'pack-' + pack.id" :pack="pack" />
        <span text="priamryOp dark:primary" font="light">شراء الحزم يساعدك على توفير المال
        </span>
      </div>
    </div>
    <!-- Buy App Modal -->
    <Teleport to="body" w="950px" h="630px">
      <UiModal v-model="stateModal" @cancel="modalCanceled" align="center">
        <template v-slot:title>أختيار الخطة</template>
        <AppStorePlans :app="appStore.selectedApp" :confirm="buyApp" />
      </UiModal>
    </Teleport>
  </div>
</template>

<script setup>
import {
  useAppStore,
  useSupabaseClient,
  useAppManager,
  ref,
  useToggle,
} from "#imports";

const modalCanceled = () => {
  stateModal.value = false;
};

const appStore = useAppStore();
const appManager = useAppManager();
const supabase = useSupabaseClient();

const loading = ref(false);
const packs = ref(appStore.packs);
const [stateModal, toggleModal] = useToggle(false);

// Buy App Function
const buyApp = async () => {
  stateModal.value = false;
  loading.value = true;
  const data = await appManager.buyApp(appStore.selectedApp.id);
  if (data !== false)
    alert(" تم الاشتراك في " + appStore.selectedApp.title + " بنجاح 🥰");
  appStore.selectedApp.owned = true;
  loading.value = false;
};

window.onpopstate = function () {
  history.go(1);
  appStore.selectedService = null;
  appStore.selectedApp = null;
  appStore.selectedPack = null;
};
const breakpoint = appStore.getBreakpoints;
</script>

<style>

</style>
