<template>
  <div>
    <!-- Back Button -->
    <div m-t="29px">
      <div @click="appStore.serviceBack()" cursor="pointer" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center">
        <div class="i-ant-design:arrow-right-outlined" w="5" h="5" m-l="2" text="primaryOp dark:primary"></div>
        <span text="xl primaryOp dark:primary">
          الرجوع
        </span>
      </div>
    </div>
    <div flex="~" m-t="10px">
      <!-- Main Section -->
      <div flex="grow">
        <!-- Icom ,Name and install -->
        <div div flex="~">
          <!-- Icon -->
          <div w="151px" h="151px" bg="primaryOp dark:primary" rounded="lg" grid="~ flow-row" class="place-items-center">
            <div :class="appStore.selectedService.icon" text="primary dark:primaryOp" w="88px" h="88px"></div>
          </div>
          <!-- Name and install -->
          <div m-r="50px" h="151px">
            <h1 text="primaryOp dark:primary 3xl" font="semibold" m-b="13px">{{ appStore.selectedService.title }}</h1>
            <span text="primaryOp dark:secondaryOp 2xl" font="light">خدمة</span>
            <div flex="~">
              <!-- Loading -->
              <div v-if="loading" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center" rounded="lg" bg="yellow">
                <div class="i-eos-icons:loading" w="5" h="5" m-l="2" text="primaryOp"></div>
              </div>
              <!-- Owned -->
              <div v-else-if="appStore.selectedService.owned" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center" rounded="lg" bg="green">
                <div class="i-ci:check-bold" w="5" h="5" m-l="2" text="primaryOp"></div>
                <span text="md primaryOp">
                  تم الشراء
                </span>
              </div>
              <!-- Not Owned -->
              <div v-else flex="~" m-t="3">
                <span flex="~" text="md primaryOp dark:primary 2xl" m-l="4">
                  <div class="i-ri:copper-coin-fill" w="32px" h="32px"></div> {{ appStore.selectedService.points > 0 ? appStore.selectedService.points : 'مجانا' }}
                </span>
                <div v-if="!appStore.selectedApp.owned">
                  <span text="primaryOp dark:primary 2xl"> يجب عليك شراء التطبيق لكي تقوم بشراء هذه الخدمة 🥰</span>
                </div>
                <div v-else @click="toggleModal()" cursor="pointer" flex="~" justify="center" w="122px" h="41px" grid="~ flow-row" class="place-items-center" rounded="lg" bg="primaryOp dark:primary">
                  <div class="i-charm:download" w="5" h="5" m-l="2" text="primary dark:primaryOp"></div>
                  <span text="md primary dark:primaryOp" cursor="pointer">
                    {{ appStore.selectedService.points > 0 ? 'تنصيب' : 'مجانا' }}
                  </span>
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
          </div>
        </div>
        <!-- Content -->
        <div m-t="31px" m-l="72px">
          <span text="primaryOp dark:secondaryOp 2xl">{{ appStore.selectedService.description }}</span>
        </div>
      </div>
    </div>
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
</script>

<style>
</style>
