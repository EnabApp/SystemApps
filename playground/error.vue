<template>
  {{errors}}
  <button @click="handleError">Clear errors</button>
</template>

<script setup>
const props = defineProps({
  error: Object
})
const errors = useError()

const handleError = () => clearError({ redirect: '/' })
</script>