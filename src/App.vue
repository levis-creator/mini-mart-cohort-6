<script setup>
import { onMounted } from 'vue'
import TopBar from './components/TopBar.vue'

onMounted(() => {
  setTimeout(() => window.HSStaticMethods.autoInit(), 100)
})
</script>
<template>
  <TopBar />
  <main class="px-4 md:px-6 lg:px-8">
    <RouterView />
  </main>
</template>
