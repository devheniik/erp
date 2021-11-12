<template>
    <div>
        <div @click="isOpen = true">
              <div>
                <label :for="name" class="block text-sm font-medium text-gray-700">{{label}}</label>
                <div class="mt-0.5 flex rounded-md shadow-sm">
                <div class="relative flex items-stretch flex-grow focus-within:z-10"> 
                    <input :value="local_label" :disabled="true" :type="type" :name="name" :id="id" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-4 sm:text-sm border-gray-300" :placeholder="placeholder" />
                </div> 
                <button v-for="(btn, i) in buttons" :key="i" @click="load(btn)" type="button" :class="[i + 1 == buttons.length ? 'rounded-r-md' : '', '-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium  text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500']">
                    <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" /> 
                </button>
                </div>
            </div>
        </div>
        <modal v-model="isOpen" width="w-10/12"> 
            <component @filter="filter($event)" @select="select($event)" :data="data" :is="'finder'"></component>
        </modal>
    </div>
    <!--[$emit('update:modelvalue', $event.uid), label = $event.values[data.label_key]]--> 
</template>

<script setup>
import { ref } from 'vue' 
import get from '@api'
import { stringifyQuery } from 'vue-router'
const props = defineProps({
    id: String,  
    value_name: String,
    label: String,
    name: String,
    buttons: Object, 
    type: String, 
    placeholder: String, 
    type: String, 
    modelValue: [String, Number]
})
const emit = defineEmits(['update:modelValue', 'change'])  

const local_label = ref(props.value_name)

const data = ref(null)

const load = async (e) => {
    data.value = await get('finder', e.params) 
}


const select = e => {  
    console.log(e)
    local_label.value = e[1] 
    emit('update:modelValue', e[0]) 
    // label.value = e
    isOpen.value = false
}

const filter = e => {  
    // emit('update:modelValue', e) 
    // label.value = e
    // isOpen.value = false
}

const isOpen = ref(false) 


</script>

<style lang="scss" scoped>
</style>