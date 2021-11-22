<template> 
    <div v-if="true" class="bg-white shadow overflow-hidden sm:rounded-lg w-[98%] my-5 px-5"> 
      <!--<div class="px-4 py-1.5 sm:px-6" @click="open = !open">
        <h3 class="text-lg leading-6 font-medium text-gray-900"> 
          <span class="text-gray-500 mr-2">Заказ:</span>{{ data.data.zakkode }} 
        </h3> 
      </div>-->
      <div class=" border-gray-200 px-4 py-1.5 sm:p-0 flex flex-col lg:flex-row justify-between w-full">
        <div class="flex flex-col w-full">
          <div v-for="(dl, i) in data" :key="i" class="flex flex-col divide-y-2 py-1">
            <div class="flex flex-row justify-between w-full">
              <div v-for="(d, j) in dl" :key="j"  class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-right"> 
                {{ d }} 
              </div>
            </div> 
          </div>  
        </div> 
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