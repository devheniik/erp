<template>
    <div style="height: 37.5px" class="relative text-center border rounded-lg ">
        <label class="absolute -top-1.5 left-2 -mt-px inline-block px-1 bg-white pl-1 text-xs font-medium text-gray-900 uppercase">{{ label }}</label>
         <span class="flex items-end justify-center w-full whitespace-nowrap truncate" style="height: 30px;"><slot></slot></span>
    </div>
</template>

<script setup>
const props = defineProps({
    label: String
})
</script>

<style lang="scss" scoped>

</style>