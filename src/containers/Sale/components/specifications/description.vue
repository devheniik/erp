<template>
  <div v-if="!isLoad" class="bg-white shadow overflow-hidden sm:rounded-lg w-full">
      <div class="px-4 py-1.5 sm:px-6" @click="open = !open">
        <h3 class="text-lg leading-6 font-medium text-gray-900"> 
          <span class="text-gray-500 mr-2">Заказ:</span>{{ data.data.zakkode }} 
        </h3> 
      </div>
      <div class="border-t border-gray-200 px-4 py-1.5 sm:p-0 flex flex-col lg:flex-row justify-between" v-if="open">
        <dl class="sm:divide-y sm:divide-gray-200 w-full">
          <div class="py-3 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Дата заказа
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ data.data.zakdate }} 
            </dd>
          </div>
          <div class="py-3 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Срок оплаты
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ data.data.srokopl }} 
            </dd>
          </div>  
          <div class="py-3 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Резерв до
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ data.data.reservdo }} 
            </dd>
          </div> 
          <div class="py-3 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Менеджер
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ data.data.manager }} 
            </dd>
          </div>
        </dl>

        <dl class="sm:divide-y sm:divide-gray-200 w-full"> 
          <div class="py-3 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Контактёр
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ data.data.contacter }} 
            </dd>
          </div>  
          <div class="py-3 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Тип заказа
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ data.data.zakaztip }} 
            </dd>
          </div> 
          <div class="py-3 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Договор
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ data.data.contract }} 
            </dd>
          </div>  
          <div class="py-3 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Состояние
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ data.data.zakstatus }} 
            </dd>
          </div> 
        </dl>

        <dl class="sm:divide-y sm:divide-gray-200 w-full"> 
          <div class="py-3 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Закрыт
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ data.data.oplachen }} 
            </dd>
          </div>  
          <div class="py-3 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Отгружен
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ data.data.otgruven }} 
            </dd>
          </div> 
          <div class="py-3 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Оплачен
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ data.data.closed }} 
            </dd>
          </div>  
          <div class="py-3 sm:py-1.5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">
              Привезти из
            </dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ data.data.a_b8 }} 
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
    @apply whitespace-nowrap  truncate lg:text-right
}

dt{
    @apply whitespace-nowrap  truncate 
}
</style>
