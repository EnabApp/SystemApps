<template>
<!-- Back Button -->
  <div m-t="29px">
    <div @click="appStore.back(0)" cursor="pointer" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center">
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
          <h1 text="primaryOp dark:primary 3xl" font="semibold" m-b="13px">{{appStore.selectedService.title}}</h1>
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
            <div v-else flex="~">
              <div @click="toggleModal()" cursor="pointer" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center" rounded="lg" bg="primaryOp dark:primary">
                <div class="i-charm:download" w="5" h="5" m-l="2" text="primary dark:primaryOp"></div>
                <span text="md primary dark:primaryOp" cursor="pointer">
                  {{appStore.selectedService.points >0 ? 'تنصيب' : 'مجانا' }}
                </span>
              </div>
              <span flex="~" text="md primaryOp dark:primary 2xl" m-t="9" m-r="3">
                <div class="i-ri:copper-coin-fill" w="32px" h="32px"></div> {{appStore.selectedService.points >0 ? appStore.selectedService.points : 'مجانا' }}
              </span>
            </div>
            <!-- Buy service Modal -->
            <Teleport to="body">
              <UiModal v-model="stateModal" cancel="الغاء" confirm="اشتراك" @confirm="byuService()" @cancel="modalCanceled" align="center">
                <template v-slot:title>تأكيد عملية الاشتراك</template>
                <span text="primaryOp dark:primary 2xl center" m="3">هل انت متأكد من اشتراكك في  تطبيق ( {{appStore.selectedService.title}} )</span><hr m="4">
              </UiModal>
            </Teleport>
          </div>
        </div>
      </div>
      <!-- Content -->
      <div m-t="31px" m-l="72px">
        <span text="primaryOp dark:secondaryOp 2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni voluptate quod aperiam voluptates totam quis ea obcaecati, facilis animi tenetur accusamus est blanditiis explicabo esse iste dolor ullam aliquid nostrum.</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore,useSupabaseClient, useAppManager,useUser, useNuxtApp ,ref } from "#imports"

const modalCanceled = () => {
  stateModal.value = false;
};

const appStore = useAppStore()
const appManager = useAppManager()
const supabase = useSupabaseClient()
const user = useUser()


const service = ref(appStore.selectedService)
const loading = ref(false)
const [stateModal, toggleModal] = useToggle(false);

// Byu services
const byuService = async () => {
  let { data, error } = await supabase
    .rpc('buyService', {
      _service_id:appStore.selectedService.id,
      _user_id :user.value.id
    })

  if (error) console.error(error)
  else console.log(data)
}
</script>

<style>

</style>
