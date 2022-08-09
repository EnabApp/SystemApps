<template>
  <div flex="~" m-t="64px">
    <!-- Right Section -->
    <div flex="grow">
      <!-- Icom ,Name and install -->
      <div flex="~">
        <!-- Icon -->
        <div w="151px" h="151px" bg="primaryOp dark:primary" rounded="lg" grid="~ flow-row" class="place-items-center">
          <div class="i-ci:check-bold" text="primary dark:primaryOp" w="88px" h="88px"></div>
        </div>
        <!-- Name and install -->
        <div m-r="50px" h="151px">
          <h1 text="primaryOp dark:primary 3xl" font="semibold" m-b="13px">{{app.title}}</h1>
          <span text="primaryOp dark:secondaryOp 2xl" font="light">تطبيق</span>
          <div flex="~">
            <div cursor="pointer" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center" rounded="lg" bg="primaryOp dark:primary">
              <div class="i-charm:download" w="5" h="5" m-l="2" text="primary dark:primaryOp"></div>
              <span text="md primary dark:primaryOp">
                {{app.points >0 ? 'تنصيب' : 'مجانا' }}
              </span>
            </div>
            <span flex="~" text="md primaryOp dark:primary 2xl" m-t="9" m-r="3">
              <div class="i-ri:copper-coin-fill" w="32px" h="32px"></div> {{app.points >0 ? app.points : 'مجانا' }}
            </span>
          </div>
        </div>
      </div>
      <!-- Content -->
      <div m-t="31px" m-l="72px">
        <span text="primaryOp dark:secondaryOp 2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni voluptate quod aperiam voluptates totam quis ea obcaecati, facilis animi tenetur accusamus est blanditiis explicabo esse iste dolor ullam aliquid nostrum.</span>
      </div>
      <!-- Extended Services -->
      <div m-t="41px">
        <span text="primaryOp dark:primary 2xl">خدمات اضافية داخل التطبيق</span>
        <!-- Service Cards -->
        <div grid="~ flow-col" w="800px" h="290px" class="overflow-x-scroll overflow-y-hidden">
          <div v-for="i in 8" :key="i" m-l="18px" cursor="pointer" m-t="11px" grid="~ flow-col" class="col-span-2 place-items-center" w="270px" h="160px" rounded="lg">
            <div grid="~ flow-row" m-r="2">
              <div
                grid="~ flow-row"
                class="place-items-center"
                rounded="md"
                bg="primaryOp dark:primary"
                w="[82px]"
                h="[82px]"
              >
                <div class="i-ci:check-bold" text="primary dark:primaryOp" w="41px" h="41px"></div>
              </div>
              <div flex="~" justify="center" m-t="9px" w="82px" h="24px" grid="~ flow-row" class="place-items-center" rounded="sm" bg="primaryOp dark:secondaryOp">
              <div class="i-charm:download" w="5" h="5" m-l="2" text="primary dark:primary"></div>
              <span text="md primary dark:primary">
                {{app.points >0 ? app.points : 'مجانا' }}
              </span>
            </div>
            </div>
            <div grid="~ flow-row" m="2" m-r="6">
              <span font="bold" text="lg primaryOp dark:primary" m-b="2">{{app.title}}</span>
              <span text="md primaryOp dark:secondaryOp" m-b="2">شرح شرح شرح شرح شرح شرح شرح شرح شرح شرح </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Left Section -->
    <div w="280px" m-b="21px">
      <span text="priamryOp dark:primary" font="bold">التطبيق متوفر في الحزم التالية :</span>
      <AppStoreAppsPackCard  m-y="4" v-for="pack in packs" :key="'pack-'+ pack.id " :app="pack" />
      <span text="priamryOp dark:primary" font="light">شراء الحزن يساعدك على توفير المال </span>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '#imports'
const appStore = useAppStore()

const app = appStore.selectedApp
const packs = appStore.getPacks
</script>

<style>

</style>
