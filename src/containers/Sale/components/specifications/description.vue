<template>
<div class="bg-white shadow overflow-hidden sm:rounded-lg w-full">
    <div class="px-4 py-5 sm:px-6" @click="open = !open">
      <h3 class="text-lg leading-6 font-medium text-gray-900"> 
        <span class="text-gray-500 mr-2">Заказ:</span>{{ data.zakkode }} 
      </h3> 
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0 flex flex-col lg:flex-row justify-between" v-if="open">
      <dl class="sm:divide-y sm:divide-gray-200 w-full">
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Дата заказа
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ data.zakdate }} 
          </dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Срок оплаты
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ data.srokopl }} 
          </dd>
        </div>  
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Резерв до
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ data.reservdo }} 
          </dd>
        </div> 
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Менеджер
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ data.manager }} 
          </dd>
        </div>
      </dl>

      <dl class="sm:divide-y sm:divide-gray-200 w-full"> 
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Контактёр
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ data.contacter }} 
          </dd>
        </div>  
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Тип заказа
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ data.zakaztip }} 
          </dd>
        </div> 
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Договор
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ data.contract }} 
          </dd>
        </div>  
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Состояние
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ data.zakstatus }} 
          </dd>
        </div> 
      </dl>

      <dl class="sm:divide-y sm:divide-gray-200 w-full"> 
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Закрыт
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ data.oplachen }} 
          </dd>
        </div>  
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Отгружен
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ data.otgruven }} 
          </dd>
        </div> 
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Оплачен
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ data.closed }} 
          </dd>
        </div>  
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Привезти из
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ data.a_b8 }} 
          </dd>
        </div> 
      </dl>

    </div>
  </div>
</template>

<script setup>


import { ref } from 'vue'
const props = defineProps({
    data: Object
})

const open = ref(true)

</script>

<style lang="scss" scoped>
dd{ 
    @apply whitespace-nowrap  truncate
}

dt{
    @apply whitespace-nowrap  truncate
}
</style>