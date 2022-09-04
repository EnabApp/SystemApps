<template>
  <div>
    <div flex="~" grid="~ flow-row gap-120px" class="place-content-center" align="center">
      <!-- Icon with Name -->
      <div w="250px" h="92px" rounded="lg" flex="~">
        <div h="64px" w="64px" bg="primaryOp dark:primary" m="16px" rounded="lg" grid="~ flow-row" class="place-content-center">
          <div justify="items-center" class="i-ci:transfer" text="primary dark:primaryOp"  w="38px" h="32px"></div>
        </div>
        <div grid="~ flow-row" class="place-content-center" m-r="4px" align="center">
          <span text="primaryOp dark:primary xl">ستيفن مالك</span>
          <span text="primaryOp dark:primary sm" font="bold">**** **** **** 7467</span>
        </div>
      </div>
      <!-- Date -->
      <div grid="~ flow-row" class="place-content-center">
        <span text="primaryOp dark:primary 2xl">10 أبريل 2022</span>
      </div>
      <!-- State -->
      <div grid="~ flow-row" class="place-content-center" >
        <div :class="false? 'bg-green' : 'bg-red'" w="99px" h="33px" rounded="lg">
          <span text="primaryOp dark:primary sm" align="center">شراء</span>
        </div>
      </div>
      <!-- Points -->
      <div grid="~ flow-row" class="place-content-center">
        <span text="red 2xl" font="bold">298 -</span>
      </div>
    </div>
    <hr class="opacity-25" m-x="100px">
  </div>
</template>

<script setup>

</script>

<style>

</style>
