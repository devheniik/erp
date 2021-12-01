<template>
    <div>
        <label
            :for="name"
            class="block text-sm font-medium text-gray-700 pl-1"
        >{{ label ? label : name }}</label> 
        <litepie-datepicker
            as-single
            i18n="ru"
            :options="options"
            :disableDate="true"
            :placeholder="'01.01.2022'"
            :formatter="formatter"
            :auto-apply="true"
            :modelValue="String(modelValue)"
            @update:modelValue="$emit('update:modelValue', $event)"
        />
        <label :for="id" class="block text-sm font-medium text-gray-700 sr-only">{{ label }}</label>
        <input
            :value="modelValue"
            type="text"
            :required="required"
            :name="id"
            :id="id"
            class="focus:ring-primary-500 sr-only focus:border-primary-500 block w-full rounded-none rounded-l-md pl-4 sm:text-sm border-gray-300"
        />  
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    placeholder: String,
    id: String,  
    name: String,
    label: String,
    required: Boolean, 
    modelValue: [String, Number]
})

const emit = defineEmits(['update:modelValue'])

const date = ref(props.modelValue)

const formatter = ref({
    date: 'DD.MM.YYYY',
    month: 'MMM'
})

const options = ref({
    footer: {
        apply: 'Потвердить',
        cancel: 'Отмена'
    }
})

const change = () => {
    emit('update:modelValue', date)
}


</script>

<style lang="postcss" scoped>
</style>