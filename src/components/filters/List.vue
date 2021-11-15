<template>
    <div>
        <div>
            <select :disabled="data.readonly" @change="$emit('update:modelValue', $event.target.value); $emit('change')" class="dropdown-primary"> 
                <option  v-for="option in data.list" :key="option.value" :value="option.value" :selected="modelValue == option.value">
                    {{option.label}}
                </option>
            </select>
        </div>
         <!-- @change=" $emit('change')" -->
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object,
    modelValue: [String, Number, Boolean, Array, Object]
})



</script>

<style lang="scss" scoped>
</style>