<template> 
      <SwitchGroup as="div" class="flex items-center">
            <SwitchLabel as="span" class="ml-3">
                <span class="text-sm font-medium text-gray-900">{{modelValue}}</span> 
            </SwitchLabel>
            <Switch :value="modelValue" @click="$emit('update:modelValue',$event.target.value)" :class="[modelValue ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
                <span aria-hidden="true" :class="[modelValue ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
            </Switch>
            <SwitchLabel as="span" class="ml-3">
                <span class="text-sm font-medium text-gray-900">{{label}}</span> 
            </SwitchLabel>
        </SwitchGroup> 
</template>

<script setup>
import InputSwitch from 'primevue/InputSwitch'

const props = defineProps({ 
    label: String, 
    modelValue: String
})
const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
/*.p-inputtext{
    padding: 0.5rem 0.5rem;
}*/
</style>