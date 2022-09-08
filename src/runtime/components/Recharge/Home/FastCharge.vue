<template>
  <div w="519px" h="92px" m-t="19px">
    <div
      grid="~ flow-row"
      m-b="19px"
      bg="secondary dark:secondaryOp"
      text="primary dark:primaryOp"
      rounded="lg"
      w="519px"
      h="92px"
      cursor="pointer"
      @click="toggleModal"
    >
      <div grid="~ flow-col" gap="10" class="place-content-center" text="primary">
        <span text="2xl primaryOp dark:primary" align="center">شحن سريع</span>
        <RechargeIconTransfers text="primaryOp dark:primary" w="32px" h="32px"/>
      </div>
    </div>
    <Teleport to="body">
      <UiModal v-model="stateModal" confirm="Save" @confirm="modalConfirmed" @cancel="modalCanceled">
        <template v-slot:title>Modal Title</template>
        <!-- Charge Stepper -->
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
            <div place="content-center" gap="2" flex="~ row">
              <!-- content -->
                <span text="2xl primaryOp dark:primary" align="center">شحن سريع</span>
                <RechargeIconTransfers text="primaryOp dark:primary" w="32px" h="32px"/>
            </div>
          </div>
          <!-- Second Step -->
          <div v-if="stepper.isCurrent('step2')">
            <!-- Content -->
          </div>

          <div flex="~ row" gap="3" place="content-center" m-t="5">
            <UiButton @click="next" color="primary" v-if="!stepper.isLast.value && stepper.current.value.isValid()" :disabled="!stepper.current.value.isValid()" w="32">
              التالي
            </UiButton>
            <UiButton @click="confirm" color="success" v-if="stepper.isLast.value && stepper.current.value.isValid()" :disabled="!stepper.current.value.isValid()" w="32">
              شحن
            </UiButton>
          </div>
        </div>
        <!-- End Body -->
      </div>
        </UiModal>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
  import { reactive,useToggle } from "#imports"
  import { useStepper } from '@vueuse/core'

  const [stateModal, toggleModal] = useToggle(false);
  const modalConfirmed = () => {
    console.log("Confirmed");
    stateModal.value = false;
  };
  const modalCanceled = () => {
    console.log("Canceled");
    stateModal.value = false;
  };

  // Stepper
  const steps = reactive({
    step1: '',
    step2: '',
  })

  const stepper = useStepper({
    'step1': {
      title: 'Chose Plane',
      isValid: () => steps.step1 !== '',
    },
    'step2': {
      title: 'Details',
      isValid: () => steps.step2 !== '',
    }
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
</script>

<style>

</style>
