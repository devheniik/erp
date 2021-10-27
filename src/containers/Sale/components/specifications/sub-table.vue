
<template>
<div v-if="!isLoad" class="bg-white shadow overflow-hidden sm:rounded-lg w-full">
    <div class="px-4 py-1.5 sm:px-6" @click="open = !open">
      <h3 class="text-lg leading-6 font-medium text-gray-900"> 
        <span class="text-gray-500 mr-2">Итого:</span>{{ data.data.zakkode }} 
      </h3> 
    </div>
    <div class="border-t border-gray-200 px-4 py-1.5 sm:p-0 flex flex-col lg:flex-row justify-between" v-if="open">
      <dl class="sm:divide-y sm:divide-gray-200 w-full">
        <div class="py-1.5 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Всего 	
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ data.data.subsum }} 
          </dd>
        </div>
        <div class="py-1.5 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            НДС, 20 % 	
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ data.data.tax1sum }} 
          </dd>
        </div>  
        <div class="py-1.5 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Итого
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ data.data.totalsum }} 
          </dd>
        </div> 
        <div class="py-1.5 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Итого, в вал. баланса
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ data.data.totalsumbal }} 
          </dd>
        </div>
      </dl> 
    </div>
  </div>
</template>

<script setup>

import get from '@/hooks/get'

import { ref } from 'vue'
const props = defineProps({
    api: String
})

const open = ref(true)

const {
    data, isLoad
} = get(props.api)

</script>

<style lang="scss" scoped>
dd{ 
    @apply whitespace-nowrap  truncate text-right
}

dt{
    @apply whitespace-nowrap  truncate
}
</style>