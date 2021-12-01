<template>
    <div class="flex" id="litepie-datepicker">
        <litepie-datepicker
            :key="render" 
            as-single
            i18n="ru"
            :options="options"
            :disableDate="true"
            :placeholder="data.label"
            :formatter="formatter"
            :auto-apply="false"
            :modelValue="String(modelValue) ?? String(data.value_default)"
            @update:modelValue="change($event)"
        />
    </div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue'
const props = defineProps({
    data: Object,
    modelValue: [String, Number]
})

const emit = defineEmits(['update:modelValue', 'change'])

const render = ref(0)

watch(
    () => props.modelValue,
    (count, prevCount) => {
        render.value = render.value + 1
    }
)



const formatter = ref({
    date: 'DD.MM.YYYY',
    month: 'MMM'
})

const options = ref({
    footer: {
        apply: 'Потвердить',
        cancel: 'Отмена'
    }
})

const change = e => {
    emit('update:modelValue', e)
    emit('change')
}



</script>

<style lang="postcss" scoped>
</style>