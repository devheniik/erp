<template>
    <div class=" flex justify-between items-end my-4 w-full">
        <div>
            <div>
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon class="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" class="input-icon-primary" placeholder="Поиск" />
                </div>
            </div>
        </div>

        <div class="flex items-center bg-primary-600 rounded-lg border-2 border-primary-600">
            <label class="block text-sm font-medium text-white mx-2">Филиал</label>
            <select class="select-primary">
                <option v-for="option in 10" :key="option">{{option}}</option> 
            </select>
        </div> 

        <div class="flex items-center bg-primary-600 rounded-lg border-2 border-primary-600">
            <label class="block text-sm font-medium text-white mx-2">Должность</label>
            <select class="select-primary">
                <option v-for="option in 10" :key="option">{{option}}</option> 
            </select>
        </div> 

        <div class="flex items-center bg-primary-600 rounded-lg border-2 border-primary-600">
            <label class="block text-sm font-medium text-white mx-2">Статус</label>
            <select class="select-primary">
                <option v-for="option in 10" :key="option">{{option}}</option> 
            </select>
        </div>  

        <div class="flex items-center mr-5">
            <label class="block text-sm font-medium text-gray-600 mx-2">Добавить</label>
            <button @click="change" class="btn-circle-primary">
                <PlusSmIcon class="h-6 w-6" aria-hidden="true" />
            </button>
        </div>  

        
    </div>
</template>


<script setup>
import { inject } from 'vue'

const change = inject('refChange');

</script>

<style lang="scss" scoped>

</style>