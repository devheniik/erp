<template>
    <div>
        <div>
            <div
                @click="isOpen = true"
                class="flex items-center bg-primary-600 text-white rounded-lg border-2 border-primary-600 w-auto px-3"
                style="height: 40.8px;"
            >
                <label class="block text-sm font-medium mx-2">{{ modelValue ?? label }}</label>
                <SearchIcon class="h-5 w-5" />
            </div>
        </div>
        <modal v-model="isOpen">
            <uviewer modalSelect @select="[]" :api="data.entityLink"></uviewer>
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

const label = ref(props.data.label)

const log = e => console.log(e)

const isOpen = ref(false) 


</script>

<style lang="scss" scoped>
</style>