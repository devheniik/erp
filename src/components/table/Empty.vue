<template>
    <div class="bg-white py-8 h-full w-full flex items-center justify-center">
        <div class="text-center">
            <!-- <DatabaseIcon class="mx-auto h-12 w-12 text-gray-400" /> -->
            <h3 class="mt-2 text-sm font-medium text-gray-700">Нет данных</h3>
            <!-- <p class="mt-1 text-sm text-gray-500">
                Добавьте новую запись
            </p> -->
            <!-- <div class="mt-4">
                <button type="button"
                    class="inline-flex items-center px-3 py-1.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    Создать
                </button>
            </div> -->
        </div>
    </div>

</template>

<script setup>
    const props = defineProps({
        title: String,
        data: Object
    })
</script>