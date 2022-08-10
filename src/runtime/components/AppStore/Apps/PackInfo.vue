<template>
  <div flex="~" m-t="64px">
    <!-- Right Section -->
    <div flex="grow">
      <!-- Icom ,Name and install -->
      <div flex="~" m-b="3">
        <!-- Icon -->
        <div w="151px" h="151px" bg="primaryOp dark:primary" rounded="lg" grid="~ flow-row" class="place-items-center">
          <div class="i-ci:check-bold" text="primary dark:primaryOp" w="88px" h="88px"></div>
        </div>
        <!-- Name and install -->
        <div m-r="50px" h="151px">
          <h1 text="primaryOp dark:primary 3xl" font="semibold" m-b="13px">{{app.title}}</h1>
          <span text="primaryOp dark:secondaryOp 2xl" font="light">حزمة</span>
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
      <span text="primaryOp dark:primary xl" flex="~"><div class="i-emojione-monotone:exclamation-mark" w="15px" h="15px" text="warning"></div>شراس هذه الحزمة يساعدك على توفير <span text="warning xl" > 10%</span> من المال</span>
      <!-- Content -->
      <div m-t="31px" m-l="72px">
        <span text="primaryOp dark:secondaryOp 2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni voluptate quod aperiam voluptates totam quis ea obcaecati, facilis animi tenetur accusamus est blanditiis explicabo esse iste dolor ullam aliquid nostrum.</span>
      </div>
      <!-- Extended Services -->
      <div m-t="41px">
        <span text="primaryOp dark:primary 2xl">خدمات اضافية داخل التطبيق</span>
        <!-- Service Cards -->
        <div grid="~ flow-col" w="800px" h="290px" class="overflow-x-scroll overflow-y-hidden ">
          <AppStoreAppsCard v-for="i in 9" :key="i" :app="app" m-l="2" m-t="3"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const appStore = useAppStore()

const app = appStore.selectedPack
</script>

<style>

</style>
