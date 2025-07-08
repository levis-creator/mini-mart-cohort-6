<script setup>
import { onMounted } from 'vue'
import TopBar from './components/TopBar.vue'

onMounted(() => {
  setTimeout(() => window.HSStaticMethods.autoInit(), 100)
})
</script>
<template>
  <TopBar />
  <h1>Hello</h1>
</template>
