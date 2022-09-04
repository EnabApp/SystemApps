<template>
  <div>
    <RechargeHomeCreditCard />
    <!-- Last Actions and Fast charge -->
    <div flex="~" justify="center" gap="71px" m-t="50px">
      <!-- Right section -->
      <div w="516px" rounded="xl">
        <!-- States -->
        <RechargeHomeStatistics />
        <!-- Fast Charge -->
        <RechargeHomeFastCharge />
        <!-- Convert -->
        <RechargeHomeConvert />
      </div>
      <!-- Left Section -->
      <RechargeHomeLastTransfers />
    </div>
  </div>
</template>

<script setup>

</script>

<style>

</style>
