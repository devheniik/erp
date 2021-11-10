<template> 
    <div>
        <label :for="name" class="block text-sm font-medium text-gray-700">{{label}}</label>
        <div class="mt-1">
            <input @input="$emit('update:modelValue',$event.target.value)" :value="modelValue" :disabled="disabled" :type="type" :name="name" :id="id" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" :placeholder="placeholder"/>
        </div>
    </div> 
</template>

<script setup>
import InputText  from 'primevue/inputtext' 
const props = defineProps({
    id: String,
    name: String,
    label: String,
    type: String,
    disabled: {
        type: Boolean,
        default: false
    },
    placeholder: String,
    modelValue: String,
})
const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
/*.p-inputtext{
    padding: 0.5rem 0.5rem;
}*/
</style>