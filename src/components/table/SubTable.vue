<template> 
    <div v-if="true" class="bg-white shadow overflow-hidden sm:rounded-lg w-full my-5"> 
      <!--<div class="px-4 py-1.5 sm:px-6" @click="open = !open">
        <h3 class="text-lg leading-6 font-medium text-gray-900"> 
          <span class="text-gray-500 mr-2">Заказ:</span>{{ data.data.zakkode }} 
        </h3> 
      </div>-->
      <div class=" border-gray-200 px-4 py-1.5 sm:p-0 flex flex-col lg:flex-row justify-between" v-if="open">
        <dl v-for="(dl, i) in data" :key="i" class="sm:divide-y sm:divide-gray-200 w-full">
          <div v-for="(d, i) in dl" :key="i"  class="py-3 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500 whitespace-nowrap truncate">
              {{ d.label }}
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-right"> 
              {{ d.value }} 
            </dd>
          </div> 
        </dl>   
      </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const open = ref(true)

const data = [
    [
        {
            label: 'Всего, в вал. операций',
            value: 0 
        },
        {
            label: 'Всего, в вал. операций',
            value: 0
        },
        {
            label: 'Всего, в вал. операций',
            value: 0
        },
        {
            label: 'Всего, в вал. операций',
            value: 0
        },
        {
            label: 'Всего, в вал. операций',
            value: 0 
        },
        {
            label: 'Всего, в вал. операций',
            value: 0
        },
        {
            label: 'Всего, в вал. операций',
            value: 0
        },
        {
            label: 'Всего, в вал. операций',
            value: 0
        },
        {
            label: 'Всего, в вал. операций',
            value: 0 
        },
        {
            label: 'Всего, в вал. операций',
            value: 0
        },
        {
            label: 'Всего, в вал. операций',
            value: 0
        },
        {
            label: 'Всего, в вал. операций',
            value: 0
        }
    ]
]


</script>

<style lang="scss" scoped>

</style>