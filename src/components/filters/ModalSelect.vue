<template>
    <div>
        <div @click="isOpen = true">
            <div v-if="!custom"
                class="flex items-center justify-between bg-primary-300 text-gray-700 rounded-lg border-2 border-primary-300 w-auto px-3"
                style="height:  37.6px;">
                <label class="block text-base font-medium mx-2">{{ label }}</label>
                <SearchIcon class="h-5 w-5" />
            </div>
            <slot v-else>

            </slot>
        </div>
        <modal v-model="isOpen" width="w-10/12"> 
            <viewer modalSelect  @select="select($event)" :api="data.api"></viewer>
        </modal>
    </div>
    <!--[$emit('update:modelvalue', $event.uid), label = $event.values[data.label_key]]--> 
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    data: Object,
    start_data: Object,
    custom: {
        type: Boolean,
        default: false
    },
    modelValue: [String, Number]
})
const emit = defineEmits(['update:modelValue', 'change']) 

const label = ref(props.data.label)

const select = e => { 
    console.log(e.value[props.data.value_name]);
    emit('update:modelValue', e.value[props.data.value_name].value)
    emit('change', e.value[props.data.value_name].value) 
    label.value = e.value[props.data.label_key] ?? e.value[props.data.label_key].label
    isOpen.value = false
}

const isOpen = ref(false) 


</script>

<style lang="scss" scoped>
</style>