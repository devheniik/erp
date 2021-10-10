<template>
    <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto bottom-scroll sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block w-full sm:px-6 lg:px-8">
                        <div class="border-b border-gray-200 sm:rounded-lg">
                            <table class="w-full divide-y divide-gray-200">
                                <thead class="bg-primary-50">
                                    <tr>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            №                             
                                        </th>
                                        <th v-for="(name, i) in data.headers" :key="i" scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            {{ name }}
                                        </th> 
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr v-for="col in data.body" :key="col.uid"> 
                                        <td @click="$emit('select', col)" class="px-6 py-4 whitespace-nowrap text-left text-sm text-primary-600 hover:underline cursor-pointer">
                                            {{ col.uid }}
                                        </td> 
                                        <td  v-for="(field, i) in col.value" :key="i" class="px-6 py-4 whitespace-nowrap text-sm text-left">
                                             {{ field }}
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
    data: Object
})

    const emits = defineEmits(['select'])

</script>



<style lang="scss" scoped> 
    .bottom-scroll{
        scrollbar-width: thin;
        scrollbar-color: #10B981 #A7F3D0;
    }
</style>