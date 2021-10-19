<template>
    <div class=" flex justify-between items-center my-4 w-full"> 
        <div>
            <div>
                <div class="mt-1 relative rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <SearchIcon class="h-5 w-5 text-gray-400" />
                    </div>
                    <input v-model="data.filtersRequest.serch" type="text" class="input-icon-primary" placeholder="Поиск" />
                </div>
            </div>
        </div>

        <div class="flex items-center bg-primary-600 rounded-lg border-2 border-primary-600">
            <label class="block text-sm font-medium text-white mx-2">Филиал</label>
            <select v-model="data.filtersRequest.filial" class="select-primary">
                <option v-for="option in data.filtersResponse.filials" :key="option.value" >{{option.label}}</option> 
            </select>
        </div> 

        <div class="flex items-center bg-primary-600 text-white rounded-lg border-2 border-primary-600 w-auto px-3" style="height: 40.8px;">
            <label class="block text-sm font-medium  mx-2">Должность</label>
            <SearchIcon class="h-5 w-5" />
        </div> 

        <div class="flex items-center bg-primary-600 rounded-lg border-2 border-primary-600">
            <label class="block text-sm font-medium text-white mx-2">Статус</label>
            <select  v-model="data.filtersRequest.color" class="select-primary">
                <option v-for="option in data.filtersResponse.colors" :key="option.value" >{{option.label}}</option>  
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
import { inject, ref, watchEffect, defineEmits   } from 'vue'

const props = defineProps({
    modelValue: Object
})

const emit = defineEmits(['update:modelValue'])

const data = ref(props.modelValue)

watchEffect(() => {
  //emit('update:modelValue', data.value)
  //console.log(data.value);
})

const change = inject('refChange');
</script>

<style lang="scss" scoped>

</style>