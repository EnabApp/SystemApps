<template>
  <div grid="~ flow-row" gap="5" class="place-content-center" align="center" py="0.5em">
    <!-- Icon and Content -->
    <div>
      <RechargeIconGift w="220px" h="220px" text="primaryOp dark:primary" />
    </div>
    <!-- Content -->
    <span text="3xl peimaryOp dark:primary" font="bold"> ارسال الهدايا </span>
    <span text="xl peimaryOp dark:primary" font="light " w="96"> يمكنك إهداء الرصيد إلى من تريد، فقط قم باختيار مقدار الهدية واكتب رقم بطاقة المهدى إليه </span>
    <!-- Points Count -->
    <div>
      <UiInput
        v-model="form.points"
        w="96"
        placeholder="عدد النقاط التي تود ارسالها"
        type="text"
      >
      </UiInput>
    </div>
    <!-- Card Number -->
    <div>
      <UiInput
        v-model="form.cardNumber"
        w="96"
        placeholder="رقم البطاقة"
        type="text"
      >
      </UiInput>
    </div>
    <div v-if="form.points && form.cardNumber">
      <UiButton w="96" @click="toggleModal">
        ارسال
      </UiButton>
    </div>
    <Teleport to="body">
      <UiConfirm v-model="stateModal" confirm="ارسال" cancel="الغاء" @cancel="modalCanceled" @confirm="confirm">
        <template v-slot:title>تأكيد عمليه الارسال</template>
        <template v-slot:description>هل انت متأكد من ارسال - {{form.points}} - نقطة الى صاحب البطاقة  - {{form.cardNumber}} - </template>
        Content
      </UiConfirm>
    </Teleport>
  </div>
</template>

<script setup>
  import { useToggle,reactive } from '#imports'

  const [stateModal, toggleModal] = useToggle(false);
  const modalConfirmed = () => {
    console.log("Confirmed");
    stateModal.value = false;
  };
  const modalCanceled = () => {
    console.log("Canceled");
    stateModal.value = false;
  };

  const form = reactive({
    cardNumber : '',
    points : null,
  })

  function confirm() {
    alert('تم ارسال الهديه لصاحب البطاقة التي تنتهي ب  ' + form.cardNumber.substr(form.cardNumber.length - 4) )
  }
</script>

<style>

</style>
