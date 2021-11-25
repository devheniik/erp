<template>
    <div class="min-w-[110px]"> 
        <input-text @keyup.enter="$emit('edit')" hideLabel v-bind="props" v-model="l_value">
        </input-text> 
    </div>
</template>

<script setup>
import {ref} from 'vue'
const props = defineProps({
    type: String,
    name: String,
    placeholder: String,
    value: [String, Number],
})

const l_value = ref(props.value ? props.value : null)
</script>

<style lang="scss" scoped>

</style>