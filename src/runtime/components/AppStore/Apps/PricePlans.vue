<template>
  <!-- App -->
  <div>
    <div mt="4" w="950px" h="630px" bg="secondaryOp" overflow="x-hidden y-scroll" class="hide-scroll">
      <!-- Header -->
      <div class="flex gap-2 justify-center">
        <div v-for="(step, id, i) in stepper.steps.value" :key="id" class="">
          <button
          :class="allStepsBeforeAreValid(i) && !stepper.isBefore(id) ? 'bg-blue outline-0' : 'bg-secondary outline-0'"
            w="185px" h="15px" rounded="full"
            outline="0"
            :disabled="!allStepsBeforeAreValid(i) && stepper.isBefore(id)"
            @click="stepper.goTo(id)"
          />
        </div>
      </div>
      <!-- Body -->
      <div class="flex flex-col justify-center gap-2 mt-2">
        <div>
          <div v-if="stepper.isCurrent('step1')">
            <div>
              <input id="credit-card" v-model="steps.step1" type="radio" class="mr-2" value="plan1">
              <label for="credit-card">plan 1</label>
            </div>
            <div>
              <input id="paypal" v-model="steps.step1" type="radio" class="mr-2" value="plan2">
              <label for="paypal">plan 2</label>
            </div>
          </div>

          <div v-if="stepper.isCurrent('step2')">
            <input v-model="steps.step2" type="text">
          </div>

          <div v-if="stepper.isCurrent('step3')">
            <input v-model="steps.step3" type="text">
          </div>

        </div>

        <div>
          <button @click="next" v-if="!stepper.isLast.value" :disabled="!stepper.current.value.isValid()">
            التالي
          </button>
          <button v-if="stepper.isLast.value" :disabled="!stepper.current.value.isValid()">
            اشتراك
          </button>
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
  step1: null,
  step2: null,
  step3: null,
})
const stepper = useStepper({
  'step1': {
    title: 'Chose Plane',
    isValid: () => steps.step1 !== null,
  },
  'step2': {
    title: 'Details',
    isValid: () => steps.step2 !== null,
  },
  'step3': {
    title: 'Bill',
    isValid: () => steps.step3 !== null,
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
