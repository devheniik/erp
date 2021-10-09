<template>
    <div>
        <div>
            <div
                @click="isOpen = true"
                class="flex items-center justify-between bg-primary-600 text-white rounded-lg border-2 border-primary-600 w-auto px-3"
                style="height:  37.6px;"
            >
                <label class="block text-sm font-medium mx-2">{{ label }}</label>
                <SearchIcon class="h-5 w-5" />
            </div>
        </div>
        <modal v-model="isOpen" width="w-10/12">
            <uviewer modalSelect @select="select($event)" :api="data.entityLink"></uviewer>
        </modal>
    </div>
    <!--[$emit('update:modelvalue', $event.uid), label = $event.values[data.meanKey]]--> 
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    data: Object,
    modelValue: [String, Number]
})
const emit = defineEmits(['update:modelValue', 'change'])

const label = ref(props.data.label)

const select = e => { 
    emit('update:modelValue', e.uid)
    emit('change') 
    label.value = e.value[props.data.meanKey]
}

const isOpen = ref(false) 


</script>

<style lang="scss" scoped>
</style>