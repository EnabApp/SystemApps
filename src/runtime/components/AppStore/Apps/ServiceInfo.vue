<template>
  <div>
    <!-- Back Button -->
    <div v-if="!breakpoint.twoXs">
      <div @click="appStore.serviceBack()" cursor="pointer" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center">
        <AppStoreIconBack w="5" h="5" m-l="2" text="primaryOp dark:primary"/>
        <span text="xl primaryOp dark:primary">
          الرجوع
        </span>
      </div>
    </div>
    <div flex="~" m-t="2%">
      <!-- Main Section -->
      <div flex="~ col">
        <!-- Icom ,Name and install -->
        <div div flex="~">
          <!-- Icon -->
          <div w="151px" h="151px" bg="primaryOp dark:primary" rounded="lg" grid="~ flow-row" class="place-items-center">
            <AppStoreIconApps text="primary dark:primaryOp" w="88px" h="88px"/>
          </div>
          <!-- Name and install -->
          <div m-r="50px" h="151px">
            <!-- Name -->
            <span text="primaryOp dark:primary 3xl" font="semibold" m-b="3%">
              {{ appStore.selectedService.title }}
            </span><br>
            <!-- Type -->
            <span text="primaryOp dark:primary xl" font="light">خدمة</span>
            <!-- Buttons state -->
            <div flex="~">
              <!-- Loading -->
              <div v-if="loading" flex="~" justify="center" items="center" m-t="30px" w="122px" h="41px" rounded="lg" bg="yellow">
                <AppStoreIconLoading w="5" h="5" m-l="2" text="primaryOp" />
              </div>
              <!-- Owned -->
              <div v-else-if="appStore.selectedApp.owned" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center" rounded="lg" bg="green">
                <AppStoreIconCheck w="5" h="5" m-l="2" text="primaryOp" />
                <span text="md primaryOp"> تم الشراء </span>
              </div>
              <!-- Not Owned -->
              <div v-else flex="~" m-t="3">
                <span flex="~" text="md primaryOp dark:primary 2xl" m-l="4">
                  <AppStoreIconCoin w="32px" h="32px"/> {{ appStore.selectedService.points > 0 ? appStore.selectedService.points : 'مجانا' }}
                </span>
                <div v-if="appStore.selectedApp.owned" @click="toggleModal()" cursor="pointer" flex="~" justify="center" w="122px" h="41px" grid="~ flow-row" class="place-items-center" rounded="lg" bg="primaryOp dark:primary">
                  <AppStoreIconInstall w="5" h="5" m-l="2" text="primary dark:primaryOp"/>
                  <span text="md primary dark:primaryOp" cursor="pointer">
                    {{ appStore.selectedService.points > 0 ? 'تنصيب' : 'مجانا' }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Check -->
        <div v-if="!appStore.selectedApp.owned">
          <span text="primaryOp dark:primary 2xl"> يجب عليك شراء التطبيق لكي تقوم بشراء هذه الخدمة 🥰</span>
        </div>
        <!-- Content -->
        <div m-t="31px" m-l="72px">
          <span text="primaryOp dark:secondaryOp 2xl">{{ appStore.selectedService.description }}</span>
        </div>
      </div>
    </div>
    <!-- Buy service Modal -->
    <Teleport to="body">
      <UiModal v-model="stateModal" cancel="الغاء" confirm="اشتراك" @confirm="buy()" @cancel="modalCanceled" align="center">
        <template v-slot:title>تأكيد عملية الاشتراك</template>
        <span text="primaryOp dark:primary 2xl center" m="3">هل انت متأكد من اشتراكك في الخدمة ( {{ appStore.selectedService.title }} )</span>
        <hr m="4">
        <UiButton color="primary" w="32" @click="buy()">شراء</UiButton>
      </UiModal>
    </Teleport>
  </div>
</template>

<script setup>
import { useAppStore, useAppManager, useNuxtApp, ref, useToggle } from "#imports"

const modalCanceled = () => {
  stateModal.value = false;
};
const [stateModal, toggleModal] = useToggle(false);

const appStore = useAppStore()
const appManager = useAppManager()

const loading = ref(false)

// Byu services
const buy = async () => {
  stateModal.value = false;
  const { $toast } = useNuxtApp();
  loading.value = true
  const data = await appManager.buyService(appStore.selectedService.id)
  if (data !== false)
    $toast.success(" تم الاشتراك في " + appStore.selectedService.title + " بنجاح 🥰")
  loading.value = false
  appStore.selectedService.owned = true
}

window.onpopstate = function () {
  history.go(1);
  appStore.selectedService = null
};
const breakpoint = appStore.getBreakpoints;
</script>

<style>
</style>
