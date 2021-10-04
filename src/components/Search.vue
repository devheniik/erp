<template>
    <div>
        <div> 
            <input type="text" @input="$emit('update:modelValue', $event.target.value)" class="input-primary" :placeholder="data.label" :value="modelValue" />
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    data: Object,
    modelValue: [String, Number]
})


</script>

<style lang="scss" scoped>
</style>