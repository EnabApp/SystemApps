<template>
  <div flex="~" grid="~ flow-row gap-120px" class="place-content-center" align="center">
    <!-- Name -->
    <div grid="~ flow-row" class="place-content-center">
      <span text="primaryOp dark:primary 3xl">التحويلات</span>
    </div>
    <!-- Search -->
    <UiInput placeholder="اكتب الاسم او التاريخ"/>
    <!-- Incomming -->
    <div flex="~" grid="~ flow-row" class="place-content-center" m="4">
      <div class="i-akar-icons:arrow-up-right" w="25px" h="25px" text="green" m-l="2"></div><span text="primaryOp dark:primary md">المدخول الكلي 1999</span>
    </div>
    <!-- Spending -->
    <div flex="~" grid="~ flow-row" class="place-content-center" m="4">
      <div class="i-akar-icons:arrow-down-left" w="25px" h="25px" text="red" m-l="2"></div><span text="primaryOp dark:primary md">المصروف الكلي 2099</span>
    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>
