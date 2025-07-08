<script setup>
import { onMounted } from 'vue'
import Topbar from './components/TopBar.vue'

onMounted(() => {
  setTimeout(() => window.HSStaticMethods.autoInit(), 100)
})
</script>
<template>
  <Topbar />
  <h1>Hello</h1>
</template>
