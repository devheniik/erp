<template> 
      <div>
        <label :for="name" class="block text-sm font-medium text-gray-700">{{label}}</label>
        <select @change="$emit('update:modelValue', $event.target.value); $emit('change')" :id="id" :name="name" class="mt-0.5 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option  v-for="option in options.options" :key="option.value" :value="option.value" :selected="modelValue == option.value">
                {{option.label}}
            </option>
        </select>
    </div>
</template>

<script setup> 
const props = defineProps({ 
    id: String,
    name: String,
    label: String, 
    options: Array,
    modelValue: String
})
const emit = defineEmits(['update:modelValue', 'change'])
</script>

<style lang="scss" scoped>
/*.p-inputtext{
    padding: 0.5rem 0.5rem;
}*/
</style>