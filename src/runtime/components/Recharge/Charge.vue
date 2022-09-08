<template>
<div grid="~ flow-row" gap="5" class="place-content-center" align="center">
  <div w="900px" h="auto" overflow="x-hidden y-scroll">
    <!-- Header -->
    <div class="flex justify-center gap-2">
      <div v-for="(step, id, i) in stepper.steps.value" :key="id" class="">
        <button
        :class="allStepsBeforeAreValid(i) && !stepper.isBefore(id) ? 'bg-blue' : 'bg-secondary'"
          w="185px" h="15px" rounded="full" m-t="3"
          :disabled="!allStepsBeforeAreValid(i) && stepper.isBefore(id)"
          @click="stepper.goTo(id)"
        />
      </div>
    </div>
    <!-- Body -->
    <div overflow="x-hidden y-scroll" m-t="2" gap="2" flex="~ col" justify="center">
      <!-- First Step -->
      <div v-if="stepper.isCurrent('step1')">
        <!-- Types -->
        <div>
          <span text="3xl primaryOp dark:primary">أختر طريقة الدفع</span>
        </div>
        <div place="content-center" gap="2" flex="~ row" m-t="8">
          <!-- First Card -->
          <div @click="steps.step1 = 0" :class="steps.step1 === 0 ? 'ease-in-out duration-100 scale-100 bg-opacity-100 dark:bg-opacity-100' : 'ease-in-out duration-100 scale-90 bg-opacity-50 dark:bg-opacity-50'" text="primaryOp dark:primary" cursor="pointer" bg="secondary dark:secondaryOp" w="300px" h="auto" rounded="xl" p-y="4">
            <!-- Title and icon -->
            <div justify="center">
              <span text="2xl" font="bold">رصيد</span>
            </div>
            <!-- icon -->
            <div justify="center">
              <RechargeIconCreditCard w="80px" h="80px"/>
            </div>
            <!-- Description -->
            <div align="center" m-t="4" p-x="4">
              <span text="md" font="medium">الشحن عن طريق رصيد اسيا او اثير</span>
            </div>
          </div>
          <!-- Second Card -->
          <div @click="steps.step1 = 1" :class="steps.step1 === 1 ? 'ease-in-out duration-100 scale-100 bg-opacity-100 dark:bg-opacity-100' : 'ease-in-out duration-100 scale-90 bg-opacity-50 dark:bg-opacity-50'" text="primaryOp dark:primary" cursor="pointer" bg="secondary dark:secondaryOp" w="300px" h="auto" rounded="xl" p-y="4">
            <!-- Title and icon -->
            <div justify="center">
              <span text="2xl" font="bold">زين كاش</span>
            </div>
            <!-- icon -->
            <div justify="center">
              <RechargeIconZainCash w="80px" h="80px"/>
            </div>
            <!-- Description -->
            <div align="center" m-t="4" p-x="4">
              <span text="md" font="medium">استثمر بعرض ينطيك طن خدمات وبسعر خيالي</span>
            </div>
          </div>
          <!-- Third Card -->
          <div @click="steps.step1 = 2" :class="steps.step1 === 2 ? 'ease-in-out duration-100 scale-100 bg-opacity-100 dark:bg-opacity-100' : 'ease-in-out duration-100 scale-90 bg-opacity-50 dark:bg-opacity-50'" text="primaryOp dark:primary" cursor="pointer" bg="secondary dark:secondaryOp" w="300px" h="auto" rounded="xl" p-y="4">
            <!-- Title and icon -->
            <div justify="center">
              <span text="2xl" font="bold">رصيد عنب</span>
            </div>
            <!-- icon -->
            <div justify="center">
              <RechargeIconCoin w="80px" h="80px"/>
            </div>
            <!-- Description -->
            <div align="center" m-t="4" p-x="4">
              <span text="md" font="medium">اشحن نقاطك من خلال رصيد عنب</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Second Step -->
      <div v-if="stepper.isCurrent('step2')">
        <div place="content-center" gap="2" flex="~ row">
          <!-- Title and icon -->
          <div align="center" :class="steps.step1 === 0 ? 'text-black dark:text-white' : 'text-blue'">
            <div :class="steps.step1 === 0 ? 'i-fa:plane' : 'i-icomoon-free:rocket'" w="100px" h="100px"></div>
            <span text="4xl" font="bold">{{steps.step1 === 0 ? 'الاقتصادي' : 'السوبر' }}</span><br>
            <div m-t="7">
              <span text="xl" font="bold">بما انك اول مره تنزل التطبيق ف الك شهر بلوشي اجرب كلشي بي مجانا حتى لا تذب فلوسك بلاش</span><br>
            </div>
          </div>
        </div>
        <div align="start" m-t="4" text="black dark:white">
          <span text="md" font="bold"> يحتوي العرض على :</span>
          <div class="grid grid-cols-4 gap-3" m-t="4">
            <div v-for="i in steps.step1 === 0 ? 3 : 7" :key="i" gap="2" flex="~ row">
              <div class="i-akar-icons:check" w="32px" h="32px"></div>
              <span text="lg" font="semibold"> 3000 منتج يتحمل </span>
            </div>
          </div>
        </div>
      </div>
      <!-- Third Step -->
      <div v-if="stepper.isCurrent('step3')">
        <div place="content-center" gap="2" flex="~ row">
          <!-- Title and icon -->
          <div align="center" :class="steps.step1 === 0 ? 'text-black dark:text-white' : 'text-blue'">
            <div :class="steps.step1 === 0 ? 'i-fa:plane' : 'i-icomoon-free:rocket'" w="100px" h="100px"></div>
            <span text="4xl" font="bold">{{steps.step1 === 0 ? 'الاقتصادي' : 'السوبر' }}</span><br>
            <div m-t="7">
              <span text="3xl" font="bold">تفاصيل العرض</span><br>
            </div>
          </div>
        </div>
        <div align="start" m-t="4" text="black dark:white">
          <span text="xl" font="bold"> السعر : 0</span>
          <UiInput placeholder="ادخل كود الخصم" w="40"  m-y="4"/>
          <h1 text="xl" font="bold"> السعر بعد الخصم : 0</h1><br>
          <h1 text="xl" font="bold"> السعر النهائي : 0</h1><br>
          <h1 text="xl" font="bold"> نقاطك بعد الشراء : 2000</h1><br>
        </div>
        <div align="start" m-t="4" text="black dark:white">
          <span text="md" font="bold"> شروط الخدمة والبنود و التصريحات</span>
          <UiCheckBox
            m-t="3"
            v-model="steps.step3"
            :options="[
              { name: 'اوافق على شروط الخدمة', id: 1 },
            ]"
          />
        </div>
      </div>

      <div flex="~ row" gap="3" place="content-center" m-t="5">
        <UiButton @click="next" color="primary" v-if="!stepper.isLast.value && stepper.current.value.isValid()" :disabled="!stepper.current.value.isValid()" w="32">
          التالي
        </UiButton>
        <UiButton @click="confirm" color="success" v-if="stepper.isLast.value && stepper.current.value.isValid()" :disabled="!stepper.current.value.isValid()" w="32">
          اشتراك
        </UiButton>
      </div>
    </div>
    <!-- End Body -->
  </div>
</div>
</template>

<script setup lang="ts">
import { reactive } from "#imports"
import { useStepper } from '@vueuse/core'

const steps = reactive({
  step1: '',
  step2: 'done',
  step3: 0,
})
const stepper = useStepper({
  'step1': {
    title: 'Chose Plane',
    isValid: () => steps.step1 !== '',
  },
  'step2': {
    title: 'Details',
    isValid: () => steps.step2 !== '',
  },
  'step3': {
    title: 'Bill',
    isValid: () => steps.step3[0] === 1,
  },
})
console.log(steps.step3)
function next() {
  if (stepper.current.value.isValid())
    stepper.goToNext()
}
function allStepsBeforeAreValid(index: number): boolean {
  return !Array(index)
    .fill(null)
    .some((_, i) => !stepper.at(i)?.isValid())
}
</script>

<style>

</style>
