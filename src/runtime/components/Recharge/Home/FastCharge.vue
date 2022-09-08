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
      <div
        grid="~ flow-col"
        gap="10"
        class="place-content-center"
        text="primary"
      >
        <span text="2xl primaryOp dark:primary" align="center">شحن سريع</span>
        <RechargeIconFastCharge
          text="primaryOp dark:primary"
          w="32px"
          h="32px"
        />
      </div>
    </div>
    <Teleport to="body">
      <UiModal
        v-model="stateModal"
        confirm="Save"
        @confirm="modalConfirmed"
        @cancel="modalCanceled"
      >
        <template v-slot:title>شحن سريع</template>
        <div place="content-center" flex="~ row">
          <!-- content -->
          <div grid="~ flow-row" gap="5" class="place-content-center">
            <div grid="~ flow-col" gap="5" class="place-content-center">
              <span text="2xl primaryOp dark:primary" align="center"
                >شحن سريع</span
              >
              <RechargeIconFastCharge
                text="primaryOp dark:primary"
                w="32px"
                h="32px"
              />
            </div>
            <span text="2xl primaryOp dark:primary" align="center">
              ادخل الكود الخاص برصيد عنب</span
            >
            <UiInput
              v-model="code"
              w="96"
              placeholder="ادخل الرصيد هنا"
              type="text"
            >
              <UiButton @click="charge">شحن</UiButton>
            </UiInput>
          </div>
        </div>
        <!-- Charge Stepper -->
      </UiModal>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { reactive, useToggle, ref } from "#imports";
import { useStepper } from "@vueuse/core";

const [stateModal, toggleModal] = useToggle(false);
const modalConfirmed = () => {
  console.log("Confirmed");
  stateModal.value = false;
};
const modalCanceled = () => {
  console.log("Canceled");
  stateModal.value = false;
};

const code = ref("");

const charge = () => {
  alert(" الرمز الذي ادخلته " + code.value);
  code.value = "";
};
</script>

<style></style>
