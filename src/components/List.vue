<template>
    <div>
        <div>
            <select class="dropdown-primary">
                <option v-for="option in data.list" :key="option.value" :value="option.value">
                    {{option.label}}
                </option>
            </select>
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