<template>
    <div v-if="!isLoad" class="w-full"> 
            <filters> </filters>  
            <modal  v-model="newPersonRef" width="w-8/12">
                <create></create>
            </modal>
        <div class="mt-5">
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-secondary-100">
                                    <tr>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ФиО / ОГРАНИЗАЦИЯ / № 
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ДОЛЖНОСТЬ / ОТДЕЛ
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ТЕЛЕФОН
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            СТАТУС
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ЛК
                                        </th>
                                        <th scope="col" class="relative px-6 py-3">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr v-for="person in data.result" :key="person.uid">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 h-10 w-10">
                                                    <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
                                                </div>
                                                <div class="ml-4">
                                                    <div class="text-sm font-medium text-gray-900">
                                                        {{ person.name }}
                                                    </div>
                                                    <div class="text-sm text-gray-500 whitespace-nowrap">
                                                        <span class="mr-1 font-medium">{{ person.org }}</span> 
                                                        <span class="text-primary-600 font-medium hover:underline">{{ person.uid }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm font-medium text-gray-900">{{ person.job }}</div>
                                            <div class="text-sm text-gray-500">{{ person.otdel }}</div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-bold">
                                            {{ person.number }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span
                                                class="badge-primary">
                                                {{ person.status }}
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                             
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <PencilIcon class="text-secondary-600 hover:text-secondary-900 h-4 w-4" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden bottom-0 fixed pagination sm:block">
            <pagination v-model:pagination="data.pagination"></pagination>
        </div>
        <div class="bottom-0 fixed w-full  lg:hidden">
            <pagination v-model:pagination="data.pagination"></pagination>
        </div>
    </div>
</template>

<script setup>
    import { ref, provide, watchEffect } from 'vue'
    import Filters from '../components/filters.vue'
    import Create from '../components/create.vue'
    import hooks from '../hooks/list'

    const {
        data,
        isLoad
    } = hooks()

    const newPersonRef = ref(false)

    provide('ref', newPersonRef)
    provide('refChange', () => newPersonRef.value = true)

    watchEffect(() => {
      console.log(newPersonRef.value);
    });
 

 
</script>

<style lang="scss" scoped>
    .pagination {
        width: calc(100% - 280px);
    }
</style>