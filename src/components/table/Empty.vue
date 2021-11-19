<template>
    <div class="bg-white py-8 h-full w-full flex items-center justify-center">
        <div class="text-center"> 
            <h3 class="mt-2 text-sm font-medium text-gray-700">Нет данных</h3> 
        </div>
    </div>

</template>

<script setup>
    const props = defineProps({
        title: String,
        data: Object
    })
</script>