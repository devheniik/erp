<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"> 
    <div class="flex-1 flex justify-between sm:hidden">
        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
        Предыдущий
        </a>
        <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
        Следующий
        </a>
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
        <p class="text-sm text-gray-700">
            Показано с 
            <span class="font-medium">{{ pagination  }}</span>
            по
            <span class="font-medium">{{ pagination.to }}</span>
            из
            <span class="font-medium">{{ pagination.total }}</span>
            всего
        </p>
        </div>
        <div >
        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button :disabled="!(page - 1 > 0)" @click="handle(true, -1)" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">Предыдущий</span>
            <!-- Heroicon name: solid/chevron-left -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            </button>
            <!-- bg-primary-50 border-primary-500 text-primary-600  -->
            <!-- bg-white border-gray-300 text-gray-500 hover:bg-gray-50 -->
            <!-- Current: "z-10 bg-primary-50 border-primary-500 text-primary-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
            <div v-if="page - 2 > 1" @click="handle(false, 1)" aria-current="page" :class="['z-10 relative bg-white border-gray-300 text-gray-500 hover:bg-gray-50 inline-flex items-center px-4 py-2 border text-sm font-medium']">
            1
            </div>
            <div v-if="page - 2 > 2" @click="handle(false, 2)" aria-current="page" :class="['z-10 relative bg-white border-gray-300 text-gray-500 hover:bg-gray-50 inline-flex items-center px-4 py-2 border text-sm font-medium']">
            2
            </div>
            <span v-if="page - 3 > 3" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
            ...
            </span> 
            <div v-if="page - 2 > 0" @click="handle(true, -2)" aria-current="page" :class="['z-10 relative bg-white border-gray-300 text-gray-500 hover:bg-gray-50 inline-flex items-center px-4 py-2 border text-sm font-medium']">
            {{ page - 2 }}
            </div>
            <div v-if="page - 1 > 0" @click="handle(true, -1)" aria-current="page" :class="['z-10 relative bg-white border-gray-300 text-gray-500 hover:bg-gray-50 inline-flex items-center px-4 py-2 border text-sm font-medium']">
            {{ page - 1 }}
            </div>
            <div  class=" z-10 bg-primary-600 border-primary-500 text-gray-100 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
            {{ page }}
            </div> 
            <div  v-if="page + 1 < pagination.total_pages" @click="handle(true, 1)" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
            {{ page + 1 }}
            </div> 
            <span v-if="pagination.total_pages > page + 2" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
            ...
            </span> 
            <div v-if="pagination.total_pages - 1 > page" @click="handle(false, pagination.total_pages - 1)" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                {{ pagination.total_pages - 1 }}  
            </div>
            <div  v-if="pagination.total_pages > page" @click="handle(false, pagination.total_pages)" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                {{ pagination.total_pages }} 
            </div>
            <button :disabled="page + 1 > pagination.total_pages" @click="handle(true, +1)" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span class="sr-only">Следующий</span>
            <!-- Heroicon name: solid/chevron-right -->
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            </button>
        </nav>
        </div>
    </div>
    </div>

</template>

<script setup>  
 
  const emit = defineEmit(['change', 'update:page'])

const props = defineProps({
  pagination: Object,
  page: Number
})

const handle = (isIncrement, value) => { 
    if (!isIncrement) { 
        emit('update:page', value) 
    } else {
       emit('update:page', props.page + value )    
    }   
    emit('change')
}
 
 

</script>
