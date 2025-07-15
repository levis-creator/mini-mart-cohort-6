<script setup>
import ProductItem from '../ProductItem.vue'
</script>
<template>
  <section id="featured">
    <!-- Header -->
    <div class="w-full flex justify-between">
      <h2 class="font-bold text-2xl">Featured</h2>
      <div>
        <router-link to="/listings" class="text-yellow-400 hover:underline"> See more </router-link>
      </div>
    </div>
    <!-- products -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductItem />
    </div>
  </section>
</template>
