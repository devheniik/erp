<template>
<div>
    <label v-if="!hideLabel" :for="name" class="block text-sm font-medium text-gray-700 pl-1">{{ label ? label : name }}</label
    >
    <div>
    <div class="sr-only"> 
    {{input.value}}
    </div>
      <input
        ref="input"
        :required="required"
        @input="handler($event.target.value)"
        :value="modelValue"
        :disabled="disabled"
        type="text"
        :name="name"
        :id="id"
        :class="[
          'shadow-sm block w-full sm:text-base rounded-md h-[36px]',
          required && (modelValue == 0 || !modelValue)
            ? 'border-danger-300'
            : 'border-gray-300',
          valid
            ? 'focus:ring-primary-500 focus:border-primary-500'
            : 'focus:ring-danger-500 focus:border-danger-500',
          disabled
            ? 'bg-gray-100 text-gray-400'
            : ''  
        ]"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    id: String,
    name: String,
    hideLabel: {
        type: Boolean,
        default: false
    },
    label: String,
    type: String,
    pattern: [String, JSON],
    required: Boolean,
    disabled: {
        type: Boolean,
        default: false
    },
    placeholder: String,
    modelValue: [String, Number]
})
const emit = defineEmits(['update:modelValue'])

const input = ref('input')
const valid = ref(true)

const handler = (event) => {
    if (event.length) {
        if (props.type == 'number') {
            if (/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.exec(event)) {
                console.log(event);
                emit('update:modelValue', event)
                valid.value = true
                return
            }
            input.value = 1 //props.modelValue
            valid.value = false
            return
        }
    }

    emit('update:modelValue', event)
}
</script>

<style lang="scss" scoped>
/*.p-inputtext{
    padding: 0.5rem 0.5rem;
}*/
</style>
