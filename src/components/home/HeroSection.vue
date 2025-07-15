<script setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const featured = [
  {
    image:
      'https://images.unsplash.com/photo-1615615228002-890bb61cac6e?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Nike Shoes',
    description: "Rewriting sport's playbook for billions of athletes",
  },
  {
    image:
      'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'CoolApps',
    description: 'From mobile apps to gaming consoles',
  },
  {
    image:
      'https://images.unsplash.com/photo-1629666451094-8908989cae90?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Grumpy',
    description: 'Bringing Art to everything',
  },
]
</script>

<template>
  <!-- Slider -->
  <div class="px-4 sm:px-6 lg:px-8 py-10">
    <div
      data-hs-carousel='{
      "loadingClasses": "opacity-0"
    }'
      class="relative"
    >
      <div
        class="hs-carousel relative overflow-hidden w-full h-120 md:h-[calc(100vh-106px)] bg-gray-100 rounded-2xl dark:bg-neutral-800"
      >
        <div
          class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0"
        >
          <!-- Item -->
          <div class="hs-carousel-slide" v-for="(item, i) in featured" :key="i">
            <div
              class="h-120 md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-center bg-no-repeat"
              :class="`bg-[url('${item.image}')]`"
            >
              <div class="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                <span class="block text-white">{{ item.title }}</span>
                <span class="block text-white text-xl md:text-3xl">{{ item.description }}</span>
                <div class="mt-5">
                  <a
                    class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Read Case Studies
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- End Item -->
        </div>
      </div>

      <!-- Arrows -->
      <button
        type="button"
        class="hs-carousel-prev hs-carousel-disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-hidden focus:bg-white/20"
      >
        <span class="text-2xl" aria-hidden="true">
          <ChevronLeft :stroke-width="1" class="shrink-0 size-3.5 md:size-4" />
        </span>
        <span class="sr-only">Previous</span>
      </button>

      <button
        type="button"
        class="hs-carousel-next hs-carousel-disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-hidden focus:bg-white/20"
      >
        <span class="sr-only">Next</span>
        <span class="text-2xl" aria-hidden="true">
          <ChevronRight :stroke-width="1" class="shrink-0 size-3.5 md:size-4" />
        </span>
      </button>
      <!-- End Arrows -->
    </div>
  </div>
  <!-- End Slider -->
</template>
