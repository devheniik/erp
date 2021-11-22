<template> 
    <div v-if="true" class="bg-white shadow overflow-hidden sm:rounded-lg w-full my-5"> 
      <!--<div class="px-4 py-1.5 sm:px-6" @click="open = !open">
        <h3 class="text-lg leading-6 font-medium text-gray-900"> 
          <span class="text-gray-500 mr-2">Заказ:</span>{{ data.data.zakkode }} 
        </h3> 
      </div>-->
      <div class=" border-gray-200 px-4 py-1.5 sm:p-0 flex flex-col lg:flex-row justify-between">
        <dl v-for="(dl, i) in data" :key="i" class="sm:divide-y sm:divide-gray-200 w-full">
          <div v-for="(d, i) in dl" :key="i"  class="py-3 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500 whitespace-nowrap truncate">
              {{ d ?? " " }}
            </dt> 
          </div> 
        </dl>   
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
  data: Array
})


</script>

<style lang="scss" scoped>

</style>