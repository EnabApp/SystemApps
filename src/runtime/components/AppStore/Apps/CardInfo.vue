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
            <Teleport to="body">
              <UiModal v-model="stateModal" cancel="الغاء" confirm="اشتراك" @confirm="buyApp(appStore.selectedApp.id)" @cancel="modalCanceled" align="center">
                <template v-slot:title>تأكيد عملية الاشتراك</template>
                <span text="primaryOp dark:primary 2xl center" m="3">هل انت متأكد من اشتراكك في  تطبيق ( {{appStore.selectedApp.title}} )</span><hr m="4">
              </UiModal>
            </Teleport>
          </div>
        </div>
      </div>
      <!-- Content description -->
      <div m-t="31px" m-l="72px">
        <span text="primaryOp dark:secondaryOp 2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni voluptate quod aperiam voluptates totam quis ea obcaecati, facilis animi tenetur accusamus est blanditiis explicabo esse iste dolor ullam aliquid nostrum.</span>
      </div>
      <!-- Extended Services -->
      <div m-t="41px">
        <span text="primaryOp dark:primary 2xl">خدمات اضافية داخل التطبيق</span>
        <!-- Service Cards -->
        <div v-if="skeleton">
          <div class="animate-pulse flex space-x-4" bg="slate-500" rounded="lg" m="4" w="270px" h="160px">
            <div class="rounded-full bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <div v-else grid="~ flow-col" w="800px" h="290px" class="overflow-x-scroll overflow-y-hidden">
          <LazyAppStoreAppsServiceCard v-for="service in apps_services" :key="'service-'+service" :service="service" />
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
import { useAppStore,useSupabaseClient, useAppManager, useNuxtApp ,ref } from "#imports"

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

console.log('before' + skeleton.value)

const apps_services = ref(null)
onMounted( async () => {
  apps_services.value = await appStore.servicesApp(appStore.selectedApp.id)

  if(apps_services !== null) skeleton.value = false
})

console.log(apps_services)
console.log('after' + skeleton.value)

// Buy App Function
const buyApp = async (id) => {
  stateModal.value = false;
  const { $toast } = useNuxtApp();
  try {
    loading.value = true
      const data = await appManager.buyApp(id)
      if(data !== false) $toast.success(" تم الاشتراك في " +appStore.selectedApp.title + " بنجاح 🥰")
    }finally {
      loading.value = false
    const newApp = await appManager.getApp(id)
    appStore.setSelectedApp(newApp)
    console.log("after")
    }
};

// Byu services
const byuService = async (user_id , service_id) => {
  let { data, error } = await supabase
    .rpc('buyService', {
      service_id,
      user_id
    })

  if (error) console.error(error)
  else console.log(data)
}
</script>

<style>

</style>
