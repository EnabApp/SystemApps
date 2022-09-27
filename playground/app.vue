<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>


<script setup>
import { useAppManager } from '#imports'
const appManager = useAppManager()
appManager.addApp({
    "name": "AppStore",
    "title": "متجر التطبيقات",
    "owned":true,
    "core":true,
    "minWidth": 450,
    "minHeight": 495,
    "maximized": true,
})

appManager.addApp({
  "name": "Recharge",
  "title": "محفظتي",
  "owned":true,
  "core":true,
  "points":1999,
  "minWidth": 300,
  "minHeight": 200,
  "maximized": true
})

appManager.addApp({
    "name": "Todo",
    "title": "مهامي",
    "icon": "i-ri-todo-fill",
    "owned":true,
    "core":true,
    "minWidth": 350,
    "minHeight": 550,
    "maximized":  false,
    "maximizable": true
})

appManager.addApp({
  "name": "Calculator",
  "title": "الحاسبة",
  "icon": "i-ic-baseline-calculate",
  "owned":true,
  "core":true,
  "minWidth": 300,
  "minHeight": 350,
  "maximizable": true
})
</script>
