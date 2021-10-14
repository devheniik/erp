<template>
    <div>
        <div>
            <input
               
              
                type="checkbox"
                class="
                    focus:ring-primary-500
                    h-4
                    w-4
                    text-primary-600
                    border-gray-300
                    rounded
                "
                @click="$emit('update:modelValue', !modelValue)"
                :value="modelValue"
            />
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