<template> 
    <div>
        <label :for="name" class="block text-sm font-medium text-gray-700">{{label ?? name}}</label>
        <div class="mt-0.5">
            <input :required="required"  @input="$emit('update:modelValue',$event.target.value)" :value="modelValue" :disabled="disabled" :type="type" :name="name" :id="id" :class="['shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md', required && (modelValue == 0 || !modelValue) ? 'border-danger-300' : 'border-gray-300']" :placeholder="placeholder"/>
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
    required: Boolean,
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