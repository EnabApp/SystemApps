<template>
  <div>
    <div>
      <div @click="appStore.back()" cursor="pointer" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center">
        <div class="i-ant-design:arrow-right-outlined" w="5" h="5" m-l="2" text="primaryOp dark:primary"></div>
        <span text="xl primaryOp dark:primary">
          الرجوع
        </span>
      </div>
    </div>
    <div flex="~" m-t="29px">
      <!-- Right Section -->
      <div flex="grow" m-t="29px">
        <!-- Icom ,Name and install -->
        <div flex="~" m-b="3">
          <!-- Icon -->
          <div w="151px" h="151px" bg="primaryOp dark:primary" rounded="lg" grid="~ flow-row" class="place-items-center">
            <div class="i-ci:check-bold" text="primary dark:primaryOp" w="88px" h="88px"></div>
          </div>
          <!-- Name and install -->
          <div m-r="50px" h="151px">
            <h1 text="primaryOp dark:primary 3xl" font="semibold" m-b="13px">{{ pack.title }}</h1>
            <span text="primaryOp dark:secondaryOp 2xl" font="light">حزمة</span>
            <div flex="~">
              <div cursor="pointer" flex="~" justify="center" m-t="30px" w="122px" h="41px" grid="~ flow-row" class="place-items-center" rounded="lg" bg="primaryOp dark:primary">
                <div class="i-charm:download" w="5" h="5" m-l="2" text="primary dark:primaryOp"></div>
                <span text="md primary dark:primaryOp">
                  {{ pack.points > 0 ? 'تنصيب' : 'مجانا' }}
                </span>
              </div>
              <span flex="~" text="md primaryOp dark:primary 2xl" m-t="9" m-r="3">
                <div class="i-ri:copper-coin-fill" w="32px" h="32px"></div> {{ pack.points > 0 ? pack.points : 'مجانا' }}
              </span>
            </div>
          </div>
        </div>
        <span text="primaryOp dark:primary xl" flex="~">
          <div class="i-emojione-monotone:exclamation-mark" w="15px" h="15px" text="warning"></div>شراس هذه الحزمة يساعدك على توفير <span text="warning xl"> {{ pack.discount }} %</span> من المال
        </span>
        <!-- Content -->
        <div m-t="31px" m-l="72px">
          <span text="primaryOp dark:secondaryOp 2xl">{{ pack.description }}</span>
        </div>
        <!-- Extended Apps -->
        <div m-t="41px">
          <span text="primaryOp dark:primary 2xl">التطبيقات داخل الحزمة</span>
          <!-- Service Cards -->
          <div grid="~ flow-col" w="800px" h="290px" class="overflow-x-scroll overflow-y-hidden ">
            <AppStoreAppsCard v-for="app in pack.apps" :key="'service-' + app.id" :app="app" m-l="2" m-t="3" w="128px" h="160px" />
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
</script>

<style>
</style>
