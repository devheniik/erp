<template>
    <div class="flex"> 
        <!-- <div class="flex flex-row items-center justify-between bg-primary-500 rounded-md px-3 ">
            <label class="whitespace-nowrap pr-3 text-gray-100">{{data.label}}</label>
            <flat-pickr  class="block sm:text-sm w-full rounded-none focus:outline-none border border-primary-500" v-model="date" @change.stop="change()" ></flat-pickr>
             <CalendarIcon class="h-6 w-6 ml-3 text-gray-100" />
        </div> -->
         <!-- @change=" $emit('change')" -->
         <litepie-datepicker 
            as-single
            i18n="ru"
            :options="options"
            :disableDate="true"
            :placeholder="data.label"
            :formatter="formatter"
            :auto-apply="false"
            :modelValue="String(modelValue) ?? String(data.value_default)"
            @update:modelValue="$emit('update:modelValue', $event); $emit('change')"
        />
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

const formatter = ref({
      date: 'DD-MM-YYYY', 
    })

const options = ref({
      footer: {
        apply: 'Потвердить',
        cancel: 'Отмена'
      }
    })

const change = () => {
    emit('update:modelValue', date)
    if (props.modelValue != date.value) {
       emit('change') 
    } 
}

 



</script>

<style lang="scss" scoped>
</style>