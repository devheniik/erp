<template>
<div class="flex flex-col w-full">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="(tr, i) in data" :key="i">
                            <td v-for="(td, inx) in tr" :key="inx" class="px-6 py-4 border whitespace-nowrap text-sm font-medium text-gray-900">
                                <div class="flex justify-between"> 
                                    <span>{{ td.label }}</span> 
                                    <span>{{ td.value }}</span> 
                                </div>
                            </td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
const props = defineProps({
    data: Array
})
</script>

<style lang="scss" scoped>

</style>