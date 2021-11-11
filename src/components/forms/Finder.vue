<template>
    <div v-if="data">
        <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr >
                                    <th v-for="(h, i) in data.table_header" :key="i" scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {{h}}
                                    </th> 
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(tr_d, Idx) in data.data" :key="Idx" :class="Idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                                    <td v-for="(td_d, i) in tr_d" :key="i" class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> 
                                        <span @click="i == 1 ? $emit('select', tr_d) : null" :class="i == 1 ? 'underline text-primary-500 cursor-pointer' : null">
                                            {{ td_d }} 
                                        </span>
                                    </td> 
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        data: Object
    })
</script>

<style lang="scss" scoped>

</style>