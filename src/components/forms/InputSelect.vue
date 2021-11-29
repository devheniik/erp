<template>
    <div>
        <label :for="name" class="block text-sm font-medium text-gray-700">{{ label ? label : name }}</label>
        <select
            :required="required"
            @change="$emit('update:modelValue', $event.target.value); $emit('change')"
            :id="id"
            :name="name"
            :class="['h-[36px] block w-full pl-3 pr-10 pt-[5px] text-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-base rounded-md', required && (modelValue == 0 || !modelValue) ? 'border-danger-300' : 'border-gray-300']"
        >
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
                :selected="modelValue == option.value"
            >{{ option.label }}</option>
        </select>
    </div>
</template>

<script setup>
const props = defineProps({
    id: String,
    name: String,
    label: String,
    required: {
        type: Boolean,
        default: false
    },
    options: [Array, Object],
    modelValue: [String, Number]
})
const emit = defineEmits(['update:modelValue', 'change'])
</script>

<style lang="scss" scoped>
/*.p-inputtext{
    padding: 0.5rem 0.5rem;
}*/
</style>