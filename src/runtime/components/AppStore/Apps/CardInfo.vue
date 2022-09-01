<template>
<!-- Back Button -->
  <div m-t="29px">
    <div @click="appStore.back()" cursor="pointer" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center">
      <div class="i-ant-design:arrow-right-outlined" w="5" h="5" m-l="2" text="primaryOp dark:primary"></div>
      <span text="xl primaryOp dark:primary">
        الرجوع
      </span>
    </div>
  </div>
  <LazyAppStoreAppsPricePlans :app="appStore.selectedApp"/>
  <div flex="~" m-t="10px">
    <!-- Main Section -->
    <div flex="grow">
      <!-- Icom ,Name and install -->
      <div div flex="~">
        <!-- Icon -->
        <div w="151px" h="151px" bg="primaryOp dark:primary" rounded="lg" grid="~ flow-row" class="place-items-center">
          <div class="i-ci:check-bold" text="primary dark:primaryOp" w="88px" h="88px"></div>
        </div>
        <!-- Name and install -->
        <div m-r="50px" h="151px">
          <h1 text="primaryOp dark:primary 3xl" font="semibold" m-b="13px">{{appStore.selectedApp.title}}</h1>
          <span text="primaryOp dark:secondaryOp 2xl" font="light">تطبيق</span>
          <div flex="~">
            <!-- Loading -->
            <div v-if="loading" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center" rounded="lg" bg="yellow">
              <div class="i-eos-icons:loading" w="5" h="5" m-l="2" text="primaryOp"></div>
            </div>
            <!-- Owned -->
            <div v-else-if="appStore.selectedApp.owned" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center" rounded="lg" bg="green">
              <div class="i-ci:check-bold" w="5" h="5" m-l="2" text="primaryOp"></div>
              <span text="md primaryOp">
                تم الشراء
              </span>
            </div>
            <!-- Not Owned -->
            <div v-else flex="~">
              <div @click="toggleModal()" cursor="pointer" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center" rounded="lg" bg="primaryOp dark:primary">
                <div class="i-charm:download" w="5" h="5" m-l="2" text="primary dark:primaryOp"></div>
                <span text="md primary dark:primaryOp" cursor="pointer">
                  {{appStore.selectedApp.points >0 ? 'تنصيب' : 'مجانا' }}
                </span>
              </div>
              <span flex="~" text="md primaryOp dark:primary 2xl" m-t="9" m-r="3">
                <div class="i-ri:copper-coin-fill" w="32px" h="32px"></div> {{appStore.selectedApp.points >0 ? appStore.selectedApp.points : 'مجانا' }}
              </span>
            </div>
            <!-- Buy App Modal -->
            <Teleport to="body" w="950px" h="630px">
              <UiModal v-model="stateModal" cancel="الغاء" confirm="اشتراك" @confirm="buyApp(appStore.selectedApp.id)" @cancel="modalCanceled" align="center">
                <template v-slot:title>تأكيد عملية الاشتراك</template>
                <LazyAppStoreAppsPricePlans :app="appStore.selectedApp"/>
              </UiModal>
            </Teleport>
          </div>
        </div>
      </div>

      <!-- Content description -->
      <div m-t="31px" w="600px">
        <span text="primaryOp dark:secondaryOp 2xl">{{appStore.selectedApp.description}}</span>
        <span text="primaryOp dark:secondaryOp 2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptates harum corporis amet alias temporibus id dignissimos quae molestiae. Esse odit nam ipsa debitis facilis cumque omnis odio perferendis nostrum!</span>
      </div>
      <!-- Extended Services -->
      <div m-t="41px">
        <!-- Service Cards -->
        <div v-if="appStore.selectedApp.getAllServices()">
          <span text="primaryOp dark:primary 2xl" > خدمات اضافية داخل التطبيق </span>
          <div grid="~ flow-col" w="800px" h="290px" class="overflow-x-scroll overflow-y-hidden">
            <LazyAppStoreAppsServiceCard v-for="service in appStore.selectedApp.getAllServices()" :key="'service-'+service" :service="service" />
          </div>
        </div>
        <div v-else>
          <span text="primaryOp dark:primary 2xl" >لا توجد خدمات لهذا التطبيق حاليا</span>
        </div>
      </div>
    </div>
    <!-- Left Section - Packs -  -->
    <div w="280px" m-b="21px">
      <span text="priamryOp dark:primary" font="bold">التطبيق متوفر في الحزم التالية :</span>
      <AppStoreAppsPackCard  m-y="4" v-for="pack in packs" :key="'pack-'+ pack.id " :pack="pack" />
      <span text="priamryOp dark:primary" font="light">شراء الحزن يساعدك على توفير المال </span>
    </div>
  </div>
</template>

<script setup>
import { useAppStore,useSupabaseClient, useAppManager, useNuxtApp ,ref,useToggle } from "#imports"

const modalCanceled = () => {
  stateModal.value = false;
};

const appStore = useAppStore()
const appManager = useAppManager()
const supabase = useSupabaseClient()


const skeleton = ref(true)
const loading = ref(false)
const packs = ref(appStore.packs)
const [stateModal, toggleModal] = useToggle(false);

console.log(appStore.selectedApp.getAllServices())
// Buy App Function
const buyApp = async (id) => {
  stateModal.value = false;
  const { $toast } = useNuxtApp();
    loading.value = true
    const data = await appManager.buyApp(id)
    if(data !== false)
      $toast.success(" تم الاشتراك في " +appStore.selectedApp.title + " بنجاح 🥰")
    loading.value = false
    appStore.selectedApp.owned = true
};
</script>

<style>

</style>
