<template>
  <!-- App -->
  <div>
    <div mt="4" w="950px" h="630px" bg="secondaryOp" overflow="x-hidden y-scroll" class="hide-scroll">
      <!-- Header -->
      <div class="flex gap-2 justify-center">
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
      <div overflow="x-hidden y-scroll" m-t="2" gap="2" flex="~ col" justify="center" class="hide-scroll">
          <!-- First Step -->
          <div v-if="stepper.isCurrent('step1')">
            <div place="content-center" gap="2" flex="~ row">
              <!-- First Card -->
              <div @click="steps.step1 = 0" :class="steps.step1 === 0 ? 'ease-in-out duration-300 scale-100 border-3 border-green' : 'ease-in-out duration-300 scale-90 border-3 border-secondary'" cursor="pointer" bg="secondaryOp dark:secondary" w="300px" h="auto" rounded="xl" p-y="4">
                <!-- Title and icon -->
                <div align="center">
                  <div class="i-fa:plane" w="80px" h="80px"></div>
                  <span text="2xl" font="bold">اقتصادي</span><br>
                </div>
                <!-- Description -->
                <div align="center" m-t="4" p-x="4">
                  <span text="md" font="medium">دير مشروعك بأقل التكاليف وتكدر تزيده ليمتى متريد</span>
                </div>
                <!-- Contains -->
                <div align="start" m-t="4" p-x="4">
                  <span text="md" font="bold"> يحتوي العرض على :</span>
                  <div gap="2" flex="~ col" m-t="4">
                    <div v-for="i in 3" :key="i" gap="2" flex="~ row">
                      <div class="i-akar-icons:check" w="15px" h="15px"></div>
                      <span text="sm" font="medium"> 3000 منتج يتحمل </span>
                    </div>
                  </div>
                </div>
                <!-- Points -->
                <div flex="~ row" gap="3" place="content-center" m-t="8">
                  <div class="i-ri:copper-coin-fill" w="30px" h="30px"></div>
                  <span text="3xl" font="bold">5000</span>
                </div>
              </div>
              <!-- First Card -->
              <div text="white" @click="steps.step1 = 1" :class="steps.step1 === 1 ? 'ease-in-out duration-300 scale-100 border-3 border-green' : 'ease-in-out duration-300 scale-90 border-3 border-blue-800'" cursor="pointer" bg="blue-800 dark:blue-800" w="300px" h="auto" rounded="xl" p-y="4">
                <!-- Title and icon -->
                <div align="center">
                  <div class="i-icomoon-free:rocket" w="80px" h="80px"></div>
                  <span text="2xl" font="bold">سوبر</span><br>
                </div>
                <!-- Description -->
                <div align="center" m-t="4" p-x="4">
                  <span text="md" font="medium">استثمر بعرض ينطيك طن خدمات وبسعر خيالي</span>
                </div>
                <!-- Contains -->
                <div align="start" m-t="4" p-x="4">
                  <span text="md" font="bold"> يحتوي العرض على :</span>
                  <div gap="2" flex="~ col" m-t="4">
                    <div v-for="i in 7" :key="i" gap="2" flex="~ row">
                      <div class="i-akar-icons:check" w="15px" h="15px"></div>
                      <span text="sm" font="medium"> 3000 منتج يتحمل </span>
                    </div>
                  </div>
                </div>
                <!-- Points -->
                <div flex="~ row" gap="3" place="content-center" m-t="8">
                  <div class="i-ri:copper-coin-fill" w="30px" h="30px"></div>
                  <span text="3xl" font="bold">10000</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Second Step -->
          <div v-if="stepper.isCurrent('step2')">
            <input v-model="steps.step2" type="text">
          </div>
          <!-- Third Step -->
          <div v-if="stepper.isCurrent('step3')">
            <input v-model="steps.step3" type="text">
          </div>

        <div flex="~ row" gap="3" place="content-center">
          <UiButton @click="next" color="primary" v-if="!stepper.isLast.value && stepper.current.value.isValid()" :disabled="!stepper.current.value.isValid()" w="32">
            التالي
          </UiButton>
          <UiButton @click="next" color="success" v-if="stepper.isLast.value && stepper.current.value.isValid()" :disabled="!stepper.current.value.isValid()" w="32">
            اشتراك
          </UiButton>
        </div>
      </div>
      <!-- End Body -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore,ref,reactive } from "#imports"
import { useStepper } from '@vueuse/core'

const steps = reactive({
  step1: '',
  step2: '',
  step3: '',
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
    isValid: () => steps.step3 !== '',
  },
})
function next() {
  if (stepper.current.value.isValid())
    stepper.goToNext()
}
function allStepsBeforeAreValid(index: number): boolean {
  return !Array(index)
    .fill(null)
    .some((_, i) => !stepper.at(i)?.isValid())
}

// --------------------

const props = defineProps({
  app: {
    type: Object,
    required: true,
  },
});
const appStore = useAppStore()
</script>

<style>

</style>
