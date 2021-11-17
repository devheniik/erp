<template>
    <div>
        <div> 
            <input :disabled="data.readonly" type="text" @input="$emit('update:modelValue', $event.target.value)" @keyup.enter="$emit('change')"  class="input-primary" :placeholder="data.label" :value="modelValue  ?? data.value.default" />
        </div>
    </div>
</template>

<script setup> 
const props = defineProps({
    data: Object,
    modelValue: [String, Number]
})

const emit = defineEmits(['update:modelValue','change'])
 


</script>

<style lang="scss" scoped>
</style>