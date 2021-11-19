<template>
  <div class="h-full w-full top-0 left-0 z-40">
    <div class="absolute w-full h-full bg-white  opacity-40">

    </div>
    <div class="flex items-center justify-center w-full  h-full z-40">
      <div class="flex items-center justify-center flex-shrink-0 text-gray-700"> 
        <CogIcon class="h-16 w-16 animate-spin" />
        <div class="flex flex-col">
          <span class="font-extrabold text-3xl text-black">EUROZOL</span>
          <span class="font-bold text-sm -mt-2 text-black">BUILD IT</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    show: Boolean
  })
</script>