<template>
    <div> 
        <div class="flex flex-row items-center justify-between bg-primary-500 rounded-md px-3 text-gray-100">
            <label>{{data.label}}</label>
            <flat-pickr  class="block sm:text-sm w-full rounded-none focus:outline-none border-1 border-primary-500" v-model="date" @change.stop="change()" ></flat-pickr>
             <CalendarIcon class="h-6 w-6" />
        </div>
         <!-- @change=" $emit('change')" -->
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    data: Object,
    modelValue: [String, Number]
})

const emit = defineEmits(['update:modelValue', 'change'])

const date = ref(props.modelValue)

const change = () => {
    emit('update:modelValue', date)
    if (props.modelValue != date.value) {
       emit('change') 
    } 
}

 



</script>

<style lang="scss" scoped>
</style>