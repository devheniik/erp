<template>
    <div>
        <label
            v-if="!hideLabel" 
            class="block text-sm font-medium text-gray-700 pl-1"
        >{{ label ? label : name }}</label>
        <vue-tinymce style="height:700px;"  v-model="value" :config="{ language: 'ru' }" />

        <label :for="id" class="block text-sm font-medium text-gray-700 sr-only">{{ label }}</label>
            <input
                :value="value"
                type="text"
                hidden="true"
                :required="required"
                :name="id"
                :id="id"
                class="focus:ring-primary-500 sr-only focus:border-primary-500 block w-full rounded-none rounded-l-md pl-4 sm:text-sm border-gray-300"
            />
    </div>
</template>

<script setup>
import {ref} from 'vue'
import  VueTinymce from "@panhezeng/vue-tinymce"


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

const value = ref(props.modelValue)

</script>

<style lang="scss" scoped>
/*.p-inputtext{
    padding: 0.5rem 0.5rem;
}*/
</style>